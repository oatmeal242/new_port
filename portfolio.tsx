"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Hardware Acceleration for Homomorphically Encrypted Neural Networks",
      year: "2025-ongoing",
      description:
        "Building a custom hardware accelerator to perform neural network inference directly on encrypted data using homomorphic encryption. Implementing core operations like encrypted dot products on FPGA using SystemVerilog.",
      tech: ["SystemVerilog", "Rust", "C++", "C", "FPGA", "Cryptography", "FHE", "Neural Networks"],
      status: "In Progress",
    },
    {
      title: "BFV Homomorphic Encryption Scheme Library",
      year: "2025",
      description:
        "Complete C++ library implementing the BFV homomorphic encryption scheme from scratch, including polynomial arithmetic using Number Theoretic Transforms (NTT), key generation, and homomorphic operations.",
      tech: ["C++", "Cryptography", "FHE"],
      github: "https://github.com/DA1729/BFV_CPP_LIB",
      status: "Completed",
    },
    {
      title: "Single Layer Neural Network over BFV Encrypted Data",
      year: "2025",
      description:
        "Minimal neural network performing forward propagation entirely on encrypted data using the BFV scheme. Focused on approximating activation functions and maintaining ciphertext noise levels during inference.",
      tech: ["C++", "Cryptography", "FHE", "Neural Networks"],
      github: "https://github.com/DA1729/BFV_NN",
      status: "Completed",
    },
    {
      title: "Custom RISC-V CPU Core in HDL",
      year: "2024",
      description:
        "Clean-slate 32-bit RISC-V CPU core using SystemVerilog, featuring custom ISA subset, ALU, register file, memory controller, and pipelined execution. Built with simulation-first methodology and FPGA-ready design.",
      tech: ["SystemVerilog", "RISC-V", "CPU Design", "HDL Simulation", "FPGA"],
      github: "https://github.com/DA1729/vOld32-RISC-V",
      status: "Completed",
    },
    {
      title: "DC to 3-Phase AC Inverter PCB for Formula SAE",
      year: "2024",
      description:
        "Custom PCB converting DC to 3-phase AC for PMSM used in Formula SAE electric car. Included power handling circuitry, safety features, and layout optimization for minimal EMI.",
      tech: ["PCB Design", "Power Electronics", "PMSM Motor Control", "Circuit Prototyping"],
      status: "Completed",
    },
  ]

  const skills = [
    {
      category: "Cryptography & Security",
      items: ["Homomorphic Encryption", "Secure Protocols", "Applied Cryptography", "Privacy-Preserving Computation"],
    },
    {
      category: "Digital Design & FPGA",
      items: ["SystemVerilog", "FPGA Development", "CPU Architecture", "Hardware Acceleration"],
    },
    {
      category: "Programming & Software",
      items: ["C++", "C", "Rust", "Python", "Linux Systems", "Git"],
    },
    {
      category: "Theory & Mathematics",
      items: ["Number Theory", "Linear Algebra", "Probability", "Digital Signal Processing"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Daksh Pandey</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <img
                src="/images/profile.jpg"
                alt="Daksh Pandey"
                className="w-full h-full object-cover rounded-full border-4 border-blue-400/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/10 to-purple-400/10"></div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Daksh Pandey
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">Undergraduate Student at IIT Roorkee</p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Systems engineer focused on modern cryptography, digital design, and embedded systems. Building secure
              architectures from the ground up.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://github.com/DA1729" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daksh1729/"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/sp0oky_daksh" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:dakshpandey177@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a systems engineer focused on modern cryptography, digital design, and embedded systems. My work spans
              secure protocol development, hardware-level encryption, and custom system-on-chip designs using FPGAs and
              low-level C/SystemVerilog.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mt-6">
              I build tools and architectures from the ground up—whether for secure computation, trusted execution, or
              performance-tuned embedded platforms. With a deep interest in applied security, I aim to bridge the gap
              between theoretical cryptography and real-world systems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant={project.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                        {project.status}
                      </Badge>
                      <span className="text-sm text-slate-400">{project.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-slate-700 text-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating on cryptography, hardware design, or secure systems? Let's discuss how we can
            build something innovative together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              href="mailto:dakshpandey177@gmail.com"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              dakshpandey177@gmail.com
            </Link>
            <Link
              href="mailto:daksh_p@ph.iitr.ac.in"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              daksh_p@ph.iitr.ac.in
            </Link>
          </div>

          <div className="flex justify-center space-x-8">
            <Link href="https://github.com/DA1729" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daksh1729/"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href="https://x.com/sp0oky_daksh" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Daksh Pandey. Built with passion for secure systems.</p>
        </div>
      </footer>
    </div>
  )
}
