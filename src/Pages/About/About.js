import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 50;
    let starArray = [];
    for (let i = 0; i < numStars; i++) {
      starArray.push({
        id: i,
        top: Math.random() * 100 + "vh",
        left: Math.random() * 100 + "vw",
        animationDelay: Math.random() * 3 + "s",
      });
    }
    setStars(starArray);
  }, []);


  return (
    <div className="about-container">
      <div className="about-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay,
            }}
          ></div>
        ))}
      </div>

      {/* 왼쪽 텍스트 + 사진 */}
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          My name is Taerim Kim and I go by "Tae"! (pronounced as Tay).
          I am a South Korean student studying Computer Science at Virginia Tech.
          I'm passionate about building artistic and creative digital experiences. 
        </p>
        <p>
          I love cooking and breakdancing, I enjoy surprise people with food and with my breakdance move too! 
        </p>
        <p>
          Background music is my favorite classical music piece —
          <em> Reflets dans l'eau</em> by Debussy. Hope you like it!
        </p>

        {/* 여기에 사진 */}
        <div className="about-images">
          <img src="/duggoweb.png" alt="duggo1" />
        </div>
      </div>

      {/* 오른쪽 스킬 카드 */}
      <div className="skills-container">
  <div className="skill-category glass">
    <h2>Programming Languages</h2>
    <ul>
      <li>Java</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>C</li>
    </ul>
  </div>

  <div className="skill-category glass">
    <h2>Frontend</h2>
    <ul>
      <li>React</li>
      <li>CSS</li>
      <li>HTML</li>
    </ul>
  </div>

  <div className="skill-category glass">
    <h2>Backend & DB</h2>
    <ul>
      <li>Node.js</li>
      <li>PostgreSQL</li>
    </ul>
  </div>


  <div className="skill-category glass">
    <h2>Tools & Others</h2>
    <ul>
      <li>Git</li>
      <li>Linux</li>
      <li>PyTorch</li>
      <li>Figma</li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default About;