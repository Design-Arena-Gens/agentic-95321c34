export const metadata = {
  title: 'Shadowborne Chronicles - A Grimdark Fantasy RPG',
  description: 'Enter a world of darkness, death, and desperate survival',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
