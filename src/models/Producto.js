const pool = require('../config/db');

class Producto {
  static async listar() {
    const rows = await pool.query('SELECT * FROM productos');
    return rows;
  }

  static async obtener(id) {
    const rows = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0];
  }

  static async crear(nombre, descripcion, precio, stock, categoria_id) {
    await pool.query(
      'INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES (?, ?, ?, ?, ?)',
      [nombre, descripcion, precio, stock, categoria_id]
    );
  }

  static async actualizar(id, nombre, descripcion, precio, stock, categoria_id) {
    await pool.query(
      'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?',
      [nombre, descripcion, precio, stock, categoria_id, id]
    );
  }

  static async eliminar(id) {
    await pool.query('DELETE FROM productos WHERE id = ?', [id]);
  }
}

module.exports = Producto; // <-- IMPORTANTE
