"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date() > new Date(existingToken.expires);
  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  return { success: "Email verified!" };
};

export const deleteVerificationToken = async (token: string) => {
  try {
    await db.verificationToken.delete({
      where: {
        token,
      },
    });
  } catch (error) {
    console.log(`Error deleting verification token: ${error}`);
  }
};
