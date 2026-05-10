import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calculator as CalcIcon, RefreshCw } from 'lucide-react'

export default function Calculator() {
  const [income, setIncome] = useState(80000)
  const [expenses, setExpenses] = useState(15000)
  const [days, setDays] = useState(220)
  const [hours, setHours] = useState(6)
  const [taxRate, setTaxRate] = useState(25)
  const [savings, setSavings] = useState(10)
  const [results, setResults] = useState<{hourly: number; daily: number; monthly: number; project: number} | null>(null)

  const calculate = () => {
    const totalNeeded = income + expenses
    const taxAmount = totalNeeded * (taxRate / 100)
    const savingsAmount = totalNeeded * (savings / 100)
    const grandTotal = totalNeeded + taxAmount + savingsAmount
    const totalHours = days * hours
    const hourlyRate = totalHours > 0 ? grandTotal / totalHours : 0
    setResults({
      hourly: Math.round(hourlyRate),
      daily: Math.round(hourlyRate * hours),
      monthly: Math.round(grandTotal / 12),
      project: Math.round(hourlyRate * hours * 5),
    })
  }

  const reset = () => { setResults(null); setIncome(80000); setExpenses(15000); setDays(220); setHours(6); setTaxRate(25); setSavings(10) }

  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-stone/30 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-plum flex items-center justify-center"><CalcIcon size={16} className="text-white"/></div><span className="font-display text-xl font-semibold text-ink">RateCraft</span></div>
          <Link to="/" className="text-sm text-muted hover:text-ink flex items-center gap-1"><ArrowLeft size={14}/> Back</Link>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="font-display text-3xl font-bold text-ink mb-2">Rate Calculator</h1>
        <p className="text-muted mb-8">Enter your numbers below to get your recommended rates.</p>
        <div className="card p-8">
          <div className="grid md:grid-cols-2 gap-5">
            <div><label className="label">Desired Annual Income ($)</label><input className="input" type="number" value={income} onChange={e => setIncome(Number(e.target.value) || 0)} /></div>
            <div><label className="label">Business Expenses ($/yr)</label><input className="input" type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value) || 0)} /></div>
            <div><label className="label">Working Days per Year</label><input className="input" type="number" value={days} onChange={e => setDays(Number(e.target.value) || 0)} /></div>
            <div><label className="label">Billable Hours per Day</label><input className="input" type="number" value={hours} onChange={e => setHours(Number(e.target.value) || 0)} /></div>
            <div><label className="label">Tax Rate (%)</label><input className="input" type="number" value={taxRate} onChange={e => setTaxRate(Number(e.target.value) || 0)} /></div>
            <div><label className="label">Savings Goal (%)</label><input className="input" type="number" value={savings} onChange={e => setSavings(Number(e.target.value) || 0)} /></div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={calculate} className="btn-primary px-8 py-3">Calculate</button>
            <button onClick={reset} className="btn-outline px-5 py-2.5 flex items-center gap-2 border border-stone/70 rounded-lg text-sm hover:bg-warm"><RefreshCw size={14}/> Reset</button>
          </div>
        </div>

        {results && (
          <div className="card p-8 mt-6 bg-plum/5 border-plum/20">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Your Recommended Rates</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-5 bg-white rounded-xl border border-stone/30">
                <div className="text-xs text-muted font-mono uppercase mb-1">Hourly</div>
                <div className="text-3xl font-display font-bold text-plum">${results.hourly}</div>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-stone/30">
                <div className="text-xs text-muted font-mono uppercase mb-1">Daily</div>
                <div className="text-3xl font-display font-bold text-ink">${results.daily}</div>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-stone/30">
                <div className="text-xs text-muted font-mono uppercase mb-1">Monthly</div>
                <div className="text-3xl font-display font-bold text-ink">${results.monthly}</div>
              </div>
              <div className="text-center p-5 bg-white rounded-xl border border-stone/30">
                <div className="text-xs text-muted font-mono uppercase mb-1">5-Day Project</div>
                <div className="text-3xl font-display font-bold text-ink">${results.project}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
