import React from 'react'

export default function Recruiter() {
  const mailto = `mailto:yadanaparthivineethreddy@gmail.com?subject=Hiring%20Inquiry%20for%20Vineeth%20Reddy%20Yadanaparthi&body=Hello%20Vineeth%2C%0A%0AI%27m%20reaching%20out%20regarding%20a%20role...`;

  return (
    <section id="recruiter" aria-labelledby="recruiter-title" className="mt-14">
      <h2 id="recruiter-title" className="text-2xl font-semibold">For Recruiters</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/80 dark:bg-black/30 p-6 rounded-lg shadow">
          <p className="text-sm text-slate-700 dark:text-slate-200">This recruiter surface is engineered to speed decisions: instant resume download, tech radar PDF, and one-tap contact with a pre-filled email.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-white" href="/vineeth_resume.pdf" download>Download Resume (ATS)</a>
            <a className="px-4 py-2 rounded-lg border" href={mailto}>Contact by Email</a>
            <a className="px-4 py-2 rounded-lg border" href="tel:+917036546590">Call: +91 7036546590</a>
          </div>

          <div className="mt-4 text-sm text-slate-700 dark:text-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="break-words"><strong>Email:</strong> <span className="break-words">yadanaparthivineethreddy@gmail.com</span></div>
            <div className="break-words"><strong>Phone:</strong> <span className="break-words">+91 7036546590</span></div>
            <div className="break-words"><strong>Location:</strong> Bangalore, India</div>
            <div className="break-words"><strong>LinkedIn:</strong> <a className="text-[#06b6d4] break-words" href="https://linkedin.com/in/vineeth-reddy-y">linkedin.com/in/vineeth-reddy-y</a></div>
          </div>
        </div>

        <aside className="bg-gradient-to-br from-[#071025] to-[#08102a] text-white p-6 rounded-lg">
          <h3 className="font-medium">Quick Notes for Recruiters</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li>5+ years building resilient Java/Spring microservices.</li>
            <li>Experience in platform modernization, performance tuning, and workflow automation with Camunda BPM.</li>
            <li>ATS-optimized resume & a Tech Radar for immediate skills triage.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
