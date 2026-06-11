# 🎣 RyboLiga — Wędkarskie Wyzwania

Platforma wyzwań wędkarskich z medalami — model "virtual race" (jak wyzwania biegowe) przeniesiony na wędkarstwo, połączony z aplikacją społecznościową w stylu FishBrain.

## Model biznesowy

**Jednorazowe wpisowe zamiast subskrypcji:**

| Element | Wartość |
|---|---|
| Wpisowe za wyzwanie | 39–99 zł |
| Każdy uczestnik otrzymuje | medal fizyczny + koszulka + certyfikat PDF |
| Wysyłka | InPost, bezpłatna, do 14 dni od końca wyzwania |
| Nagrody główne | sprzęt / cash dla TOP uczestników |

**Ekonomia jednostkowa (szacunek):** wpisowe 49 zł − medal ~8 zł − koszulka ~15 zł − wysyłka ~12 zł − płatność ~1,5 zł = **~12,5 zł marży na uczestnika** (więcej przy skali produkcji).

## Struktura projektu

```
app/
├── page.tsx              # Landing page (marketing)
├── layout.tsx            # Root layout + PWA meta
├── globals.css           # Design system (Tailwind)
└── app/                  # Aplikacja (po zalogowaniu)
    ├── layout.tsx        # AppShell — sidebar + bottom nav
    ├── page.tsx          # Feed połowów (jak FishBrain)
    ├── mapa/             # Mapa łowisk z pinami
    ├── dodaj/            # 3-krokowy flow dodawania połowu
    ├── wyzwania/         # Moje wyzwania + dostępne
    ├── ranking/          # Ranking PL/wojewódzki/miasto/znajomi
    └── profil/           # Profil + kolekcja medali + tracking paczki

components/               # Komponenty landing page + AppShell
public/
├── manifest.json         # PWA manifest (gotowy pod TWA → Google Play)
└── icons/                # Ikony aplikacji (SVG)
```

## Droga do Google Play (TWA)

Strona jest przygotowana jako PWA:
- ✅ `manifest.json` z `display: standalone`, ikonami, shortcuts
- ✅ `theme-color`, apple-touch-icon, mobile-first UI z bottom nav
- 🔜 Service worker (offline cache) — dodać przed publikacją
- 🔜 Deploy na HTTPS (Vercel) — wymóg TWA
- 🔜 [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) → wygenerowanie pakietu `.aab` → Google Play Console (opłata jednorazowa $25)

## Uruchomienie

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # produkcja
```

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3** — design system ocean/gold
- **Lucide React** — ikony
- Dane mockowane — gotowe pod podpięcie Supabase (auth, baza, storage zdjęć)

## Roadmapa

1. **Faza 1 (teraz):** kompletny frontend — landing + widoki aplikacji ✅
2. **Faza 2:** Supabase — auth, baza połowów, upload zdjęć, płatności (Stripe/Przelewy24)
3. **Faza 3:** AI weryfikacja zdjęć (rozpoznawanie gatunku + anty-fraud), service worker, publikacja w Google Play przez TWA
4. **Faza 4:** pierwsze prawdziwe wyzwanie pilotażowe (1 edycja, 100–200 uczestników), produkcja medali, logistyka wysyłek
