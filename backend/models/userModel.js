import  mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true},
    budget: [{
        name: String,
        amount: Number,
    }],
    linkedAccounts: [{
        accountID: String,
        bankName: String,
        accountNo: String,
    }]
}, 
{
    timestamps: true
}

)

const User = mongoose.model("User", userSchema)

export default User;