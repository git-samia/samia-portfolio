import BorderGlow from '../components/BorderGlow'
import { projects } from '../data/projects'

function Projects() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          Portfolio
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-400">
          Hover over each project to see the glow effect. Click to visit the repo.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <BorderGlow
                colors={project.colors}
                backgroundColor="#0c0a14"
                borderRadius={20}
                glowColor="260 80 70"
                glowIntensity={1.2}
              >
                <div className="flex flex-col gap-4 p-6">
                  {/* Icon circle */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-black text-white"
                    style={{
                      background: `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[2] || project.colors[1]})`,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
