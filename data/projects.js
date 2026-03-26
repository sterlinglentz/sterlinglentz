import TheoryLab from "@/projects/TheoryLab"
import FundamentalArtifact from "@/projects/FundamentalArtifact"
import MaintainTheStandard from "@/projects/MaintainTheStandard"
import BHBC from "@/projects/BHBC"

export const projects = [
  {
    name: "Fundamental Artifact",
    background: "/images/FUNDAMENTAL_ARTIFACT_BACKGROUND.jpg",
    icon: "/images/fa-icon.png",
    themeClass: "theme-fa",
    component: <FundamentalArtifact />,
  },
  {
    name: "Theory Lab",
    background: "/images/theory-background.jpg",
    icon: "/images/theory-icon.png",
    themeClass: "theme-theory",
    component: <TheoryLab />,
  },
  {
    name: "Maintain The Standard",
    background: "/images/mts-background.jpg",
    icon: "/images/mts-icon.png",
    themeClass: "theme-mts",
    component: <MaintainTheStandard />,
  },
  {
    name: "BHBC",
    background: "/images/bhbc-background.jpg",
    icon: "/images/bhbc-icon.png",
    themeClass: "theme-bhbc",
    component: <BHBC />,
  },
]
