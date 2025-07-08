import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Zap } from "lucide-react"

export default function ProjectsPage() {
  const projectCards = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description: "Coming soon from the depths of space...",
    tech: ["Technology", "Stack"],
    status: "In Development",
  }))

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Animated starfield background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Floating characters - more faded */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-chars">
          <span style={{ left: "10%", animationDelay: "0s" }}>{"{"}</span>
          <span style={{ left: "20%", animationDelay: "2s" }}>{"}"}</span>
          <span style={{ left: "30%", animationDelay: "4s" }}>{"<"}</span>
          <span style={{ left: "40%", animationDelay: "1s" }}>{">"}</span>
          <span style={{ left: "50%", animationDelay: "3s" }}>{"/"}</span>
          <span style={{ left: "60%", animationDelay: "5s" }}>{"*"}</span>
          <span style={{ left: "70%", animationDelay: "2.5s" }}>{"+"}</span>
          <span style={{ left: "80%", animationDelay: "4.5s" }}>{"="}</span>
          <span style={{ left: "90%", animationDelay: "1.5s" }}>{"#"}</span>
          <span style={{ left: "15%", animationDelay: "6s" }}>{"$"}</span>
          <span style={{ left: "25%", animationDelay: "0.5s" }}>{"&"}</span>
          <span style={{ left: "35%", animationDelay: "3.5s" }}>{"@"}</span>
          <span style={{ left: "45%", animationDelay: "5.5s" }}>{"%"}</span>
          <span style={{ left: "55%", animationDelay: "2.2s" }}>{"!"}</span>
          <span style={{ left: "65%", animationDelay: "4.2s" }}>{"?"}</span>
          <span style={{ left: "75%", animationDelay: "1.2s" }}>{"~"}</span>
          <span style={{ left: "85%", animationDelay: "3.2s" }}>{"|"}</span>
          <span style={{ left: "95%", animationDelay: "5.2s" }}>{"["}</span>
          <span style={{ left: "5%", animationDelay: "0.8s" }}>{"]"}</span>
          <span style={{ left: "12%", animationDelay: "2.8s" }}>{"("}</span>
          <span style={{ left: "22%", animationDelay: "4.8s" }}>{")"}</span>
          <span style={{ left: "32%", animationDelay: "1.8s" }}>{"."}</span>
          <span style={{ left: "42%", animationDelay: "3.8s" }}>{","}</span>
          <span style={{ left: "52%", animationDelay: "5.8s" }}>{";"}</span>
          <span style={{ left: "62%", animationDelay: "0.3s" }}>{"0"}</span>
          <span style={{ left: "72%", animationDelay: "2.3s" }}>{"1"}</span>
          <span style={{ left: "82%", animationDelay: "4.3s" }}>{"x"}</span>
          <span style={{ left: "92%", animationDelay: "1.3s" }}>{"y"}</span>
          <span style={{ left: "8%", animationDelay: "3.3s" }}>{"z"}</span>
          <span style={{ left: "18%", animationDelay: "5.3s" }}>{"λ"}</span>
          <span style={{ left: "28%", animationDelay: "0.7s" }}>{"π"}</span>
          <span style={{ left: "38%", animationDelay: "2.7s" }}>{"∞"}</span>
          <span style={{ left: "48%", animationDelay: "4.7s" }}>{"∑"}</span>
          <span style={{ left: "58%", animationDelay: "1.7s" }}>{"∆"}</span>
          <span style={{ left: "68%", animationDelay: "3.7s" }}>{"α"}</span>
          <span style={{ left: "78%", animationDelay: "5.7s" }}>{"β"}</span>
          <span style={{ left: "88%", animationDelay: "0.9s" }}>{"γ"}</span>
        </div>
      </div>

      {/* Floating monospace text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-text">
          <span style={{ left: "5%", animationDelay: "0s" }}>Type</span>
          <span style={{ left: "15%", animationDelay: "3s" }}>something</span>
          <span style={{ left: "25%", animationDelay: "6s" }}>to</span>
          <span style={{ left: "35%", animationDelay: "1s" }}>start</span>
          <span style={{ left: "45%", animationDelay: "4s" }}>code</span>
          <span style={{ left: "55%", animationDelay: "7s" }}>dev</span>
          <span style={{ left: "65%", animationDelay: "2s" }}>build</span>
          <span style={{ left: "75%", animationDelay: "5s" }}>create</span>
          <span style={{ left: "85%", animationDelay: "8s" }}>innovate</span>
          <span style={{ left: "95%", animationDelay: "3.5s" }}>design</span>
          <span style={{ left: "10%", animationDelay: "6.5s" }}>program</span>
          <span style={{ left: "20%", animationDelay: "1.5s" }}>develop</span>
          <span style={{ left: "30%", animationDelay: "4.5s" }}>solve</span>
          <span style={{ left: "40%", animationDelay: "7.5s" }}>explore</span>
          <span style={{ left: "50%", animationDelay: "2.5s" }}>learn</span>
          <span style={{ left: "60%", animationDelay: "5.5s" }}>grow</span>
          <span style={{ left: "70%", animationDelay: "8.5s" }}>evolve</span>
          <span style={{ left: "80%", animationDelay: "0.5s" }}>adapt</span>
          <span style={{ left: "90%", animationDelay: "3.2s" }}>improve</span>
        </div>
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 pt-8">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-black/80 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-cyan-400">Back to Home</span>
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold relative">
              <span className="absolute inset-0 text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text blur-sm">
                My Projects
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <div className="w-32"></div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCards.map((project) => (
                <Card
                  key={project.id}
                  className="bg-black/60 border-gray-600/50 hover:border-purple-400/70 transition-all duration-500 backdrop-blur-sm group hover:bg-black/80 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/20"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-400" />
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2 hover:bg-gray-800/50 opacity-50 cursor-not-allowed"
                          disabled
                        >
                          <Github className="w-4 h-4 text-gray-500" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2 hover:bg-gray-800/50 opacity-50 cursor-not-allowed"
                          disabled
                        >
                          <ExternalLink className="w-4 h-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">{project.status}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center mt-16">
            <div className="text-green-400 text-sm font-mono">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>MORE PROJECTS INCOMING FROM DEEP SPACE...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status text at bottom - faded grey */}
      <div className="relative z-10 pb-8">
        <div className="text-gray-500 text-xs tracking-wider flex items-center justify-center gap-6 font-mono">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></div>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="text-gray-600">||</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse delay-500"></div>
            <span>NEURAL INTERFACE ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
