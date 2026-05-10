import React, { useEffect, useRef } from "react";
import "../styles/project.scss";

const serviceStacks = [
  {
    id: "01",
    title: "AI Agents & Smart Automation",
    image: "01.png",
    intro:
      "Agents that run around the clock for calling, scheduling, and execution without manual intervention.",
    services: [
      "AI Voice Agents for support & lead qualification.",
      "AI Video Agents for sales, onboarding, and training.",
      "Task Scheduler Agents for autonomous workflows.",
      "Automation for drafting and scheduling.",
      "Multi-agent pipelines for complex business operations.",
    ],
  },
  {
    id: "02",
    title: "Chatbots & Conversational AI",
    image: "02.png",
    intro:
      "Context-aware assistants for customers and teams that understand business knowledge, not just prompts.",
    services: [
      "Website and WhatsApp chatbots.",
      "Internal knowledge-base bots using docs/SOPs/wikis.",
      "E-commerce assistants for order tracking.",

      "Multilingual chatbot flows for global user support.",
      "Voice-enabled chat interfaces for natural interactions.",
    ],
  },
  {
    id: "03",
    title: "Mobile Apps, Web Apps & Websites",
    image: "03.png",
    intro:
      "Fast, conversion-focused products with clean UX and AI features built directly into the experience.",
    services: [
      "iOS & Android apps built with React Native/Flutter.",
      "Progressive Web Apps from a single codebase.",
      "SaaS platforms with payments and subscription.",
      "E-commerce stores with AI recommendations.",
      "Admin dashboards and internal operations tools.",
    ],
  },
  {
    id: "04",
    title: "AI / ML Engineering & Infrastructure",
    image: "04.png",
    intro:
      "Production AI systems with reliable deployment, monitoring, scaling, and deep integration into existing products.",
    services: [
      "Custom model fine-tuning on your data and domain.",
      "RAG architecture connected to business documents.",
      "MLOps pipelines for deployment and observability.",
      "LLM integration into current product & process flows.",
      "Agent frameworks for planning and task execution.",
    ],
  },
  {
    id: "05",
    title: "Business Automation at Scale",
    image: "05.png",
    intro:
      "Automation systems that connect your tools and remove repetitive work across the entire business stack.",
    services: [
      "End-to-end workflows across CRM/ERP/billing.",
      "Data scraping, processing, and enrichment pipelines.",
      "Automated reporting with AI-generated insights.",
      "Document processing for invoices/contracts/forms.",
      "AI-powered social media and marketing automation.",
    ],
  },
];

const Project = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (index > 0 && cardRefs.current[index - 1]) {
              cardRefs.current[index - 1].classList.add("fade-out");
            }
          } else {
            entry.target.classList.remove("show");
            if (index > 0 && cardRefs.current[index - 1]) {
              cardRefs.current[index - 1].classList.remove("fade-out");
            }
          }
        });
      },
      { threshold: 0.25 },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="projects-container" id="project">
      {serviceStacks.map((stack, index) => (
        <article
          key={stack.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`project-card ${index === 0 ? "show" : ""}`}
        >
          <div className="service-card">
            <div className="service-card__top">
              <p className="service-card__index">Service {stack.id}</p>
              <div className="service-card__swatch" aria-hidden="true" />
            </div>
            <p className="service-card__title">{stack.title}</p>
            <div className="service-card__media">
              <img src={stack.image} alt={stack.title} />
            </div>{" "}
            <p className="service-card__intro">{stack.intro}</p>
            <ul className="service-card__list">
              {stack.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="service-card__brand">Nerd Labs Services</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Project;
