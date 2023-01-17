import cron from 'node-cron';
import creditOriginationFee from './creditOriginationFee';

cron.schedule('0 0 * * *', () => {
    // Call the creditOriginationFee middleware function
    creditOriginationFee();
}, {
    scheduled: true,
    timezone: "Africa/Nairobi"
});
