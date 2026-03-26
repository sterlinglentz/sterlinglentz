import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { NextSeo } from "next-seo"

import Header from "@/components/Header"
import Page from "@/components/Page"
import Sidebar from "@/components/Sidebar"

import { projects } from "@/data/projects"

export default function Home() {
  const [currentProject, setCurrentProject] = useState()
  const scrollCooldown = useRef(false)

  useEffect(() => {
    document.body.classList.add("is-home")
    return () => {
      document.body.classList.remove("is-home")
      document.body.classList.remove(currentProject?.themeClass)
    }
  })

  const handleProjectChange = (newProject) => {
    if (currentProject) {
      document.body.classList.remove(currentProject.themeClass)
    }
    if (newProject) {
      document.body.classList.add(newProject.themeClass)
    }
    setCurrentProject(newProject)
  }

  useEffect(() => {
    const handleWheel = (e) => {
      if (!currentProject || scrollCooldown.current) return
      scrollCooldown.current = true
      setTimeout(() => (scrollCooldown.current = false), 600)

      const index = projects.indexOf(currentProject)
      if (e.deltaY > 0) {
        handleProjectChange(projects[(index + 1) % projects.length])
      } else {
        handleProjectChange(projects[(index - 1 + projects.length) % projects.length])
      }
    }

    window.addEventListener("wheel", handleWheel)
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentProject])

  return (
    <>
      <NextSeo
        title="Sterling Lentz :: On a mission to bring more beauty, meaning, and wisdom to the world"
        description="Sterling Lentz is a writer, creative director, and founder of Fundamental Artifact, a sustainable apparel and accessories brand."
      />
      <Header onClickHome={() => handleProjectChange(null)} />
      <Sidebar
        projects={projects}
        activeProject={currentProject}
        onChangeProject={handleProjectChange}
      />
      <Page hide={!!currentProject}>
        <h1 className="font-emily text-7xl text-white lg:text-8xl">
          No bridge too far, no mountain too high
        </h1>
        <div className="mt-4 max-w-lg text-xl lg:text-2xl">
          <p>
            I create brands that magnify the power and promise of the human
            experience.
          </p>
        </div>
        <p className="mt-9 text-lg text-crimson lg:text-xl">
          Let's do something bold...
        </p>
        <div className="relative -mx-10 -mt-20 lg:static lg:mx-0 lg:mt-0 hidden">
          <Image
            className="absolute left-[800px] top-[100px] z-[-2] w-[146px] lg:w-auto"
            src="/images/School_in_india.jpg"
            width={186}
            height={281}
            alt="School in India"
          />
          <Image
            className="absolute right-0 top-0 -z-1"
            src="/images/STERLING_LENTZ_PORTRAIT.jpg"
            width={585}
            height={585}
            alt="Portrait"
          />
          <Image
            className="absolute -left-[100px] top-[180px] -z-1 w-[225px] lg:left-auto lg:right-[480px] lg:top-[250px] lg:w-auto"
            src="/images/Salutation_to_the_sun.jpg"
            width={288}
            height={433}
            alt="Portrait"
          />
        </div>
      </Page>
      {projects.map((project) => {
        return (
          <Page
            key={project.name}
            image={project.background}
            hide={currentProject !== project}
          >
            {project.component}
          </Page>
        )
      })}
    </>
  )
}
