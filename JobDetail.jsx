import { useParams } from "react-router-dom";
import { useState } from "react";

export default function JobDetail() {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);

  return (
    <div className="job-detail">
      <h2>Frontend Developer</h2>
      <p><strong>Company:</strong> Tech Solutions Pvt Ltd</p>
      <p><strong>Location:</strong> Remote / Bangalore</p>
      <p><strong>Experience:</strong> 0–2 Years</p>

      <h4>Job Description</h4>
      <p>
        We are looking for a passionate Frontend Developer to build modern,
        responsive user interfaces using React.
      </p>

      <h4>Required Skills</h4>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js</li>
        <li>Basic Git knowledge</li>
      </ul>

      {!applied ? (
        <button
          className="apply-btn"
          onClick={() => setApplied(true)}
        >
          Apply Now
        </button>
      ) : (
        <div className="applied-status">
          ✓ Applied
        </div>
      )}
    </div>
  );
}
