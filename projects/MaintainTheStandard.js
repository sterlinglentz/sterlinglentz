import Image from "next/image"
import Link from "next/link"
import ProjectIcon from "@/components/ProjectIcon"

const MaintainTheStandard = () => {
  return (
    <>
      <ProjectIcon
        src="/images/mts-icon.png"
        alt="Maintain The Standard Icon"
        bgClass="bg-black-squeeze"
      />
      <Image
        className="w-[63rem]"
        src="/images/mts-logo.svg"
        width={1825}
        height={96}
        alt="Maintain The Standard Logo"
      />
      <div className="text-black-squeeze mt-10 max-w-lg text-xl lg:text-2xl">
        <p>
          We live in a dangerous moment of human history. Institutions and cultural traditions of all kinds
          are crumbling, and universal human values have receded from our politics and discourse. Weaving together current events, philosophy, and spiritual teachings, I write on the
          importance of living a virtuous, faithful life in difficult times.
      
      
        </p>
      </div>
      <Link className="button button-mts mt-7" href="https://maintainthestandard.substack.com/">
        Read on Substack
      </Link>
    </>
  )
}

export default MaintainTheStandard
