const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch'); //Hace peticiones get, post, put, delete a otro servicio

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); //Obtiene los datos
    const users = await response.json(); //Convierte los datos string a formato json.

    res.json(users);
});

module.exports = router;


