import { define } from "../utils.ts";
import { Navbar } from "../components/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import { CodeExample } from "../components/CodeExample.tsx";
import { Primitives } from "../components/Primitives.tsx";
import { Features } from "../components/Features.tsx";
import { Cta } from "../components/Cta.tsx";
import { Footer } from "../components/Footer.tsx";

export default define.page(function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CodeExample />
      <Primitives />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
});
