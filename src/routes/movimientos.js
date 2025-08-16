const express = require('express');
const router = express.Router();
const movimientosController = require('../controllers/movimientosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', movimientosController.listar);
router.get('/:id', movimientosController.obtener);
router.post('/', movimientosController.crear);

module.exports = router;
