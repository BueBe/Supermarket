import "./styles.css";
//import {Navbar} from 'bootstrap'

export default function App() {
  return (
    <div clasNameName="App">
      <nav clasName="navbar navbar-expand-lg navbar-light bg-light">
        <div clasName="container-fluid">
          <a clasNameName="navbar-brand" href="#">
            Navbar
          </a>
          <button
            clasName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span clasName="navbar-toggler-icon"></span>
          </button>
          <div clasName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul clasName="navbar-nav me-auto mb-2 mb-lg-0">
              <li clasName="nav-item">
                <a clasName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li clasName="nav-item">
                <a clasName="nav-link" href="#">
                  Link
                </a>
              </li>
              <li clasName="nav-item dropdown">
                <a
                  clasName="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul clasName="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a clasName="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a clasName="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr clasName="dropdown-divider" />
                  </li>
                  <li>
                    <a clasName="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li clasName="nav-item">
                <a clasName="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form clasName="d-flex">
              <input
                clasName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button clasName="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
