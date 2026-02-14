export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24">

      {/* LEFT */}
      <div className="md:w-1/2 space-y-6">

        <p className="text-orange-500 font-medium">
          Hello, I'm
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Rakshita Bilki
        </h1>

        <p className="text-gray-300 text-lg">
          Machine Learning & Cloud Developer building scalable AI systems and
          production-ready applications.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-orange-500 px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
       <img 
  src="/profile.jpeg"
  alt="Rakshita"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl"
/>

      </div>

    </section>
  );
}
