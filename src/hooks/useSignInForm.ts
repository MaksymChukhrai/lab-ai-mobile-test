import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useRequestMagicLinkMutation } from "store/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/navigation";
import { useAuth } from "./useAuth";

const signInSchema = z.object({
  email: z.email({ message: "signIn.errorInvalidEmail" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const useSignInForm = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [requestMagicLink, { isLoading, isSuccess }] =
    useRequestMagicLinkMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleButtonSignIn = () => {
    if (isAuthenticated) {
      navigate(PATHS.UPLOAD);
    } else {
      navigate(PATHS.SIGN_IN);
    }
  };

  const onSubmit = async (data: SignInFormData) => {
    try {
      await requestMagicLink({ email: data.email }).unwrap();
    } catch (err: unknown) {
      let errorMessage = t("errorMessage");
      if (err && typeof err === "object" && "data" in err) {
        errorMessage = (err as { data?: string }).data || errorMessage;
      }
      setError("email", {
        type: "server",
        message: t("signIn.errorFromServer", { message: errorMessage }),
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    isSuccess,
    handleButtonSignIn,
  };
};
