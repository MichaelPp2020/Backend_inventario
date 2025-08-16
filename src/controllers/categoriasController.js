const Categoria = require('../models/Categoria');

exports.listar = async (req, res) => {
  const categorias = await Categoria.listar();
  res.json(categorias);
};

exports.obtener = async (req, res) => {
  const categoria = await Categoria.obtener(req.params.id);
  if (!categoria) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  res.json(categoria);
};

exports.crear = async (req, res) => {
  const { nombre, descripcion } = req.body;
  await Categoria.crear(nombre, descripcion);
  res.json({ mensaje: 'Categoría creada correctamente' });
};

exports.actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  await Categoria.actualizar(id, nombre, descripcion);
  res.json({ mensaje: 'Categoría actualizada correctamente' });
};

exports.eliminar = async (req, res) => {
  const { id } = req.params;
  await Categoria.eliminar(id);
  res.json({ mensaje: 'Categoría eliminada correctamente' });
};
