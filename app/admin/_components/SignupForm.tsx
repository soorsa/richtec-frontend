"use client";
import Input from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { useSignUp } from "@/hooks/query/useAuth";
import { SignUpSchema } from "@/lib/validations";
import { Form, Formik } from "formik";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const initialValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  role: "staff",
  phone_number: "",
};
const SignupForm = () => {
  const [showPassword, setshowPassword] = React.useState(false);
  const [error, setError] = React.useState<string | string[]>();
  const { mutate: signUp, isPending } = useSignUp();
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  function handleSignUp(values: typeof initialValues) {
    signUp(values, {
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
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
      >
        {({ isValid }) => (
          <Form className="space-y-4">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  label="First name"
                  labelClassName="text-sm"
                  name="first_name"
                  placeholder="John"
                  className="bg-gray-200"
                />
                <Input
                  label="Last name"
                  labelClassName="text-sm"
                  name="last_name"
                  placeholder="Doe"
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
                type="tel"
                labelClassName="text-sm"
                name="phone_number"
                placeholder="2348123456789"
                className="bg-gray-200"
                icon={<Phone className="text-gray-500 size-4.5" />}
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
                disabled={isPending || !isValid}
              >
                {isPending && <Loader2 className="size-4" />}
                {isPending ? "Creating account..." : "Signup"}
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className="text-primary font-semibold">
                Sign in
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
