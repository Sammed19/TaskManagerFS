import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {

    console.log(req.method);
    console.log(req.url);

    // res.send("About Page");
    res.json({
    name: "Rahul",
    age: 25
});

});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});