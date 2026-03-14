import React from "react";
import { SiJavascript, SiReact, SiNodedotjs, SiGithub } from "react-icons/si";

// tech list with react-icons components for consistent modern look
const TECHS = [
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-gray-300" },
];

function Technologies({ isDark }) {
  const textColor = isDark ? "#ffffff" : "#000000";
  const subTextColor = isDark ? "#9ca3af" : "#374151";

  return (
    <section
      id="technologies"
      className="container mx-auto px-4 py-16 overflow-x-hidden fade-in"
    >
      <p
        className="text-center text-base sm:text-lg md:text-xl mb-10 tracking-wide"
        style={{ color: subTextColor }}
      >
        Some languages and technologies I know well
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {TECHS.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center justify-center gap-3 px-5 py-3 bg-background rounded-lg
                       shadow-sm text-base sm:text-lg font-semibold leading-none break-words
                       transform transition duration-200 hover:scale-105 hover:bg-muted/20"
            style={{ color: textColor }}
          >
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              {React.cloneElement(tech.icon, { className: `w-full h-full ${tech.color} transition-colors duration-200 group-hover:text-opacity-80` })}
            </div>
            <span className="whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;