export function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex items-center justify-center p-6 bg-blue-500 container">
      <p className="text-lg">Copyright @ {year}</p>
    </footer>
  );
}
