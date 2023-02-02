const { Router } = require("express");
const router = Router();
const { getByName, productsDB } = require("../controllers/productsController");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let nameProducts = await getByName(name);
      res.status(200).send(nameProducts);
    } else {
      let allProducts = await productsDB();
      res.status(201).send(allProducts);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
