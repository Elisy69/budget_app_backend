import prisma from "../db.js";
export const getIncomes = async (req, res) => {
    const user = await prisma.users.findUnique({
        where: {
            id: req.users.id,
        },
        include: {
            Income_categories: true,
        },
    });
    res.json({ data: user.Income_categories });
};
//# sourceMappingURL=categories.js.map