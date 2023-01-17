const mongoose = require('mongoose');
const Loan = require('./models/Loan'); // import the Loan model
const sms = require('./sms'); // import the SMS module

// function to check for overdue loans and send notifications
const loanMonitoring = async () => {
    try {
        // query the database for loans that are overdue
        const overdueLoans = await Loan.find({ status: 'overdue' });

        // iterate through the overdue loans
        for (const loan of overdueLoans) {
            // send SMS to borrower
            sms.sendSMS(loan.borrower.phone, `Your loan of ${loan.amount} is overdue. Please make a payment as soon as possible.`);
            // send SMS to guarantor
            sms.sendSMS(loan.guarantor.phone, `The loan of ${loan.amount} that you guaranteed is overdue. Please follow up with the borrower.`);
        }
    } catch (err) {
        console.log(err);
    }
}

// run the loan monitoring function at specified intervals (e.g. every day)
setInterval(loanMonitoring, 86400000);
