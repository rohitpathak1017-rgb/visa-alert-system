export const validateAlert = (req, res, next) => {
  if (!req.body) return next(); // safety

  const { country, city, visaType, status } = req.body;

  // Case 1: Only status update (PUT)
  if (status && !country && !city && !visaType) {
    return next();
  }

  // Case 2: New alert (POST)
  if (!country || !city || !visaType) {
    return res.status(400).json({ message: "country, city, visaType required" });
  }

  next();
};



