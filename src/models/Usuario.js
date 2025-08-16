const pool = require('../config/db');

class Usuario {
  static async crear(nombre, correo, contraseña, rol) {
    await pool.query(
      'INSERT INTO usuarios (nombre, correo, contraseña, rol) VALUES (?, ?, ?, ?)',
      [nombre, correo, contraseña, rol]
    );
  }

  static async obtenerPorCorreo(correo) {
    const rows = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
    return rows[0];
  }

  static async listar() {
    const rows = await pool.query('SELECT id, nombre, correo, rol FROM usuarios');
    return rows;
  }
}

module.exports = Usuario;
