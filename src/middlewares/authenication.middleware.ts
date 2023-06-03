import jwt from 'jsonwebtoken';
const secretKey = 'mysecretkey';

export const requireLogin = (req, res, next) => {
  if (req.session && req.session.user) {
    // If the user is authenticated, allow them to access the resource
    next();
  } else {
    // If the user is not authenticated, redirect them to the authentication page
    res.redirect('/authentication');
  }
};
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};
