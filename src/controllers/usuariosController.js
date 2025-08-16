const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

exports.listar = async (req, res) => {
  const usuarios = await Usuario.listar();
  res.json(usuarios);
};

exports.crear = async (req, res) => {
  const { nombre, correo, contraseña, rol } = req.body;
  const hash = await bcrypt.hash(contraseña, 10);
  await Usuario.crear(nombre, correo, hash, rol);
  res.json({ mensaje: 'Usuario creado correctamente' });
};
