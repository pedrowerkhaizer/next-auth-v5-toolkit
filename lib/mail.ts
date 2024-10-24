import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "auth-v5-toolkit@resend.dev",
    to: email,
    subject: "Two Factor Authentication",
    html: `<p>Your two factor authentication token is: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "auth-v5-toolkit@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<a href="${resetLink}">Reset your password</a>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "auth-v5-toolkit@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<a href="${confirmLink}">Confirm your email</a>`,
  });
};
