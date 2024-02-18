import prisma from "../db.js";

export const getIncomeCat = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: {
      id: req.users.id,
    },
    include: {
      income_categories: true,
    },
  });
  res.json({ data: user.income_categories });
};

export const createIncomeCat = async (req, res) => {
  const income = await prisma.income_categories.create({
    data: {
      name: req.body.name,
      userId: req.user.id,
    },
  });
  res.json({ data: income });
};
