//const _ = require('lodash')
const Product = require('../models/product')
 
 module.exports = app => {
   //_products = []
 
  // Create
  app.post('/product', (req, res) => {
     //_products.push(req.body)
     //res.json({ info: 'product created successfully.' })
	 const newProduct = new Product(req.body)
	 newProduct
	 .save()
	 .then(result => {
		 res.json({ info: 'product created successfully.' })
	 })
	 .catch(err => console.error(err))
   })
   
  // Read All
   app.get('/product', (req, res) => {
     //res.send(_products)
	 Product.find()
	 .then(products => {
		 res.json(products)
	 })
	 .catch(err => console.error(err))
   })
   
   // read by id
   app.get('/product/:id', (req, res) => {
     //res.send(_products)
	 Product.find({ _id: req.params.id }, req.body)
	 .then(products => {
		 res.json(products)
	 })
	 .catch(err => console.error(err))
   })
   
   // Update
   app.put('/product/:id', (req, res) => {
     // const index = _.findIndex(_products, {
       // id: parseInt(req.params.id)
     // })
     // _.merge(_products[index], req.body)
     // res.json({ info: 'product updated successfully' })
	 Product.update({ _id: req.params.id }, req.body)
       .then(product => {
         res.json({ info: 'product updated successfully' })
       })
       .catch(err => console.error(err))
   })
   
   // Delete
   app.delete('/product/:id', (req, res) => {
     // _.remove(_products, product => {
       // return product.id === parseInt(req.params.id)
     // })
    // res.json({ info: 'product removed successfully' })
	Product.remove({ _id: req.params.id })
	.then(() => {
		res.json({ info: 'product removed successfully' })
	})
	.catch(err => console.error(err))
   })
 
 }