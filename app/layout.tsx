import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CADIC HOME DEVELOPPEMENT | Bâtir votre avenir',
  description: 'Promotion immobilière, construction et aménagement foncier à Abidjan. Découvrez l’univers CADIC HOME DEVELOPPEMENT.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
