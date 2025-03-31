"use server";

import { signIn } from "@/auth";

const login = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  if (
    !formData.get("username") ||
    !(formData.get("username") as string)?.trim()
  ) {
    return { message: "username" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }

  try {
    console.log(formData.get("username"));
    console.log(formData.get("password"));
    const result = await signIn("credentials", {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    console.log("asd", result);
    return { message: null };
  } catch (err) {
    console.error(err);
    return { message: "login_error" };
  }
};

export default login;
