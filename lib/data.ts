import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaCloud, FaCog, FaReact, FaUsers } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatgpt from "@/public/chatgpt.png";
import passpal from "@/public/passpal.png";
import threetier from "@/public/threetier.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Co-founder @ Deengineers",
    location: "London, UK",
    description:
      "Co-founder and leader of a tech community promoting Muslim representation, offering training, mentorship, and open-source contributions, with expertise in Kubernetes, DevOps, and community engagement.",
    icon: React.createElement(FaUsers),
    date: "2020 - Present",
  },
  {
    title: "DevOps Engineer @ Capgemini",
    location: "London, UK",
    description:
      "DevOps Engineer focused on automation, containerization, security, code development, mentoring, and process optimization at Capgemini.",
    icon: React.createElement(FaCog),
    date: "2021 - 2022",
  },
  {
    title: "DevOps Engineer @ Credera",
    location: "London, UK",
    description:
      "Currently at Credera, leading the migration of client applications to Azure Kubernetes and enhancing CI/CD processes while also managing a team of Junior DevOps engineers at DWP, focusing on AWS-based data processing pipelines and infrastructure automation.",
    icon: React.createElement(FaCloud),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Discord Bot",
    description:
      "I created a Discord Bot that integrates the OpenAI API to Discord for the Deengineers Tech Community.",
    tags: ["Python", "Docker", "AWS"],
    imageUrl: chatgpt,
  },
  {
    title: "PassPal",
    description:
      "Created a Password Manager application which allows users to securely store their passwords and other sensitive information.",
    tags: ["Python", "Tkinter"],
    imageUrl: passpal,
  },
  {
    title: "Three-tier AWS Architecture",
    description:
      "A three-tier AWS architecture created with Terraform, to serve websites for all my other projects.",
    tags: ["AWS", "Terraform"],
    imageUrl: threetier,
  },
] as const;

export const skillsData = [
  "AWS",
  "Azure",
  "Terraform",
  "Linux",
  "Git",
  "Github Actions",
  "Gitlab CI",
  "Azure DevOps",
  "Docker",
  "Kubernetes",
  "Helm",
  "Python",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Trivy (Image Scanner)",
  "TDD & BDD",
  "Behave"
] as const;
