"use client";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useAuthForm } from "../hooks/useAuthForm";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import Link from "next/link";

const AuthForm = () => {
  const { mutation, form, handleSubmit, serverError } = useAuthForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="min-w-fit">
        <Card className="w-full max-w-[400px]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>
              Please enter your email address and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <div className="flex flex-col">
              <Link href="/reset_password" className="text-sm">
                Forget your password?
              </Link>
            </div>
            <Button
              isLoading={mutation.isPending}
              disabled={mutation.isSuccess}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
            <div className="text-sm w-full text-center">
              <Link href="/signup">Don't have account? Signup</Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AuthForm;
