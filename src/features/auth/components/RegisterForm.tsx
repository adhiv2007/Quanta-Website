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
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import Link from "next/link";
import { useSignUp } from "../hooks/useSignUp";

const AuthForm = () => {
  const { mutation, form, handleSubmit, serverError } = useSignUp();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4 min-w-fit">
        <Card className="w-full max-w-[400px]">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              please enter the information requested below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jim H. Brown" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <Button
              isLoading={mutation.isPending}
              disabled={mutation.isSuccess}
              type="submit"
              className="w-full"
            >
              Signup
            </Button>
            <div className="text-sm w-full text-center">
              <Link href="/login">Already have account? Login</Link>
            </div>
            {serverError && <ErrorMessage>{serverError}</ErrorMessage>}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default AuthForm;
