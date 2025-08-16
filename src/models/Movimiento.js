const pool = require('../config/db');

class Movimiento {
  static async listar() {
    const rows = await pool.query('SELECT * FROM movimientos_inventario');
    return rows;
  }

  static async obtener(id) {
    const rows = await pool.query('SELECT * FROM movimientos_inventario WHERE id = ?', [id]);
    return rows[0];
  }

  static async crear(producto_id, tipo, cantidad) {
    // Insertar movimiento
    await pool.query(
      'INSERT INTO movimientos_inventario (producto_id, tipo, cantidad, fecha) VALUES (?, ?, ?, NOW())',
      [producto_id, tipo, cantidad]
    );

    // Actualizar stock del producto
    if (tipo === 'entrada') {
      await pool.query(
        'UPDATE productos SET stock = stock + ? WHERE id = ?',
        [cantidad, producto_id]
      );
    } else if (tipo === 'salida') {
      await pool.query(
        'UPDATE productos SET stock = stock - ? WHERE id = ?',
        [cantidad, producto_id]
      );
    }
  }
}

module.exports = Movimiento; // <-- IMPORTANTE
