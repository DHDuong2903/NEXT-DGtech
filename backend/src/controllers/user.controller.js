import { prisma } from "../libs/prisma.js";

export const syncUser = async (req, res) => {
  try {
    const { clerkId, email, firstName, lastName } = req.body;

    if (!clerkId || !email) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Tìm user theo clerkId hoặc email
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ clerkId }, { email }],
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          email,
          name: `${firstName} ${lastName}`,
        },
      });
    } else {
      // Nếu có rồi thì cập nhật clerkId nếu chưa set
      if (!user.clerkId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { clerkId },
        });
      }
    }

    return res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
