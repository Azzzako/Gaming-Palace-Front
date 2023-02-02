const { Products } = require("../db");
const products = require("../utils/loadDB");

bulkCreate: getProducts = async () => {
  const allProducts = await Products.count();
  if (allProducts < 1) {
    let obj = {};
    let filter = products.map((product) => {
      obj = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageurl: product.imageurl,
        category: product.category,
        trademark: product.trademark,
        description: product.description,
      };
      return obj;
    });

    await Products.bulkCreate(filter);
  }
};

const getByName = async (name) => {
  try {
    let product = await Products.findAll({
      where: {
        disabled: false,
      },
    });
    product = product.filter((ele) =>
      ele.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!product.length) {
      throw "The product does not exist.";
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};

const productsDB = async () => {
  const allProducts = await Products.findAll();
  if (!allProducts.length) {
    let obj = {};
    let filter = products.map((product) => {
      obj = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageurl: product.imageurl,
        category: product.category,
        trademark: product.trademark,
        description: product.description,
      };
      return obj;
    });
    return await Products.bulkCreate(filter);
  } else {
    const productsEnable = await Products.findAll({
      where: {
        disabled: false,
      },
    });
    return productsEnable;
  }
};

module.exports = {
  getProducts,
  getByName,
  productsDB,
};
