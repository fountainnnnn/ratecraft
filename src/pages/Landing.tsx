import {Link}from'react-router-dom'
import{Calculator as CalcIcon,DollarSign,TrendingUp,Target}from'lucide-react'
export default function Landing(){return(
<div className="min-h-screen bg-cream">
<nav className="border-b border-stone/30 bg-white/60 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-plum flex items-center justify-center"><CalcIcon size={16} className="text-white"/></div><span className="font-display text-xl font-semibold text-ink">RateCraft</span></div>
<Link to="/calc" className="btn-primary text-sm">Calculate Your Rate</Link>
</div></nav>
<section className="max-w-6xl mx-auto px-6 pt-20 pb-24"><div className="max-w-2xl">
<div className="badge bg-plum/15 text-plum border border-plum/20 mb-6">Freelance Pricing Tool</div>
<h1 className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">Know what to <span className="text-plum">charge.</span></h1>
<p className="text-lg text-muted mb-8 max-w-lg">Stop guessing your rates. Enter your desired income, expenses, and work hours. Get your recommended hourly, daily, and project rates instantly.</p>
<Link to="/calc" className="btn-primary text-base px-8 py-3">Calculate Your Rate</Link>
</div></section>
<section className="bg-warm py-20"><div className="max-w-6xl mx-auto px-6"><div className="grid md:grid-cols-3 gap-8">
{[
{icon:DollarSign,title:"Desired Income",desc:"Start with how much you want to earn per year."},
{icon:TrendingUp,title:"Real Expenses",desc:"Account for taxes, tools, insurance, and overhead."},
{icon:Target,title:"Billable Hours",desc:"Factor in admin time, marketing, and holidays."},
].map((s,i)=><div key={i} className="card p-8 text-center"><div className="w-14 h-14 rounded-xl bg-plum/10 flex items-center justify-center mx-auto mb-5"><s.icon size={26} className="text-plum"/></div><h3 className="font-display text-xl font-semibold text-ink mb-3">{s.title}</h3><p className="text-muted text-sm">{s.desc}</p></div>)}
</div></div></section>
<footer className="border-t border-stone/30 py-8"><div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-muted"><span>RateCraft — Know what to charge.</span><Link to="/calc" className="hover:text-ink">Calculate</Link></div></footer>
</div>)}
