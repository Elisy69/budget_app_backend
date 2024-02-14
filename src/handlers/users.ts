import prisma from "../db.js";
import { createJWT, hashPassword, comparePasswords } from "../modules/auth.js";

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.users.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signin = async (req, res) => {
  const users = await prisma.users.findUnique({
    where: { username: req.body.username },
  });

  const isValid = await comparePasswords(req.body.password, users.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(users);
  res.json({ token });
};
