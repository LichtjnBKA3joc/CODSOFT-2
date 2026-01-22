import { useState } from "react";

export default function CandidateDashboard() {
  const [updated, setUpdated] = useState(false);

  return (
    <div>
      <h2>Candidate Dashboard</h2>
      <p>
        Welcome! Manage your profile, track your applications, and explore new
        job opportunities.
      </p>

      <ul>
        <li>Update personal details and resume</li>
        <li>View applied jobs and application status</li>
        <li>Receive job alerts and notifications</li>
      </ul>

      <button
        className="apply-btn"
        onClick={() => setUpdated(true)}
      >
        Update Profile
      </button>

      {updated && (
        <p className="profile-updated">
          ✓ Updated profile – 3 positions
        </p>
      )}
    </div>
  );
}
