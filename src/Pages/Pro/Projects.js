import React, { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ 페이지 진입 시 body에 클래스 추가, 나갈 때 제거
  useEffect(() => {
    document.body.classList.add("projects-page");
    return () => {
      document.body.classList.remove("projects-page");
    };
  }, []);

  const projects = [
    {
      title: "BeeAI",
      description:
        "I built 'BeeAI' after being attacked by a bee or wasp (I still don't know) in my apartment. I couldn’t tell if it was a bee or a wasp, and I panicked. So I made an AI to do the job for me!\n\nThis is a Deep Learning based Image Classifier built with PyTorch and MobileNetV2, trained with a Kaggle dataset and deployed on Hugging Face Spaces with Gradio.",
      link: "https://taerim.dev/beeai/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h2>{proj.title}</h2>
            <div className="button-group">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit
              </a>
              <button
                className="more-btn"
                onClick={() => setSelectedProject(proj)}
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 팝업 */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫히지 않게
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;