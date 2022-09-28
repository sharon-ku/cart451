const mongoose = require("mongoose");
const PhoneUseSchema = new mongoose.Schema({
    id:Number,
    Date:String,
    Usage:Number,
    Notifications:Number,
    TimesOpened:Number,
    App:String,
})

const PhoneUse = mongoose.model("PHONEUSEENTRY", PhoneUseSchema, "AIRBNB data");
module.exports = PhoneUse;
