import * as mongoose from "mongoose";


const deConnection = async () => {
    await mongoose.connect(process.env.DB_URL as string)
        .then(() => {
            console.log("Connected to the database...");
        })
        .catch(err => {
            console.error(err);
        })
}

export default deConnection;
