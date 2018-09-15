const express = require("express");
const app = express();

app.get("/api/catalog", (req, res) => {
    const catalog = [
        {
            id: 1,
            name: "iPhone 7",
            image: "",
            weight: "128 g",
            sim: "Nano Sim",
            os: "iOS 12",
            price: "500 €"
        },
        {
            id: 2,
            name: "Samsung Galaxy S7",
            image: "",
            weight: "152 g",
            sim: "Nano Sim",
            os: "Android",
            price: "230 €"
        }
    ];

    res.json(catalog);
})
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))

