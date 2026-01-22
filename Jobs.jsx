import { Link } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google" },
  { id: 2, title: "Backend Developer", company: "Amazon" },
  { id: 3, title: "UI/UX Designer", company: "Microsoft" }
];

export default function Jobs() {
  return (
    <div>
      <h2>Job Listings</h2>

      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>

          <Link to={`/jobs/${job.id}`} className="view-job">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
