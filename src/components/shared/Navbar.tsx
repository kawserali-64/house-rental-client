import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          HouseRent
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/houses">Explore Houses</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>

          <li>
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;