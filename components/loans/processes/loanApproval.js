import express from "express";
import { check, validationResult } from "express-validator";
import Loan from "../models/Loan";
import Guarantor from "../models/Guarantor";
import { setMinimumAcceptableLoanScore } from './systemAdmin';
import { calculateLoanPrice } from './loanServices';

const router = express.Router();

// Initial review middleware
router.use((req, res, next) => {
  // Check if borrower meets basic eligibility criteria
  if (req.body.income < 30000) {
    return res
      .status(400)
      .json({ error: "Borrower does not meet basic income requirements" });
  }
  if (req.body.creditScore < 550) {
    return res.status(400).json({ error: "Borrower has low credit score" });
  }
  next();
});

// Credit check middleware
router.use((req, res, next) => {
  // Check borrower's credit history and score
  // ...
  next();
});

// Income verification middleware
router.use((req, res, next) => {
  // Verify borrower's income and employment status
  // ...
  next();
});

// Guarantor evaluation middleware
router.use((req, res, next) => {
  // Evaluate creditworthiness of guarantors and deposit amount provided
  const promises = req.body.guarantors.map((guarantor) =>
    Guarantor.findById(guarantor.id)
  );
  Promise.all(promises)
    .then((guarantors) => {
      let totalDeposit = 0;
      for (let i = 0; i < guarantors.length; i++) {
        if (!guarantors[i]) {
          return res.status(400).json({ error: "Invalid guarantor ID" });
        }
        if (guarantors[i].income < 30000) {
          return res
            .status(400)
            .json({
              error: "Guarantor does not meet basic income requirements",
            });
        }
        if (guarantors[i].creditScore < 550) {
          return res
            .status(400)
            .json({ error: "Guarantor has low credit score" });
        }
        totalDeposit += req.body.guarantors[i].deposit;
      }
      if (totalDeposit < req.body.loanAmount) {
        return res
          .status(400)
          .json({ error: "Guarantor deposit is not sufficient" });
      }
      next();
    })
    .catch((err) =>
      res.status(500).json({ error: "Error evaluating guarantors" })
    );
});

// Automatic loan approval or rejection

router.route('/').post(async (req, res) => {
    try {
        const { borrowerId, loanAmount, loanTerm } = req.body;
        const loanPrice = await calculateLoanPrice(borrowerId, loanAmount, loanTerm);
        const minimumAcceptableLoanScore = await MinimumAcceptableLoanScore.findOne();
        if (loan.borrower.riskScore >= minimumAcceptableLoanScore.score) {
            const loan = new Loan({ borrowerId, loanAmount, loanTerm, price: loanPrice });
            await loan.save();
            res.status(201).json({ loan });
        } else {
            res.status(400).json({ message: 'Loan application rejected' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




// Create loan route
router.post(
  "/",
  [
    check("loanAmount").isNumeric(),
    check("guarantors").isArray(),
    check("guarantors.*.id").isMongoId(),
    check("guarantors.*.deposit").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create loan
    const loan = new Loan({
      loanAmount: req.body.loanAmount,
      borrower: req.body.borrower,
      guarantors: req.body.guarantors,
    });
    loan
      .save()
      .then((loan) => res.json(loan))
      .catch((err) => res.status(500).json({ error: "Error creating loan" }));
  }
);

module.exports = router;
