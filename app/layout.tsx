import type { Metadata } from 'next'
import { Inter, Roboto, Lora, League_Spartan } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-roboto',
})
const lora = Lora({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-lora' })

const leage_spartan = League_Spartan({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-spartan',
})

export const metadata: Metadata = {
	title: 'Unika handgjorda silversmycken och konsthantverk i Järvsö - Gårdsbutiken Stenegård',
	description:
		'Upptäck Gårdsbutiken i Stenegård, Järvsö - En skattkammare med handgjorda silversmycken designade av AnnaMaria Öberg för AM Design, unika konsthantverk, textilier, och kläder från Ulla Jacobsson Design. Shoppa online eller besök oss för en inspirerande upplevelse.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} ${lora.variable} ${leage_spartan.variable}`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
