const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">// IDENTITY</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 leading-[0.9]">
          Raghavapriyan<br />Saravanapriyan
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm tracking-[0.2em] uppercase mb-6">
          CS Undergrad | VIT Vellore | AI/ML
        </p>
        <p className="text-muted-foreground/40 text-[10px] sm:text-xs tracking-[0.5em] uppercase font-bold mt-8">
          FOR THE LOVE OF THE GAME
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm font-mono mt-6">
          I build epic stuff.<span className="cursor-blink">█</span>
        </p>
      </section>

      {/* Links */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-4">// LINKS</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:text-base">
          <a 
            href="https://github.com/RaghavapriyanSaravanapriyan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            [GitHub]
          </a>
          <a 
            href="https://linkedin.com/in/raghavapriyan-s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            [LinkedIn]
          </a>
          <a 
            href="mailto:raghavapriyan@example.com"
            className="text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            [Email]
          </a>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-4">// CONTRIBUTIONS</p>
        <div className="overflow-x-auto">
          <img 
            src="https://ghchart.rshah.org/ffffff/RaghavapriyanSaravanapriyan" 
            alt="GitHub Contributions"
            className="max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-6">// PROJECTS</p>
        <div className="space-y-6">
          <div>
            <a 
              href="https://github.com/RaghavapriyanSaravanapriyan/CLI_Student_management_system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground underline underline-offset-4 text-sm sm:text-base font-bold"
            >
              CLI_Student_management_system
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">Command-line student management system</p>
            <p className="text-muted-foreground text-xs mt-1 font-mono">&gt; Python</p>
          </div>
          <div>
            <a 
              href="https://github.com/RaghavapriyanSaravanapriyan/Predicting-future-iPhone-Pro-Max-prices-using-ML"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground underline underline-offset-4 text-sm sm:text-base font-bold"
            >
              Predicting-future-iPhone-Pro-Max-prices-using-ML
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">ML model to predict iPhone prices using linear regression</p>
            <p className="text-muted-foreground text-xs mt-1 font-mono">&gt; Python, scikit-learn</p>
          </div>
          <div>
            <a 
              href="https://github.com/RaghavapriyanSaravanapriyan/AutoWifi-VIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground underline underline-offset-4 text-sm sm:text-base font-bold"
            >
              AutoWifi-VIT
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">VIT WiFi automation script</p>
            <p className="text-muted-foreground text-xs mt-1 font-mono">&gt; Python</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-6">// SKILLS</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-foreground font-bold mb-2">Languages</p>
            <p className="text-muted-foreground font-mono">Python, C, C++, MATLAB</p>
          </div>
          <div>
            <p className="text-foreground font-bold mb-2">Domains</p>
            <p className="text-muted-foreground font-mono">Competitive Programming, AI/ML, Prompt Engineering</p>
          </div>
          <div>
            <p className="text-foreground font-bold mb-2">Tools</p>
            <p className="text-muted-foreground font-mono">scikit-learn, Git, Linux</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-6">// CERTIFICATIONS</p>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-foreground">C for Everyone: Programming Fundamentals</p>
            <p className="text-muted-foreground text-xs font-mono">&gt; UC Santa Cruz — 2025</p>
          </div>
          <div>
            <p className="text-foreground">Programming with Generative AI</p>
            <p className="text-muted-foreground text-xs font-mono">&gt; IIT Guwahati — 2025</p>
          </div>
          <div>
            <p className="text-foreground">The Complete Python Bootcamp</p>
            <p className="text-muted-foreground text-xs font-mono">&gt; Pierian Training — 2025</p>
          </div>
        </div>
      </section>

      {/* Test Scores */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-6">// TEST_SCORES</p>
        <div className="space-y-4 text-sm font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-foreground">CBSE_12TH:</span>
            <span className="text-muted-foreground">478/500 (95.6%) — Rank 2 Biology Stream</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-foreground">CBSE_10TH:</span>
            <span className="text-muted-foreground">486/500 (97.2%) — Perfect in Social Science</span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border">
        <p className="text-muted-foreground text-xs mb-6">// EDUCATION</p>
        <div className="space-y-6 text-sm">
          <div>
            <p className="text-foreground font-bold">B.Tech Computer Science Core</p>
            <p className="text-muted-foreground">Vellore Institute of Technology, Vellore</p>
            <p className="text-muted-foreground text-xs font-mono mt-1">&gt; 2025-2029 | CGPA: 9.1</p>
          </div>
          <div>
            <p className="text-foreground font-bold">High School</p>
            <p className="text-muted-foreground">The PSBB Millennium School, OMR</p>
            <p className="text-muted-foreground text-xs font-mono mt-1">&gt; 2021-2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 border-t border-border text-center">
        <p className="text-muted-foreground text-xs sm:text-sm italic mb-4">
          "This website loads fast because it respects your time."
        </p>
        <p className="text-muted-foreground text-xs font-mono">
          Last updated: December 2025
        </p>
      </footer>
    </main>
  );
};

export default Index;
