const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware to check if user is an artist
const isArtist = (req, res, next) => {
  if (req.user.role !== 'artist') {
    return res.status(403).json({ error: 'Access denied. Artists only.' });
  }
  next();
};

// Middleware to check if user is an attendee
const isAttendee = (req, res, next) => {
  if (req.user.role !== 'attendee') {
    return res.status(403).json({ error: 'Access denied. Attendees only.' });
  }
  next();
};

module.exports = { auth, isArtist, isAttendee };