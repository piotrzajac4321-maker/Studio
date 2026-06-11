'use client'
import { useState } from 'react'
import { Camera, MapPin, Ruler, Weight, Fish, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react'

const species = ['Szczupak', 'Okoń', 'Sandacz', 'Karp', 'Leszcz', 'Sum', 'Pstrąg', 'Lipień', 'Dorsz', 'Inny']
const activeChallenges = [
  { id: 1, name: 'Szczupak Challenge', medal: '🥇', joined: true },
  { id: 2, name: 'Nocny Wędkarz', medal: '🌙', joined: true },
  { id: 3, name: 'Karpowy Maraton', medal: '🏅', joined: false },
]

export default function AddCatchPage() {
  const [step, setStep] = useState(1)
  const [selectedSpecies, setSelectedSpecies] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h1 className="text-2xl font-display font-bold text-slate-900 mb-2">Połów zgłoszony! 🎉</h1>
        <p className="text-slate-500 text-sm mb-2">
          AI weryfikuje Twoje zdjęcie — zwykle trwa to mniej niż 30 sekund.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-300 text-yellow-700 text-sm font-semibold mb-8">
          🏅 +120 pkt do Szczupak Challenge
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-700 to-ocean-900 flex items-center justify-center text-2xl">🦷</div>
            <div>
              <div className="font-bold text-slate-900">Szczupak · 72 cm · 4.1 kg</div>
              <div className="text-slate-400 text-xs flex items-center gap-1">
                <MapPin size={10} /> Jezioro Śniardwy · dziś 14:32
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-100">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-xs text-amber-700">Status: weryfikacja AI w toku...</span>
          </div>
        </div>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setSelectedSpecies('') }}
          className="px-6 py-3 rounded-full bg-ocean-600 text-white font-semibold text-sm hover:bg-ocean-700 transition-colors"
        >
          Dodaj kolejny połów
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-display font-bold text-slate-900 mb-1">Dodaj połów</h1>
      <p className="text-slate-400 text-sm mb-6">Zdjęcie + wymiary = punkty do wyzwań</p>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                s <= step ? 'bg-ocean-600 text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`h-0.5 flex-1 rounded ${s < step ? 'bg-ocean-600' : 'bg-slate-100'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <button
            onClick={() => setStep(2)}
            className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-ocean-300 bg-ocean-50 flex flex-col items-center justify-center gap-3 hover:bg-ocean-100 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-ocean-600 flex items-center justify-center shadow-lg">
              <Camera size={28} className="text-white" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-ocean-800">Zrób zdjęcie ryby</div>
              <div className="text-ocean-500 text-xs mt-1">lub wybierz z galerii</div>
            </div>
          </button>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
            <div className="text-xs font-semibold text-amber-700 mb-2">📸 Wskazówki do dobrego zdjęcia:</div>
            <ul className="text-xs text-amber-600 space-y-1">
              <li>• Ryba na macie lub miarce — widoczna w całości</li>
              <li>• Dobre oświetlenie, ostre zdjęcie</li>
              <li>• GPS włączony — automatyczna weryfikacja lokalizacji</li>
            </ul>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          {/* Mock photo preview */}
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-700 to-ocean-900 flex items-center justify-center">
            <span className="text-7xl">🦷</span>
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold">
              <Sparkles size={10} /> AI: wykryto szczupaka (94%)
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 text-white text-[10px] backdrop-blur">
              <MapPin size={10} /> GPS: Jezioro Śniardwy
            </div>
          </div>

          {/* Species */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Gatunek</label>
            <div className="flex flex-wrap gap-2">
              {species.map((sp) => (
                <button
                  key={sp}
                  onClick={() => setSelectedSpecies(sp)}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSpecies === sp
                      ? 'bg-ocean-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-ocean-300'
                  }`}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          {/* Measurements */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <Ruler size={14} /> Długość (cm)
              </label>
              <input
                type="number"
                placeholder="np. 72"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-ocean-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                <Weight size={14} /> Waga (kg)
              </label>
              <input
                type="number"
                placeholder="np. 4.1"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-ocean-400"
              />
            </div>
          </div>

          {/* Bait */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Przynęta (opcjonalnie)</label>
            <div className="relative">
              <input
                placeholder="np. Wobler Rapala 11 cm"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-ocean-400"
              />
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            disabled={!selectedSpecies}
            className="w-full py-3.5 rounded-xl bg-ocean-600 text-white font-semibold text-sm hover:bg-ocean-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Dalej — wybierz wyzwania
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-1 block">Zgłoś do wyzwań</label>
            <p className="text-xs text-slate-400 mb-3">Połów liczy się do wyzwań w których bierzesz udział</p>
            <div className="space-y-2">
              {activeChallenges.map((ch) => (
                <div
                  key={ch.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    ch.joined ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-100 opacity-60'
                  }`}
                >
                  <span className="text-2xl">{ch.medal}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 text-sm">{ch.name}</div>
                    <div className="text-xs text-slate-400">
                      {ch.joined ? 'Bierzesz udział — połów zostanie zaliczony' : 'Nie jesteś zapisany'}
                    </div>
                  </div>
                  {ch.joined ? (
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  ) : (
                    <button className="text-xs font-bold text-ocean-600">Zapisz się</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-ocean-50 border border-ocean-100 flex items-center gap-3">
            <Fish size={18} className="text-ocean-500 flex-shrink-0" />
            <p className="text-xs text-ocean-700">
              Wypuszczasz rybę? Zaznacz <strong>Catch & Release</strong> — dostaniesz +20% punktów bonusowych 🌱
            </p>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-white font-bold text-sm hover:from-gold-600 hover:to-gold-500 transition-all shadow-lg"
          >
            🎣 Zgłoś połów
          </button>
        </div>
      )}
    </div>
  )
}
