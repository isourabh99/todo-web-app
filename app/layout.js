import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 p-10">{children}</body>
    </html>
  );
}
