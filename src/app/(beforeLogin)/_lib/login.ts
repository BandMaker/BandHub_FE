"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const login = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  if (!formData.get("email") || !(formData.get("email") as string)?.trim()) {
    return { message: "no_email" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  let shouldRedirect = false;

  try {
    const result = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    console.log("result : ", result);

    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return { message: "login_error" };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
  return { message: null };
};

export default login;
