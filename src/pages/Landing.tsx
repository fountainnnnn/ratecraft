import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Calculator, DollarSign, TrendingUp, Target, ArrowRight } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
  const featRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 60, opacity: 0, duration: 1.2, ease: 'power4.out' })
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, delay: 0.3 })
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, delay: 0.6 })
      gsap.from('.feature-card', { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: featRef.current, start: 'top 80%' } })
    }); return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-plum/8 to-transparent blur-[100px]" />
      </div>
      <nav className="relative z-10 border-b border-stone/20 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-plum flex items-center justify-center"><Calculator size={16} className="text-white"/></div><span className="font-display text-xl font-semibold">RateCraft</span></div>
          <Link to="/calc" className="btn-primary text-sm" style={{background:'#7B6B9E'}}>Calculate</Link>
        </div>
      </nav>
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <div className="badge bg-plum/15 text-plum border border-plum/20 mb-5" style={{color:'#7B6B9E'}}>Freelance Pricing Tool</div>
          <h1 className="hero-title font-display text-5xl lg:text-6xl font-bold leading-tight mb-5">Know what to<br/><span style={{color:'#7B6B9E'}}>charge.</span></h1>
          <p className="hero-sub text-lg text-muted mb-8 max-w-lg">Enter your desired income, expenses, and work hours. Get your recommended hourly, daily, and project rates instantly.</p>
          <div className="hero-cta"><Link to="/calc" className="btn-primary text-base px-8 py-3" style={{background:'#7B6B9E'}}>Calculate Your Rate <ArrowRight size={16}/></Link></div>
        </div>
      </section>
      <section ref={featRef} className="py-20 bg-warm/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center mb-14">Set your rates with confidence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: 'Desired Income', desc: 'Start with how much you want to earn.' },
              { icon: TrendingUp, title: 'Real Expenses', desc: 'Account for taxes, tools, and overhead.' },
              { icon: Target, title: 'Billable Hours', desc: 'Factor in admin time and holidays.' },
            ].map((f, i) => (
              <div key={i} className="feature-card card p-8 text-center">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{background:'#7B6B9E15'}}>
                  <f.icon size={26} style={{color:'#7B6B9E'}} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-stone/20 py-6"><div className="max-w-6xl mx-auto px-6 text-sm text-muted text-center">RateCraft — Know what to charge.</div></footer>
    </div>
  )
}
