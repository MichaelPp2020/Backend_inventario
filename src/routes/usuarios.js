const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController'); // <-- revisa la ruta
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', usuariosController.listar);   // listar usuarios
router.post('/', usuariosController.crear);   // crear usuario

module.exports = router;
