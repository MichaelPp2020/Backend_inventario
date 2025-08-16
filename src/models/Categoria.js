const pool = require('../config/db');

class Categoria {
  static async listar() {
    const rows = await pool.query('SELECT * FROM categorias');
    return rows;
  }

  static async obtener(id) {
    const rows = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
    return rows[0];
  }

  static async crear(nombre, descripcion) {
    await pool.query(
      'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion]
    );
  }

  static async actualizar(id, nombre, descripcion) {
    await pool.query(
      'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
      [nombre, descripcion, id]
    );
  }

  static async eliminar(id) {
    await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
  }
}

module.exports = Categoria; // <-- IMPORTANTE
