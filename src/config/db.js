const mongoose = require("mongoose")
const dns = require("dns") // 1. 👈 ADD THIS LINE



function connectToDB(){
    dns.setServers(["1.1.1.1", "8.8.8.8"]) // 2. 👈 ADD THIS LINE
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("server is connected to DB")
    })
    .catch(err => {
        // THIS IS THE IMPORTANT CHANGE: Add err.message here
        console.log("error connecting to DB:", err.message)
        process.exit(1)
    })
}

module.exports = connectToDB