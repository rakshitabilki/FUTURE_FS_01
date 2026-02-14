export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 md:px-20 py-6 bg-[#0f172a] sticky top-0 z-50">

      <h1 className="text-2xl font-bold text-orange-500">
        Rakshita
      </h1>

      <div className="hidden md:flex space-x-8 text-gray-300">
        <a href="#about" className="hover:text-orange-500 transition">About</a>
        <a href="#skills" className="hover:text-orange-500 transition">Skills</a>
        <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
        <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
      </div>

      <a
        href="#contact"
        className="bg-orange-500 px-5 py-2 rounded-md hover:bg-orange-600 transition"
      >
        Hire Me
      </a>
    </nav>
  );
}
