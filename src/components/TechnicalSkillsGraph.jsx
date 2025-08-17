import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const TechnicalSkillsGraph = () => {
  const skills = [
    { name: "JavaScript", proficiency: 95 },
    { name: "C++", proficiency: 90 },
    { name: "React.js", proficiency: 95 },
    { name: "Node.js", proficiency: 90 },
    { name: "Express.js", proficiency: 85 },
    { name: "PostgreSQL", proficiency: 80 },
    { name: "MongoDB Atlas", proficiency: 90 },
    { name: "Supabase", proficiency: 75 },
    { name: "Next.js", proficiency: 70 },
    { name: "TypeScript", proficiency: 60 },
  ];

  const getColor = (proficiency) => {
    if (proficiency >= 90) return "#4B0082";
    if (proficiency >= 80) return "#8A2BE2";
    if (proficiency > 60) return "#FF6F3C";
    return "#FFC107";
  };

  return (
    <div className="p-4 sm:p-6 bg-white/80 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4 sm:mb-6">
        Technical Skills Proficiency
      </h2>

      <ResponsiveContainer width="100%" height={Math.min(400, window.innerWidth * 0.8)}>
        <BarChart
          data={skills}
          margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
        >
          <XAxis
            dataKey="name"
            angle={window.innerWidth < 640 ? -45 : -30} // Rotate more on small screens
            textAnchor="end"
            interval={0}
            tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="proficiency" radius={[10, 10, 0, 0]}>
            {skills.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.proficiency)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap justify-between text-xs text-[#333333] mt-4 gap-2 sm:gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#FFC107] rounded-full mr-2"></div>
          Beginner
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#FF6F3C] rounded-full mr-2"></div>
          Intermediate
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#8A2BE2] rounded-full mr-2"></div>
          Advanced
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#4B0082] rounded-full mr-2"></div>
          Expert
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsGraph;
