import AppShell from '@/components/AppShell'

export const metadata = {
  title: 'RyboLiga — Aplikacja',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}
