const { Router} = require('express'); //-> Permite definir nuevas rutas para el servidor
 const router = Router();


router.get('/', (req, res) => {
    //res.send('Hello world!!');-> send devuelve un string
    const data = {
        "name": "Héctor",
        "password": "Hacking_04"
    }
    res.json(data); //-> devuelve un archivo json
})


module.exports = router;