const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'No autorizado' });

  try {
    const decoded = jwt.verify(token, 'tu_secreto_jwt');
    req.usuario = decoded;
    next();
  } catch {
    res.status(401).json({ mensaje: 'Token inválido' });
  }
};

module.exports = authMiddleware;
