export default function Skills() {
  const skills = ["Python", "Machine Learning", "Power BI", "Java", "Excel"];

  return (
    <section id="skills" className="px-10 md:px-20 py-20 bg-[#111827]">

      <h2 className="text-3xl font-bold mb-12 text-orange-500">
        Skills
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1f2937] p-6 rounded-lg text-center hover:bg-[#374151] transition"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}
