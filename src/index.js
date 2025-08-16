const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const categoriasRoutes = require('./routes/categorias');
const movimientosRoutes = require('./routes/movimientos');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/movimientos', movimientosRoutes);

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
