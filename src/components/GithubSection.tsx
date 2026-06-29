import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Activity, Star, BookOpen, Code2 } from 'lucide-react'
import { formatNumber } from '../utils/helpers'

interface GithubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  pushed_at: string
}

interface GithubProfile {
  public_repos: number
  followers: number
  login: string
  avatar_url: string
  html_url: string
}

export default function GithubSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 })
  const [profile, setProfile] = useState<GithubProfile | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/yvineethreddy'),
          fetch('https://api.github.com/users/yvineethreddy/repos?sort=pushed&per_page=8'),
        ])

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error('GitHub fetch failed')
        }

        const profileData = await profileResponse.json()
        const reposData = await reposResponse.json()
        setProfile(profileData)
        setRepos(reposData)
      } catch (err) {
        console.error(err)
        setError(true)
      }
    }

    fetchGithub()
  }, [])

  const topLanguages = useMemo(() => {
    const languageMap = repos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) return acc
      acc[repo.language] = (acc[repo.language] || 0) + 1
      return acc
    }, {})

    return Object.entries(languageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
  }, [repos])

  const pinnedRepos = useMemo(
    () => repos.slice(0, 4).sort((a, b) => b.stargazers_count - a.stargazers_count),
    [repos]
  )

  return (
    <section id="github" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">Engineering footprint</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">GitHub activity</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl">
            Public repository history, latest contributions, and most used languages for engineering visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8 mb-12">
          <aside className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
            <div className="flex items-center gap-4 mb-5">
              <div className="rounded-2xl bg-slate-800 p-3">
                <Github size={24} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-[0.3em]">Current profile</p>
                <p className="mt-1 text-xl font-semibold text-white">{profile?.login ?? 'vineethreddy'}</p>
              </div>
            </div>

            {error ? (
              <p className="text-sm text-slate-400">Unable to load GitHub data right now. Check network connectivity or try again later.</p>
            ) : (
              <div className="space-y-4 text-sm text-slate-400">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Repos</p>
                  <p className="text-2xl font-semibold text-white">{profile?.public_repos ?? '—'}</p>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Followers</p>
                  <p className="text-2xl font-semibold text-white">{profile?.followers ?? '—'}</p>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Top languages</p>
                  <div className="flex flex-wrap gap-2">
                    {topLanguages.length ? (
                      topLanguages.map(([language]) => (
                        <span key={language} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">
                          {language}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-500">Loading…</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </aside>

          <div className="space-y-4">
            {pinnedRepos.length === 0 ? (
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 text-center text-slate-500">
                Loading recent repositories...
              </div>
            ) : (
              pinnedRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="group block rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 transition shadow-lg shadow-slate-950/20 hover:border-cyan-500/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {repo.description ?? 'No description available.'}
                      </p>
                    </div>
                    <div className="text-slate-500 text-xs uppercase tracking-[0.3em]">{repo.language ?? 'Unknown'}</div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1">
                      <Star size={14} /> {formatNumber(repo.stargazers_count)}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1">
                      <Activity size={14} /> Updated {new Date(repo.pushed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </motion.a>
              ))
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Latest activity is fetched live from your GitHub profile. This section updates automatically as repositories change.</p>
          </div>
          <a
            href="https://github.com/yvineethreddy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            <BookOpen size={16} /> View full GitHub profile
          </a>
        </div>
      </div>
    </section>
  )
}
