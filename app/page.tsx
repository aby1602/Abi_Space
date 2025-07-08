import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, FolderOpen } from "lucide-react"

export default function HomePage() {
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
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center space-y-8 z-10 relative">
          {/* Main heading with futuristic space font - much bigger */}
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 relative space-heading tracking-wider">
              HI, I'M ABI KUMAR
            </h1>
          </div>

          {/* Social links with enhanced hover effects */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="https://github.com/aby1602" target="_blank" className="group">
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/80 border-cyan-400/50 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm h-20 w-20 p-0 rounded-xl hover:bg-cyan-400/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:rotate-3"
                >
                  <Github className="w-10 h-10 text-cyan-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </div>
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-125"></div>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/abi-k-493982182/" target="_blank" className="group">
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/80 border-blue-400/50 hover:border-blue-400 transition-all duration-500 backdrop-blur-sm h-20 w-20 p-0 rounded-xl hover:bg-blue-400/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/50 group-hover:rotate-3"
                >
                  <Linkedin className="w-10 h-10 text-blue-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </div>
                <div className="absolute inset-0 bg-blue-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-125"></div>
              </div>
            </Link>

            <Link
              href="https://www.researchgate.net/profile/Abhishek-Kumar-483/research"
              target="_blank"
              className="group"
            >
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/80 border-green-400/50 hover:border-green-400 transition-all duration-500 backdrop-blur-sm h-20 w-20 p-0 rounded-xl hover:bg-green-400/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-400/50 group-hover:rotate-3"
                >
                  <FileText className="w-10 h-10 text-green-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ResearchGate
                  </span>
                </div>
                <div className="absolute inset-0 bg-green-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-125"></div>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/80 border-purple-400/50 hover:border-purple-400 transition-all duration-500 backdrop-blur-sm h-20 w-20 p-0 rounded-xl hover:bg-purple-400/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-400/50 group-hover:rotate-3"
                >
                  <FolderOpen className="w-10 h-10 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Projects
                  </span>
                </div>
                <div className="absolute inset-0 bg-purple-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-125"></div>
              </div>
            </Link>
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
