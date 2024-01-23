'use client';
import MenuComponent from "@/components/menu"
import { Text } from "@radix-ui/themes";

export default function FirstPost() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <MenuComponent />
      <h1>About</h1>
      <Text className="w-96 pt-7">This is a Full Stack Engineer Test, using Next.JS, TailwindCSS, TypeScript, HeadlessUI and Redix Themes.</Text>
    </main>
    );
}