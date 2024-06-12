
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <a href="/admin">
        

        <Button variant="secondary">Admin</Button>


      </a>
    </div>
  );
}
