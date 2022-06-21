// type 'rfc' with ES7+ extension to automate this code block:
// import React from 'react'

// export default function nav() {
//   return (
//     <div>nav</div>
//   )
// }

import React from 'react'

export default function Nav(props) {
  console.log(props)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Features
            </a>
            <a className="nav-link" href="/">
              Pricing
            </a>
            <a className="nav-link" href="/">
              Other
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

