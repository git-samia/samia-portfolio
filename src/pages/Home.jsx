import { skills } from '../data/projects'

const profilePicUrl = '/samia.jpg'

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Top row: picture aligned with about text */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-12">
          {/* Profile picture — stretches to match text height */}
          <div className="relative shrink-0 self-stretch md:w-64">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-lg" />
            <img
              src={profilePicUrl}
              alt="Samia Katingiri"
              className="relative h-full w-full rounded-2xl border-2 border-white/20 object-cover shadow-2xl"
            />
          </div>

          {/* Info text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              About Me!
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Samia Katingiri
            </h1>
            <p className="mt-2 text-lg font-medium text-violet-200/90">
              Computer Science Student &middot; Aspiring Data Analyst
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              Hi! I'm Samia, studying Computer Science at the University of Alberta. I'm genuinely passionate about solving problems through data, AI, and software development. I'm passionate about learning new technologies, building projects that have real impact, and growing both technically and professionally through every experience.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="/SamiaKatingiri_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
              >
                View Resume
              </a>
              <a
                href="https://github.com/git-samia"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:text-violet-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/samia-katingiri"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:text-violet-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Skills — full width below, slightly bigger */}
        <div className="space-y-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
