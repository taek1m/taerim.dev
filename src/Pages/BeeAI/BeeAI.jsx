import React from "react";

const BeeAI = () => {
  return (
    <div style={{ width: "100%", minHeight: "600px" }}>
      <iframe
        src="https://taerimkim-beeai.hf.space"  // ← 여기에 네 Hugging Face 주소!
        frameBorder="0"
        width="100%"
        height="800px"
        title="Bee vs Wasp Classifier"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BeeAI;