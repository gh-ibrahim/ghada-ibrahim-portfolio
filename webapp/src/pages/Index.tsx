const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Organic floating shapes in background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute right-[20%] top-[35%] h-80 w-80 rounded-full bg-accent/8 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute left-[25%] bottom-[25%] h-72 w-72 rounded-full bg-primary/6 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6">
        <div className="flex flex-col items-center gap-2">
          {/* Decorative line */}
          <div
            className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          />

          {/* Hello World text */}
          <h1
            className="font-serif text-7xl sm:text-8xl md:text-9xl font-light tracking-tight text-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Hello World
          </h1>

          {/* Decorative line */}
          <div
            className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        {/* Subtle tagline */}
        <p
          className="mt-12 text-center font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          A beginning
        </p>
      </div>

      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Index;
