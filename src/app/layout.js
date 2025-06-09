import './globals.css'

export const metadata = {
  title: 'AI Engineer Portfolio',
  description: 'Portfolio of an AI Engineer specializing in Computer Vision, NLP, and Generative AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}