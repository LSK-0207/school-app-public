"use client";

import { useUser } from "@clerk/nextjs";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-customSkyLight">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="flex items-center text-xl font-bold gap-2">
            <Image src={"/logo.png"} alt="" width={24} height={24} />
            Welcome To School
          </h1>
          <h2 className="text-gray-400">Sign in to you Account</h2>

          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name={"identifier"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-400">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-200"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <Clerk.Field name={"password"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-400">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-200"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-500 text-white my-1 p-[10px] text-sm rounded-md"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
