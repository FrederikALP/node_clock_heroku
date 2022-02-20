const express = require("express");
const app = express();
app.use(express.static('public'));

// sendFile to send a file as a response
app.get("/", (req, res) => {
    // __dirname gives the path of where the file it is written is located
    res.sendFile(__dirname + "/public/clock.html");
});


app.listen(process.env.PORT || "5000", () => {
    console.log("The Server is running", 5000);
});