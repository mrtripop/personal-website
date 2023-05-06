import '@styles/global.css';

export const metadata = {
	title: 'Mrtripop | Home',
	description:
		'One of my resume, I create as a website for easy to update experience and working with share knowledge easily',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
