import firebase from "firebase-admin";
import cron from "node-cron";

// Initialize Firebase Admin SDK
firebase.initializeApp({
  credential: firebase.credential.cert(
    "<path_to_your_firebase_admin_sdk_json_file>"
  ),
  databaseURL: "<your_firebase_database_url>",
});

// Function to download all users from Firebase
const downloadUsers = async () => {
  try {
    const users = await firebase.auth().listUsers();
    for (const user of users.users) {
      const borrower = new Borrower({
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        // other fields
      });
      await borrower.save();
    }
    console.log("Users downloaded and saved to database successfully.");
  } catch (err) {
    console.log("Error downloading and saving users:", err.message);
  }
};

// Schedule the function to run every day at 2 AM
cron.schedule("0 2 * * *", downloadUsers);
