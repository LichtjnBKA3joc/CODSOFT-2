import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
  Job<span>Board</span>
</h2>


      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/employer">Employer</Link>
        <Link to="/candidate">Candidate</Link>
      </div>
    </nav>
  );
}
