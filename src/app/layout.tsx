import './globals.css'
import StyledComponentsRegistry from '../lib/AntdRegistry'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
      <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
