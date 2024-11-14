import { Work_Sans } from 'next/font/google'
import './globals.css'

const work_sans = Work_Sans({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
})

export const metadata = {
	title: 'FAQ Accordion',
	description: 'Frequently asked questions',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={work_sans.className}>{children}</body>
		</html>
	)
}
