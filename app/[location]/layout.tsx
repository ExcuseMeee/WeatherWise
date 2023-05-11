import SearchBar from "../components/SearchBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-500`}>
        <SearchBar />
        {children}
      </body>
    </html>
  )
}