import Hero from "./components/Hero";
import Tracks from "./components/Tracks";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <Tracks />
    </main>
  );
}