import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <>
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-end p-4 sticky-top">
        <Link className="nav-item nav-link active text-success ps-4 pe-4" to="/">Home</Link>
        <Link className="nav-item nav-link active text-success ps-4 pe-4" to="/About/About">About</Link>
        <Link className="nav-item nav-link active text-success ps-4 pe-4" to="/Skills/Skills">Skills</Link>
        <Link className="nav-item nav-link active text-success ps-4 pe-4" to="/Projects/Projects">Projects</Link>
    </nav>
    </>
  )
}
export default Navbar;
