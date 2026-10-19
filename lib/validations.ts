import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, and one number"
  // ),
});

export const SignUpSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  phone_number: yup.string().required("Required"),
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  password: yup
    .string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});
