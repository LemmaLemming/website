"use client"

import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"



export default function Home() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 0.5])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          <div className="grid grid-cols-12 gap-2 p-4 opacity-20">
            {Array.from({ length: 96 }).map((_, i) => {
              //row and column indices
              const row = Math.floor(i / 12) // 12 columns per row
              const col = i % 12

              //wave delay based on position
              const waveOffset = (row + col) * 20 // Adjust this for wave speed

              // Each cell shrinks and fades with a wave effect
              const cellScale = useTransform(scrollY, [waveOffset, waveOffset + 500], [1, 0])
              const cellOpacity = useTransform(scrollY, [waveOffset, waveOffset + 500], [1, 0])

              return (
                <motion.div
                  key={i}
                  style={{ scale: cellScale, opacity: cellOpacity }}
                  className="h-16 bg-primary/20 rounded-lg"
                />
              )
            }
            )
            }
          </div>
        </motion.div>
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture on the Left */}
          <motion.div
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image src="/profile.png" alt="Howard Chen Profile" fill className="object-cover" />
          </motion.div>

          {/* Name and Description on the Right */}
          <div className="text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Howard Chen
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Computer Science Student at the University of Victoria
            </motion.p>

            {/* Buttons Below the Text */}
            <motion.div
              className="flex gap-6 mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/LemmaLemming">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/howard-dfa/">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/howardcfdf/">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

      </div>
{/* Introduction Section */}
<motion.section
  className="py-12 px-4 text-left max-w-3xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <h2 className="text-3xl font-bold mb-4 text-white">Introductions</h2>
  <p className="text-lg text-gray-300">
    Hi! My name is Howard Chen, I am a computer science student at the University of Victoria.
    This website is just getting started. This is my personal website that encompasses most
    of what I am as an individual. My hobbies are music, racquet sports, and various topics in
    finance. I plan to publish writings, upcoming topics, and information relevant to my career here.
    Feel free to contact me and many thanks for dropping by.
  </p>
</motion.section>

      {/* Resume Section with Glassmorphism & Fade-in */}
      <motion.section
        className="relative py-12 px-4"
        id="resume"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 border-none shadow-2xl">
          <div className="p-6 md:p-8">
            <motion.h2
              className="text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-white">{`City Research Department`}</h3>
                <p className="text-gray-300">Vanke&emsp;2019</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Did data collection on various places of interest in China</li>
                  <li>Presented weekly reports to supervisors</li>
                  <li>Collaborated in small groups to analyze data</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-white">{`Receptionist and IT maintenance`}</h3>
                <p className="text-gray-300">Vancouver Based Law Firm&emsp;2021 - 2022</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Created client dossiers</li>
                  <li>Fixed issues between local email and microsoft cloud services</li>
                  <li>General receptionist work</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-white">Cashier</h3>
                <p className="text-gray-300">Mcdonalds 2018-2019</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                </ul>
              </motion.div>

            </div>
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white" id="projects">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "C",
                "Java",
                "Microsoft Enterprise",
                "PostgreSQL",
                "git",
                "Agile",
                "Machine Learning",
                "Scikit learn",
                "Data Structure and algorithms",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm bg-white/10 text-gray-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </motion.section>


      {/* Blog Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cultural Norms: How differences in culture of societal responsibility shaped the Japanese Financial Crisis",
                date: "TBD",
                excerpt: "Having examined some the east Asia financial crisis many westerners may find some consistent themes, like \"why was the governing body so late in tak...",
              },
              {
                title: "",
                date: "",
                excerpt: "",
              },
            ].map((post) => (
              <Card key={post.title} className="bg-white/10 border-none p-6">
                <h3 className="text-xl font-bold text-white italic">{post.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{post.date}</p>
                <p className="mt-4 text-gray-300">{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/*footer*/}
      <footer className="py-12 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
        </div>
      </footer>
    </div>
  )
}

