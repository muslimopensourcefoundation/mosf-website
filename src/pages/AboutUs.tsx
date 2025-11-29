import { useEffect } from "react";
import TeamMemberProfile, { TeamMember } from "../components/TeamMemberProfile";

const teamMembers: TeamMember[] = [
  {
    photoUrl: "/images/profiles/beder-bourahmah.jpg",
    name: "Beder Bourahmah",
    role: "Executive Director and Founder",
    bio: "Beder Bourahmah is a software engineer and backend tech lead with full-stack experience in manufacturing, fintech, and blockchain industries, specializing in scalable backend systems. His passions at work are related to ethical technology and building accessible educational tools for global Muslim communities.",
    whyMosf: "I founded MOSF to create a global hub for open-source, faith-aligned technology and to empower Muslims everywhere through transparent, ethical, and accessible digital tools. I believe open knowledge and community collaboration are essential to uplifting the ummah.",
    focusAreas: [
      "Full-stack engineering",
      "Open source ecosystems",
      "Ethical technology",
    ],
    location: "Pullman, Washington, USA",
    contacts: {
      linkedin: "https://www.linkedin.com/in/beder-b-402487123/",
      github: "https://github.com/BederBourahmah",
      "github-mosf": "https://github.com/bederbourahmah-mof",
      email: "beder.bourahmah@muslimopensource.org",
    },
  },
  {
    name: "Zahra Hanifah Khoerunnisa",
    role: "Secretary",
    bio: "I am passionate about digital branding and communication that balances clarity, modesty, and healing-friendly values. My background includes research, workflow documentation, and community support initiatives focused on Muslim wellbeing.",
    whyMosf: "I was drawn to MOSF because of its mission to empower Muslim communities through open source collaboration and technology, which aligns with my values of authenticity and service.",
    focusAreas: [
      "Digital branding",
      "Communication design",
      "Muslim community support",
      "Open source collaboration",
      "Nonprofit initiatives",
    ],
    location: "Bandung, West Java, Indonesia",
    contacts: {
      linkedin: "https://www.linkedin.com/in/zahra-khoerunnisa-61b881243/",
    },
  },
  {
    photoUrl: "/images/profiles/zaidat-ibrahim.png",
    name: "Zaidat Ibrahim, Ph.D.",
    role: "Advisory Board Member",
    bio: "I am a research scientist who designs equitable, culturally grounded technologies for underserved communities. With a Ph.D. in Informatics and experience across academia and industry—including Microsoft Research, Genentech, and the Robotics & AI Institute—I focus on ethical, community-centered innovation in emerging technologies. I'm committed to advising mission-driven organizations and contributing to open-source efforts that uplift Muslim and other marginalized communities.",
    whyMosf: "I am drawn to MOSF's commitment to democratizing knowledge, which mirrors my own passion for designing equitable technologies that serve the needs of diverse communities.",
    focusAreas: [
      "Human-Computer Interaction",
      "Product Strategy",
      "Ethics",
      "Governance",
    ],
    location: "Massachusetts, USA",
    contacts: {
      linkedin: "https://www.linkedin.com/in/zaidati/",
    },
  },
  {
    photoUrl: "/images/profiles/hasnain-tariq.jpg",
    name: "Hasnain Tariq",
    role: "Senior Software Engineer",
    bio: "I am a software engineer with strong experience in JavaScript, React, TypeScript, and building scalable B2C applications. I've worked across startups and international teams, contributing to projects in web development, building Architectures, and platform optimization. I also write technical blogs and contribute to open-source communities whenever possible.",
    whyMosf: "I'm inspired by MOSF's mission to empower Muslim communities through open-source technology and collective knowledge-sharing. I want to contribute my technical skills to meaningful projects that create impact beyond commercial work. Most importantly, I want to leave something behind that can be a Sadaqa Jariya for me.",
    focusAreas: [
      "Front-end development",
      "Open source collaboration",
      "Software Architecture",
      "JavaScript & TypeScript",
      "Technical writing/developer education",
      "Community-focused tech initiatives",
    ],
    location: "Karachi, Pakistan",
    contacts: {
      linkedin: "https://www.linkedin.com/in/hxnain619",
    },
  },
];

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | MOSF";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-mosf-dark transition-colors duration-200">
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Meet the team behind the Muslim Open Source Foundation
          </p>
        </header>

        <section className="space-y-8">
          {teamMembers.map((member) => (
            <TeamMemberProfile key={member.name} member={member} />
          ))}
        </section>
      </main>
    </div>
  );
}

