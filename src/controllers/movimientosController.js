const Movimiento = require('../models/Movimiento');

exports.listar = async (req, res) => {
  const movimientos = await Movimiento.listar();
  res.json(movimientos);
};

exports.obtener = async (req, res) => {
  const movimiento = await Movimiento.obtener(req.params.id);
  if (!movimiento) return res.status(404).json({ mensaje: 'Movimiento no encontrado' });
  res.json(movimiento);
};

exports.crear = async (req, res) => {
  const { producto_id, tipo, cantidad } = req.body;
  if (!['entrada', 'salida'].includes(tipo)) {
    return res.status(400).json({ mensaje: 'Tipo debe ser "entrada" o "salida"' });
  }
  await Movimiento.crear(producto_id, tipo, cantidad);
  res.json({ mensaje: 'Movimiento registrado correctamente' });
};
