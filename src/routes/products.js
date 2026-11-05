const express = require("express");
const db = require("../db/db");
const { products2 } = require("../db/schema");
const {eq} = require("drizzle-orm")

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const entries = await db.select().from(products2);

    return res.status(200).json(entries);
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Internal server error.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [entry] = await db
      .select()
      .from(products2)
      .where(eq(products2.id + req.params.id));

    if (!entry) {
      return res.status(404).json({
        message: "Product not found!",
      });

      return res.status(200).json(entry);
    }
  } catch (err) {
    return res.status(500).json({
        message: err.message || "Internal server error."
    })
  }
});

module.exports = router;
