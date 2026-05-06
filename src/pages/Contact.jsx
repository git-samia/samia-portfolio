import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          Get in Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-3 text-slate-400">
          Open to collaborations, internships, and analyst opportunities!
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-violet-400/30 bg-violet-500/10 p-8">
            <p className="text-lg font-semibold text-white">Thank you!</p>
            <p className="mt-2 text-sm text-slate-300">
              Your message has been sent, I will get back to you soon!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 rounded-xl border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-violet-400"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="mt-10 space-y-5 text-left"
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-300">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-violet-400 transition focus:ring-2"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-violet-400 transition focus:ring-2"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-300">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-violet-400 transition focus:ring-2"
                placeholder="Enter your message..."
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-violet-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:samiakatingiri@gmail.com"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
          >
            <FaEnvelope className="text-lg" /> Email
          </a>
          <a
            href="https://github.com/git-samia"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/samia-katingiri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
          >
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
