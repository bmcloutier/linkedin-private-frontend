export function Header() {
  return (
    /* <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
      </nav>
    </header>
    */
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 container">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-x1 tracking-tight">
          Fake LinkedIn
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/signup">Sign Up</a> | <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}
