interface NavbarProps {
  pages: string[];
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({
  pages,
  activePage,
  setActivePage,
}: NavbarProps) {
  return (
    <nav className="w-full rounded-2xl bg-card p-2 shadow-md">
      <ul className="flex justify-around">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              onClick={() => setActivePage(page)}
              className={`w-full rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors duration-300 
                ${
                  activePage === page
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
