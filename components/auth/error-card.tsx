import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops, something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex flex-row justify-center items-center space-x-4">
        <ExclamationTriangleIcon className="h-8 w-8 text-destructive" />
        <p className="text-sm text-destructive">
          Something went wrong while trying to log you in. Please try again
          later.
        </p>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
