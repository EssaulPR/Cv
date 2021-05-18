
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html', {titulo: 'Curriculum vitae'});
    // res.sendFile(path.join(__dirname, 'views/index.html')); esto sirve para cuando usamos html
    // console.log(__dirname); el dirname no sirvve para ayudar a buscar el archivo del html

});
router.get('/contact', (req, res)=>{
    res.render('contact.html', {titulo: 'Curriculum vitae', numero: '833 2615341'});
});

module.exports = router;