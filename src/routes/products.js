const express = require("express")
const db = require("../db/db");
const { products2 } = require("../db/schema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const entries = await db.select().from(products2)

        return res.status(200).json(entries)
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal server error."
        })
    }
})

module.exports = router