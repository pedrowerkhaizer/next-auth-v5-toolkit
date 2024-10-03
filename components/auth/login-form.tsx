import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      showSocial
      backButtonLabel="Don't have an account/"
      backButtonHref="/auth/register"
    >
      Login Form!
    </CardWrapper>
  );
};
