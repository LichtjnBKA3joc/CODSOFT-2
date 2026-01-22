export default function EmployerDashboard() {
  return (
    <div>
      <h2>Employer Dashboard</h2>
      <p>
        Welcome, Employer! From here, you can post new job openings and manage
        existing listings.
      </p>

      <ul>
        <li>Create and publish job postings</li>
        <li>Edit or remove job listings</li>
        <li>View applications from candidates</li>
      </ul>

      <button className="apply-btn">Post a Job</button>
    </div>
  );
}
