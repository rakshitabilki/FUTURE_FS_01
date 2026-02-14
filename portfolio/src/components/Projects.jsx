export default function Projects() {
  const projects = [
    {
      title: "Computer-Based Fitness Tracker",
      description:
        "Developed a fitness tracking system to monitor workouts, calories burned, and performance analytics.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
    {
      title: "Rainfall Prediction Using ML",
      description:
        "Built a machine learning model using historical weather data to predict rainfall patterns.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    },
  {
  title: "AI-Driven Planning & Scheduling for KMRL",
  description:
    "Designed an AI-based optimization system to improve metro planning and scheduling efficiency.",
  image:"/kmrl.jpg",
}

  ];

  return (
    <section id="projects" className="px-10 md:px-20 py-20 bg-[#111827]">
      <h2 className="text-3xl font-bold mb-12 text-orange-500">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-[#1f2937] rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
