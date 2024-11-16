export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fullDescription: string;
  role: string;
  duration: string;
  tools: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "customfurnish-redesign",
    title: "CustomFurnish Platform Redesign",
    description: "Complete redesign of the furniture customization platform",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    fullDescription: "Led the complete redesign of CustomFurnish's digital platform, focusing on improving the user experience for furniture customization.",
    role: "Lead Product Designer",
    duration: "6 months",
    tools: ["Figma", "Protopie", "Miro"],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "mobile-app-concept",
    title: "Furniture AR Mobile App",
    description: "AR-powered furniture visualization app",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
    fullDescription: "Designed an innovative AR application allowing users to visualize furniture in their space before purchase.",
    role: "UX/UI Designer",
    duration: "4 months",
    tools: ["Figma", "Adobe XD", "Blender"],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];