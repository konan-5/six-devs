import type { ComponentType } from "react";
import CaseStudy01Icon from "@/components/svg/CaseStudy01Icon";
import CaseStudy02Icon from "@/components/svg/CaseStudy02Icon";
import CaseStudy03Icon from "@/components/svg/CaseStudy03Icon";
import CaseStudy04Icon from "@/components/svg/CaseStudy04Icon";
import { PROJECTS, type Project } from "@/data/projects";

type IconProps = { className?: string };

export type CaseStudyStat = {
  value: string;
  label: string;
  description: string;
};

export type CaseStudyBlock = {
  title: string;
  field: "description" | "tagline";
};

export type CaseStudyConfig = {
  project: Project;
  Icon: ComponentType<IconProps>;
  theme: "light" | "dark";
  layout: "standard" | "reverse" | "editorial";
  imageAspect: "portrait" | "landscape";
  header: "inline" | "centered";
  blocks: CaseStudyBlock[];
  stackLabel: string;
  ctaLabel: string;
  stats?: CaseStudyStat[];
  footerTagline?: boolean;
};

export const CASE_STUDIES: CaseStudyConfig[] = [
  {
    project: PROJECTS[0],
    Icon: CaseStudy01Icon,
    theme: "light",
    layout: "standard",
    imageAspect: "portrait",
    header: "inline",
    blocks: [
      { title: "The Result", field: "tagline" },
    ],
    stackLabel: "The Tech Stack",
    ctaLabel: "View Technical Artifacts",
  },
  {
    project: PROJECTS[1],
    Icon: CaseStudy02Icon,
    theme: "dark",
    layout: "reverse",
    imageAspect: "portrait",
    header: "inline",
    blocks: [],
    stackLabel: "Architectural Stack",
    ctaLabel: "Read Manuscript",
    stats: [
      {
        value: "40%",
        label: "Payload Efficiency",
        description: "Reduction in overhead via custom binary serialization.",
      },
      {
        value: "0ms",
        label: "Packet Loss Tolerance",
        description: "Integration of Forward Error Correction at the application layer.",
      },
    ],
    footerTagline: true,
  },
  {
    project: PROJECTS[2],
    Icon: CaseStudy03Icon,
    theme: "light",
    layout: "editorial",
    imageAspect: "landscape",
    header: "centered",
    blocks: [
      { title: "The Challenge", field: "description" },
      { title: "The Solution", field: "tagline" },
    ],
    stackLabel: "The Stack",
    ctaLabel: "Read Manuscript",
  },
  {
    project: PROJECTS[3],
    Icon: CaseStudy04Icon,
    theme: "dark",
    layout: "editorial",
    imageAspect: "landscape",
    header: "centered",
    blocks: [
      { title: "The Mission", field: "description" },
      { title: "Our Solution", field: "tagline" },
    ],
    stackLabel: "The Stack",
    ctaLabel: "Explore Manuscript",
  },
];
