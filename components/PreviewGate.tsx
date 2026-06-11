'use client'
import { useEffect, useState } from 'react'
import { Fish, Lock } from 'lucide-react'

const PASS = process.env.NEXT_PUBLIC_PREVIEW_PASS

export default function PreviewGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    // Jeśli brak hasła w env — nie blokuj (tryb produkcyjny)
    if (!PASS) { setOk(true); setChecking(false); return }
    const stored = sessionStorage.getItem('rl_preview')
    if (stored === PASS) setOk(true)
    setChecking(false)
  }, [])

  if (checking) return null
  if (ok) return <>{children}</>

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASS) {
      sessionStorage.setItem('rl_preview', input)
      setOk(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-sm text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
          <Fish className="w-9 h-9 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="font-display font-black text-2xl text-white mb-1">
          Rybo<span className="text-gold-400">Liga</span>
        </h1>
        <p className="text-white/50 text-sm mb-8">Podgląd prywatny</p>

        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false) }}
              placeholder="Hasło dostępu..."
              autoFocus
              className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border text-white placeholder-white/30 outline-none transition-colors text-sm ${
                error ? 'border-red-400 bg-red-500/10' : 'border-white/20 focus:border-gold-400/60'
              }`}
            />
          </div>
          {error && <p className="text-red-400 text-xs">Złe hasło — spróbuj ponownie</p>}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-white font-bold text-sm hover:from-gold-600 hover:to-gold-500 transition-all shadow-lg"
          >
            Wejdź
          </button>
        </form>
      </div>
    </div>
  )
}
