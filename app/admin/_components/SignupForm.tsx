"use client";
import Input from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/query/useAuth";
import { signInSchema } from "@/lib/validations";
import { Form, Formik } from "formik";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const initialValues = {
  email: "",
  password: "",
};
const SignupForm = () => {
  const [showPassword, setshowPassword] = React.useState(false);
  const [error, setError] = React.useState<string | string[]>();
  const { mutate: signin, isPending } = useLogin();
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  function handleSignIn(values: typeof initialValues) {
    signin(values, {
      onSuccess() {},
      onError(data) {
        setError(data.response?.data.errors);
      },
    });
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={signInSchema}
        onSubmit={handleSignIn}
      >
        {() => (
          <Form className="space-y-4">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  label="First name"
                  labelClassName="text-sm"
                  name="first_name"
                  placeholder="name@company.com"
                  className="bg-gray-200"
                />
                <Input
                  label="Last name"
                  labelClassName="text-sm"
                  name="last_name"
                  placeholder="name@company.com"
                  className="bg-gray-200"
                />
              </div>
              <Input
                label="Email Address"
                labelClassName="text-sm"
                name="email"
                placeholder="name@company.com"
                className="bg-gray-200"
                icon={<Mail className="text-gray-500 size-4.5" />}
              />
              <Input
                label="Phone Number"
                labelClassName="text-sm"
                name="phone_number"
                placeholder="name@company.com"
                className="bg-gray-200"
                icon={<Mail className="text-gray-500 size-4.5" />}
              />
              <Input
                label="Password"
                labelClassName="text-sm"
                name="password"
                icon={<LockKeyhole className="text-gray-500 size-4.5" />}
                type={showPassword ? "text" : "password"}
                className="bg-gray-200"
                rightIcon={
                  showPassword ? (
                    <EyeOff onClick={togglePassword} size={18} />
                  ) : (
                    <Eye onClick={togglePassword} size={18} />
                  )
                }
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button
                type="submit"
                className="w-full text-lg font-black tracking-widest! py-6"
                disabled={isPending}
              >
                {isPending && <Loader2 className="size-4" />}
                {isPending ? "Creating account..." : "Signup"}
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className="text-primary font-semibold">
                Sign up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
