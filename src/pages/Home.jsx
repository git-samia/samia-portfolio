import { skills } from '../data/projects'

const profilePicUrl = '/samia.jpg'

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Profile picture */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-lg" />
          <img
            src={profilePicUrl}
            alt="Samia Katingiri"
            className="relative h-48 w-48 rounded-full border-2 border-white/20 object-cover shadow-2xl md:h-56 md:w-56"
          />
        </div>

        {/* Info */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Welcome
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Samia Katingiri
          </h1>
          <p className="mt-2 text-lg font-medium text-violet-200/90">
            Computer Science Student &middot; Aspiring Data Analyst
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            I am a 3rd-year CS student passionate about turning complex data into actionable
            insights. I build analytical projects, write clean Python code, and design clear
            dashboards. I am looking for opportunities where I can contribute to data-driven
            decision-making.
          </p>

          {/* Skills */}
          <div className="mt-8 space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/SamiaKatingiri_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              View Resume
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:text-violet-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:text-violet-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
