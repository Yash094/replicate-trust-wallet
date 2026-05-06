"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  const router = useRouter();
  const account = useActiveAccount();

  useEffect(() => {
    if (account) {
      router.push("/profile");
    }
  }, [account, router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ConnectButton client={client} />
    </main>
  );
}
