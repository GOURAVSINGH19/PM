import React from 'react';

const ResearchSection = ({ researchProof, aboutResearch, researchApproach }) => {
  return (
    <div>
      <div className="research-section">
        <h2>THIS IS RESEARCH PROOF SECTION</h2>
        <div className="section-content">
          {researchProof}
        </div>
      </div>
      <div className="research-section">
        <h2>THIS IS ABOUT RESEARCH SECTION</h2>
        <div className="section-content">
          {aboutResearch}
        </div>
      </div>
      <div className="research-section">
        <h2>THIS IS RESEARCH APPROACH SECTION </h2>
        <div className="section-content">
          {researchApproach}
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;