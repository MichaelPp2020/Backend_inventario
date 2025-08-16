const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  // Buscar usuario por correo
  const usuario = await Usuario.obtenerPorCorreo(correo);
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

  // Comparar contraseña
  const valido = await bcrypt.compare(contraseña, usuario.contraseña);
  if (!valido) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

  // Generar token JWT
  const token = jwt.sign(
    { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol },
    process.env.JWT_SECRET, // <-- Aquí va tu secret
    { expiresIn: '1h' }
  );

  res.json({ token });
};
