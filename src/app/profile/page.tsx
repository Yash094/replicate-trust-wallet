"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

export default function ProfilePage() {
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
