// Crea carpeta app/: añadir layout.tsx y page.tsx.
// Serán renderizadas cuando el usuario visite el root de la aplicación (/).

// Crear root layout dentro de app/layout.tsx con etiquetas <html> y <body>:

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    )
  }

