export default function NavBar() {
  return (
    <nav className="h-14 bg-orange-800 text-white fixed top-0 left-0 right-0 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-3 hover:stroke-orange-200 cursor-pointer"
        type="button"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div>NavBar</div>
    </nav>
  );
}
