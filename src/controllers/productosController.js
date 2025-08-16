const Producto = require('../models/Producto');

exports.listar = async (req, res) => {
  const productos = await Producto.listar();
  res.json(productos);
};

exports.obtener = async (req, res) => {
  const producto = await Producto.obtener(req.params.id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
};

exports.crear = async (req, res) => {
  const { nombre, descripcion, precio, stock, categoria_id } = req.body;
  await Producto.crear(nombre, descripcion, precio, stock, categoria_id);
  res.json({ mensaje: 'Producto creado correctamente' });
};

exports.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock, categoria_id } = req.body;
  await Producto.actualizar(id, nombre, descripcion, precio, stock, categoria_id);
  res.json({ mensaje: 'Producto actualizado correctamente' });
};

exports.eliminar = async (req, res) => {
  const { id } = req.params;
  await Producto.eliminar(id);
  res.json({ mensaje: 'Producto eliminado correctamente' });
};
