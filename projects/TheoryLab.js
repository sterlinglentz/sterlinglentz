import Image from "next/image"
import Link from "next/link"
import ProjectIcon from "@/components/ProjectIcon"

const TheoryLab = () => {
  return (
    <>
      <ProjectIcon
        src="/images/theory-icon.png"
        alt="Theory Lab Icon"
        bgClass="bg-bitter-lemon"
      />
      <Image
        className="w-[19rem] lg:w-[27rem]"
        src="/images/theory-logo.svg"
        width={1170}
        height={96}
        alt="Theory Lab Logo"
      />
      <div className="text-green-spring mt-10 max-w-lg text-xl lg:text-2xl">
        <p>
          With AI dramatically altering the creative landscape, I created Theory Lab as my personal 
          multi-modal design consultancy for aggresively agile brands with small teams. This means one person,
          instead of 10 or 20, you can successfuly deploy anywhere in a project's development chain. From factory auditing,
          materials sourcing, and packaging to creative production, copywriting, marketing, and web.

        </p>
      </div>
      <Link className="button button-theory mt-7" href="mailto:sterling@wearetheorylab.com">
        Work with me
      </Link>
    </>
  )
}

export default TheoryLab
