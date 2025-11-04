import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RuralStory } from "./components/RuralStory";
import { YouthEnterprise } from "./components/YouthEnterprise";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Technology } from "./components/Technology";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      <Hero />
      <RuralStory />
      <YouthEnterprise />
      <Features />
      <Courses />
      <Technology />
      <Footer />
    </div>
  );
}
