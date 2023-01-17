import cron from "node-cron";
import { sendNotification } from "./notification";
import Loan from "./models/Loan";

export const loanEventNotification = () => {
  cron.schedule("0 9 * * *", async () => {
    const loans = await Loan.find({});
    loans.forEach(async (loan) => {
      // Upcoming Repayment
      if (loan.loanEndDate - Date.now() < 3 * 24 * 60 * 60 * 1000) {
        sendNotification(
          loan.borrower,
          "Upcoming Repayment",
          "You have an upcoming repayment on your loan."
        );
      }
      // Overdue Loan
      if (loan.loanEndDate < Date.now()) {
        sendNotification(
          loan.borrower,
          "Overdue Loan",
          "Your loan is overdue. Please make a repayment as soon as possible."
        );
      }
      // Late Notice
      if (loan.loanEndDate < Date.now() - 30 * 24 * 60 * 60 * 1000) {
        sendNotification(
          loan.borrower,
          "Late Notice",
          "Your loan is overdue for 30 days, please make a repayment as soon as possible to avoid further charges."
        );
      }
      // Approved Application
      if (loan.loanStatus === "approved") {
        sendNotification(
          loan.borrower,
          "Approved Application",
          "Your loan application has been approved."
        );
      }
      // Rejected Application
      if (loan.loanStatus === "rejected") {
        sendNotification(
          loan.borrower,
          "Rejected Application",
          "Your loan application has been rejected."
        );
      }
      // Rollover
      if (loan.loanStatus === "rollover") {
        sendNotification(
          loan.borrower,
          "Rollover",
          "Your loan has been rolled over."
        );
      }
      // Rollover Charge
      if (loan.rolloverCharge) {
        sendNotification(
          loan.borrower,
          "Rollover Charge",
          "A rollover charge has been applied to your loan."
        );
      }
      // Interest Applied
      if (loan.interest) {
        sendNotification(
          loan.borrower,
          "Interest Applied",
          "Interest has been applied to your loan."
        );
      }
      // Payment Received
      if (loan.payment) {
        sendNotification(
          loan.borrower,
          "Payment Received",
          "A payment has been received on your loan."
        );
      }
      // Defaulted Loan
      if (loan.loanStatus === "defaulted") {
        sendNotification(
          loan.borrower,
          "Defaulted Loan",
          "Your loan has defaulted."
        );
      }
      // Closed Loan
      if (loan.loanStatus === "closed") {
        sendNotification(
          loan.borrower,
          "Closed Loan",
          "Your loan has been closed."
        );
      }
    });
  });
};
