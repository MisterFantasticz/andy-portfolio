/** @format */

  import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tower Defense Game",
    description:
      "Designed and developed a tower defense game in Unity using C#. Implemented interactive gameplay with multiple levels, AI-controlled enemies with pathfinding, upgradeable towers, and engaging 2D assets. Focused on game mechanics, level design, and user interaction to create a well-structured and immersive gaming experience.",
    image: "/projects/GAME Project.png",
    Tags: [
      "Unity",
      "C#",
      "Game Development",
      "AI Pathfinding",
      "2D Graphics",
      "UI Design",
      "Level Design",
      "Audio Integration",
      "Testing and Debugging",
      "Optimization",
      "Version Control",
      "Collaboration",
      "Deployment",
      "User Feedback",
      "Iterative Development",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/MisterFantasticz/2D_GAME",
  },
  {
    id: 2,
    title: "APU Veterinary Clinic system",
    description:
      "Developed a Java EE web application for managing veterinary clinic operations. Designed web pages using JSP templates, while Servlets handled business logic, including user input validation, database interactions, and dynamically updating content. Implemented CRUD functionality for staff management, enabling adding, searching, and listing staff records seamlessly.",
    image: "/projects/Java EE Project.png",
    Tags: [
      "Java EE",
      "Servlets",
      "JSP",
      "MySQL",
      "HTML/CSS",
      "Bootstrap",
      "CRUD Operations",
      "MVC Architecture",
      "Session Management",
      "Form Validation",
      "Database Connectivity",
      "Version Control",
      "Testing and Debugging",
      "Deployment",
    ],
    demoUrl: "#",
    githubUrl:
      "https://github.com/MisterFantasticz/APU-Veterinary-Clinic-System-AVCS-",
  },
  {
    id: 3,
    title: "WORDWISE - translation mobile app",
    description:
      "The WordWise app is an advanced language translation application designed to revolutionize communication by offering comprehensive text translations, voice-to-text conversions, and image translations. Leveraging cutting-edge AI technologies and a user-friendly interface, WordWise aims to bridge language barriers and empower users to effortlessly communicate in diverse linguistic contexts.",
    image: "/projects/Mobile App Project.png",
    Tags: [
      "Android Studio",
      "Kotlin",
      "API",
      "Machine Learning",
      "AI",
      "Firebase",
      "UI/UX Design",
      "Voice Recognition",
      "Image Processing",
      "Database Management",
      "Testing and Debugging",
      "Deployment",
      "User Feedback",
      "Iterative Development",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work showcasing my skills and experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.Tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/40 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-justify">
                  {project.description}
                </p>

                <div className="flex justify-left items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MisterFantasticz">
            {" "}
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
