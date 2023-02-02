const { Products, Category } = require("../db"); //database
const { Router } = require("express");
const router = Router();
const { Sequelize, ARRAY } = require('sequelize');

function filtera (word, array) {
  console.log('ENTRANDO A FILTER1')
  console.log(word)
  console.log(array)
  //chequear si los parámetros son correctos
  if (!word) {return "Debe haber un primer parámetro con el valor del filtro marca a filtrar"}
  if (!Array.isArray(array)){return "El segundo parámetro debe ser un array para filtrar"}
//primero si word = 0, es decir, filtro desactivado, devolver el array tal como está.
if (word === 0) {return array}
//segundo si hay una palabra para filtrar, filtrar la marca
let result
let arraytofilter = []
arraytofilter = array
result = arraytofilter.filter( (x) => x.dataValues.trademark === word)
return result
}

async function filterb (word, array){
  console.log('ENTRANDO A FILTERB')
  console.log(word)
  console.log(array)
  //chequear si los parámetros son correctos
  if (!word) {return "Debe haber un primer parámetro con el valor del filtro categoria a filtrar"}
  if (!Array.isArray(array)){return "El segundo parámetro debe ser un array para filtrar"}
//primero si word = 0, es decir, filtro desactivado, devolver el array tal como está.
if (word === 0) {return array}
//segundo si hay una palabra para filtrar, filtrar la marca
let result
let arraytofilter = []
arraytofilter = array
result = arraytofilter.filter( (x) => x.dataValues.trademark === word)
return result
}
async function getarray (word, filter1, filter2, order) {
  //chequear si los parámetros son correctos

//primero resultados de la busqueda
let results = await searchresults(word)
//segundo hacer primerfiltro (filter1) 
results = filtera(filter1, results)
return results
}



async function searchresults (word) {
    console.log('Search results!!!')
    // console.log(products) 
  const words = word
    const productsEnable = await Products.findAll({
      where: {
        name:  { [Sequelize.Op.like]: `%${words}%`},
      },
    });
    return productsEnable;
    console.log('SALIENDO DE SEARCHRESULTS')
}
    
router.get("/", async (req, res) => {
    const { word,  filter1, filter2, order} = req.body
    console.log ('BODY ES')
    console.log (req.body)
    try {
        let response = await getarray(word, filter1)
        res.status(201).send(response);
      
    } catch (error) {
      console.log(error)
      res.status(404).send(error);
    }
  });
// module.exports = {searchresults}

module.exports = router;