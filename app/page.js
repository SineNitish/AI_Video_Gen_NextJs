import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hi Sine</h1>
      <UserButton/>
    </div>
  );
}
