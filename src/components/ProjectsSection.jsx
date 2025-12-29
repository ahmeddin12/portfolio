import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Signalist",
    description:
      "Stock Market app to Track prices, set alerts, explore insights, manage watchlists, and automate workflows for notifications and analytics.",
    image: "/projects/signalist.png",
    tags: ["typescript", "nextjs", "inngest", "gemini", "nodemailer"],
    demoUrl: "https://signalist-stock-tracker-app-swart.vercel.app/",
    githubUrl: "https://github.com/ahmeddin12/Signalist-stock_tracker_app",
  },
  {
    id: 2,
    title: "Resumind",
    description:
      "AI-powered Resume Analyzer. Create job listings, upload candidate resumes, and use AI to automatically evaluate and match resumes to job requirements.",
    image: "/projects/resumind.png",
    tags: [
      "React",
      "React Router V7",
      "Puter.js",
      "TailwindCSS",
      "TypeScript",
      "Zustand",
    ],
    demoUrl: "https://resumind-airesumeanalyzer.vercel.app/",
    githubUrl: "https://github.com/ahmeddin12/ai_resume_analyzer",
  },
  {
    id: 4,
    title: "NewsDaily",
    description: `The NewsDaily lets users explore top headlines, browse news by category, and search for specific topics in real-time.  
    It’s designed for performance, clarity, and responsiveness — combining MUI’s modern components with Tailwind’s adaptive grid system.

    Built for learners and professionals interested in frontend architecture, API integration, and modern UI design.`,
    image: "/projects/project3.png",
    tags: ["React", "TypeScript", "TailwindCSS", "news_portal"],
    demoUrl: "https://news-portal-a7vt.vercel.app/",
    githubUrl: "https://github.com/ahmeddin12/news_portal",
  },
  {
    id: 3,
    title: "Restoran",
    description:
      "Restoran is a full-featured restaurant management system built with Laravel and Vite. It manages menus, orders, payments, and customer reviews efficiently. The system streamlines restaurant operations, from order placement to secure online payments.",
    image: "/projects/project2.jpeg",
    tags: ["Laravel", "MySQL", "Bootstrap", "JQuery"],
    demoUrl: "https://myre.page.gd/",
    githubUrl: "https://github.com/ahmeddin12/Restoran",
  },
  {
    id: 3,
    title: "EliteShop",
    description:
      "Built a fully functional e-commerce platform with product listings, shopping cart, and checkout flow",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl:
      "https://elite-shop-zyfe-i44pd2vww-ahmeddin12s-projects.vercel.app/",
    githubUrl: "https://github.com/ahmeddin12/EliteShop",
  },
  // {
  //   id: 5,
  //   title: "Workout-tracker",
  //   description:
  //     "A web application that allows users to log, view, and track their running and cycling workouts on an interactive map. It uses the browser’s geolocation API and Leaflet library for mapping.",
  //   image: "/projects/project4.png",
  //   tags: ["javascript", 'Leaflet'],
  //   demoUrl: "https://map-api3.onrender.com/",
  //   githubUrl: "https://github.com/ahmeddin12/Map-API",
  // },
  {
    id: 6,
    title: "DevEvent",
    description:
      "About Event Platform with a home page listing events, API routes for CRUD, Cloudinary image uploads, detailed event pages with registration and similar events, and PostHog analytics to track interactions.",
    image: "/projects/devEvent.png",
    tags: [
      "nextjs",
      "typescript",
      "Tailwind",
      "Mongodb",
      "Cloudinary",
      "Posthog",
    ],
    demoUrl: "https://dev-event-i91bxsows-ahmeddin12s-projects.vercel.app/",
    githubUrl: "https://github.com/ahmeddin12/DevEvent",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ahmeddin12"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
