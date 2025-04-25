import { Button } from "@/components/ui/button";
import { CircleChevronRight } from "lucide-react";

export default function Home() {
  return (
  <main className="h-screen flex justify-center items-center">
    <Button variant="destructive" size="xl" className="hover:bg-destructive/40">
    <CircleChevronRight />
    Click me</Button>
  </main>
  );
}
