import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import {
  Check,
  ArrowRight,
  SquarePen,
  SquareChartGantt,
  Blocks,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    name: "Friendly UI system for interacting and managing STI approaches",
    description:
      "We know designing a user-friendly, robust UI can be a challenge and can demand both technical prowess and design skills, that is why we developed MantisTable UI",
    icon: SquareChartGantt,
  },
  {
    name: "Visualisation of annotations",
    description:
      "With MantisTable UI, you can easily visualise table annotations, providing a clear and intuitive overview of your data",
    icon: SquarePen,
  },
  {
    name: "Powerful and flexible plugin system",
    description:
      "This incredible feature enables users to easily extend and customise its functionality, offering a seamless experience and allowing for effortless expansion and personalisation",
    icon: Blocks,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Decoding the Mind: A RAG-LLM on ICD-11 for
        Decision Support in Psychology"
      description="Research Paper Summary"
    >
      <head>
      <link rel="stylesheet" href="/custom.css" />
      </head>
      <div className="hero hero--primary">
        <div className="container">
          <div className="banner-container">
            {/* Left side (logo and title) */}
            <div className="left-side">
              <img
                src="https://picsum.photos/200/300"
                alt="Logo"
                className="logo"
              />
              <div>
                <h1 className="hero__title">
                  Decoding the Mind: A RAG-LLM on ICD-11
                </h1>
                <p className="hero__subtitle">
                  Decision Support in Psychology
                </p>
              </div>
            </div>

            {/* Right side (buttons) */}
            <div className="right-side">
              <button className="button button--secondary button--lg margin-right--md">
                Learn More
              </button>
              <button className="button button--secondary button--lg margin-right--md">
                Feedback
              </button>
              <button className="button button--secondary button--lg">
                Try It Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-vert--xl">
        <h1>
          Decoding the Mind: A RAG-LLM on ICD-11 for Decision Support in
          Psychology
        </h1>


        <h2>Abstract</h2>
        <p>
          This paper investigates the potential of Large Language Models (LLMs)
          in assisting psychologists and psychiatrists with diagnostic
          decision-making using the ICD-11 classification manual.
        </p>

        <h2>Introduction</h2>
        <p>
          Artificial Intelligence (AI) has made significant advancements, but its
          use in mental health, particularly in psychiatry and psychology,
          requires further research. This paper explores the potential of LLMs
          for psychological and psychiatric diagnoses using the ICD-11 manual as
          a comprehensive classification of mental health disorders.
        </p>

        <Tabs defaultValue="llmind-chat">
          <TabItem value="llmind-chat" label="LLMind Chat">
            <p>
              The authors propose LLMind Chat, an AI-powered tool designed to
              support mental health professionals in their diagnostic processes.
              LLMind Chat utilizes a Retrieval Augmented Generation (RAG) model
              based on Gemma 2, adapted to the context of the ICD-11. This RAG
              model combines the strengths of Gemma 2 with a knowledge base
              derived from the ICD-11, allowing it to access and process
              relevant information from the classification manual in real-time.
            </p>
          </TabItem>
          <TabItem value="evaluation-results" label="Evaluation and Results">
            <p>
              LLMind's diagnostic accuracy was evaluated against the DSM-5-TR
              Clinical Cases manual using automated metrics and expert
              validation from mental health professionals. The results
              demonstrate its potential as a reliable and valid support tool for
              clinicians.
            </p>
          </TabItem>
          <TabItem
            value="implications-future-work"
            label="Implications and Future Work"
          >
            <p>
              The integration of LLMs into clinical practice offers promising
              opportunities to enhance mental health care. LLMs can serve as
              decision-support tools, aiding in diagnostic accuracy and
              treatment planning. Future work will focus on refining LLMind's
              performance and expanding its capabilities.
            </p>
          </TabItem>
        </Tabs>

        <h2>Code Example</h2>
        <CodeBlock language="python">
          {`# Example code snippet
          def get_diagnosis(patient_description):
            # Preprocess patient description
            #...
            # Query LLMind model
            diagnosis = llmind_model.query(patient_description)
            #...
            return diagnosis`}
        </CodeBlock>
      </div>
    </Layout>
  );
}
