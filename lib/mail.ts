import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/api/auth/new-verication?token=${token}`;

  await resend.emails.send({
    from: "auth-v5-toolkit@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<a href="${confirmLink}">Confirm your email</a>`,
  });
};
