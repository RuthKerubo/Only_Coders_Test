"use client";
import Button from "@components/form/Button";
import TextInput from "@components/form/TextInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  async function signInUser() {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setEmailError("Invalid credentials");
    } else {
      router.replace("/");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gray-50">
      <div className="w-full md:w-2/4 lg:w-2/6 flex flex-col gap-2 items-start bg-white p-3 py-4 rounded">
        <h2 className="text-xl">Sign In</h2>
        <div className="grid grid-cols-1 gap-2 w-full">
          <TextInput
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={signInUser}>Sign In</Button>
      </div>
    </main>
  );
}
