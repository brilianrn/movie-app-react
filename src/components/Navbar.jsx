import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearchBar } from '../store/actions/searchBar';

function NavBar() {
  let history = useHistory();
  let dispatch = useDispatch();
  let setSearch = '';

  function changeSearch(event) {
    setSearch = event.target.value;
  }

  function changePage(param) {
    param[0].preventDefault();
    history.push(param[1]);
  }

  function sendData(event) {
    event.preventDefault();
    dispatch(setSearchBar(setSearch));
    history.push('/');
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3">
        <div className="container-fluid">
          <p className="h3">Movies</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-3">
              <li className="nav-item">
                <a href="#" className="nav-link active" id="navigator" aria-current="page" onClick={(event) => { changePage([event, '/']) }}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link active" id="navigator" aria-current="page" onClick={(event) => { changePage([event, '/favorites']) }}>Favorites</a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2 mr-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={changeSearch}
            />
            <a href="#" className="btn btn-primary" type="submit" onClick={(event) => { sendData(event) }}>Search</a>
          </form>
        </div>
      </nav>
    </Router>
  )
}

export default NavBar;