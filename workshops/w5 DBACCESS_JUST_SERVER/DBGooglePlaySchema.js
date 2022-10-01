const mongoose = require("mongoose");
const GooglePlayAppSchema = new mongoose.Schema({
    id:Number,
    App:String,
    Category:String,
    Rating:Number,
    Reviews:Number,
    Size:String,
    Installs:String,
    Type:String,
    Price:Number,
    ContentRating:String,
    Genres:String,
    LastUpdated:Date,
    CurrentVer:String,
    AndroidVer:String,
})

const GooglePlayApp = mongoose.model("GOOGLEPLAYAPPENTRY", GooglePlayAppSchema, "GooglePlayStoreApps");
module.exports = GooglePlayApp;
