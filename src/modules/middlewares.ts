import { validationResult } from "express-validator";
export const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("ADSFKLJNDKLS:FGJNDJKS:GNDJKS:GNDJKLS:GN");
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    console.log("ADSFKLJNDKLS:FGJNDJKS:GNDJKS:GNDJKLS:GN");
    next();
  }
};
