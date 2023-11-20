"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I decided to pursue my
        passion for programming and stumbled across DevOps. I enrolled in a Udemy Course for AWS and learned{" "}
        <span className="font-medium"> about cloud.</span>.{" "}
        <span className="italic">My favorite part of DevOps</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          AWS, Terraform, CI/CD (any), Docker, Kubernetes and Python
        </span>
        . I am also familiar with Azure, Helm and the monitoring stacks. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing football. I also enjoy{" "}
        <span className="font-medium">doing new things</span>. I am currently
        writing a book about{" "}
        <span className="font-medium">DevOps for Beginners</span>. I'm also
        an admin for a 'Muslims in Tech' Discord Server (Deengineers).
      </p>
    </motion.section>
  );
}
