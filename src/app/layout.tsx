import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {' '}
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {' '}
        <main className="min-h-screen"> {children} </main>{' '}
      </body>{' '}
    </html>
  );
}
