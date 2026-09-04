import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Hackathons from "./components/Hackathons";
import Publications from "./components/Publications";
import Telemetry from "./components/Telemetry";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-full bg-obsidian text-ink font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Hackathons />
        <Publications />
        {/* <Telemetry /> */}
        <Contact />
      </main>
      <footer className="border-t border-hair/60">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
            balintpragai.pythonanywhere.com
          </div>
          <div className="font-mono text-xs text-ink-faint">
            Designed with Figma &amp; Built with Python
          </div>
        </div>
      </footer>
    </div>
  );
}
