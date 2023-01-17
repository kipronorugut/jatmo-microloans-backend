const cron = require('cron');
const SalesAgent = require('./models/salesAgentModel');

const calculateCommission = async () => {
    // Fetch all sales agents from the database
    const salesAgents = await SalesAgent.find({});

    // Calculate commission, bonus, and guarantor bonus for each agent
    for (const agent of salesAgents) {
        agent.commissionEarned = agent.loansSold * agent.loanFee;
        agent.bonusEarned = agent.loansSold * agent.bonus;
        agent.guarantorBonusEarned = agent.loansSold * agent.guarantorBonus;
    }

    // Update the database with the new commission, bonus, and guarantor bonus values
    await SalesAgent.updateMany({}, { $set: { commissionEarned: agent.commissionEarned, bonusEarned: agent.bonusEarned, guarantorBonusEarned: agent.guarantorBonusEarned } });
};

const job = new cron.CronJob({
    cronTime: '0 0 1 * *', // Run the job on the first day of each month at 00:00
    onTick: calculateCommission,
    start: true,
    timeZone: 'UTC'
});
