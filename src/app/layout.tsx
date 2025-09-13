import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Departamento en Venta - Condominio Gran Océano | UF 10.600",
  description: "Exclusivo departamento de 119 m² + terraza de 7.5 m² en Torre E, piso 9, con vista panorámica a la bahía de Valparaíso. 3 dormitorios en suite, condominio consolidado en Recreo, Viña del Mar.",
  keywords: "departamento venta, Viña del Mar, Recreo, vista al mar, condominio, Gran Océano",
  openGraph: {
    title: "Departamento en Venta - Condominio Gran Océano",
    description: "Exclusivo departamento 119 m² con vista panorámica, Torre E piso 9, Recreo Viña del Mar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}