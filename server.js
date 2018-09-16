const express = require("express");
const app = express();

app.get("/api/catalog", (req, res) => {
    const catalog = [
        {
            id: 1,
            name: "iPhone 7",
            image: "https://static.phonehouse.es/res/autoimg/34759_spc_450_450_qhigh_product.jpg",
            weight: "128 g",
            sim: "Nano Sim",
            os: "iOS 12",
            price: "500 €"
        },
        {
            id: 2,
            name: "Samsung Galaxy S7",
            image: "https://static.phonehouse.es/res/autoimg/33563_spc_450_450_qhigh_product.jpg",
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

