export const metadata = {
  title: 'Addmie',
  description: 'Make new friends and connect with people around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
