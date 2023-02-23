import admin from "firebase-admin"
import { getApps } from "firebase-admin/app"

// serviceAccount = require("Your serviceAccountKEY")

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

if(!getApps().length){
    admin.initializeApp({
        credential :admin.credential.cert(serviceAccount),
    });
}

const adminDb = admin.firestore();
export {adminDb};