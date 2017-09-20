const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:admin@ds139884.mlab.com:39884/slick-api', {useMongoClient: true})

app.use(bodyParser.json())
const products = require('./controllers/product')(app)

app.get('', (req, res) => {
	res.send('ok')
})

app.listen(3000, () => {
	console.log('Server is listening....')
})