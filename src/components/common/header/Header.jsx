import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/trending-stories'>Trending Stories</Link>
              </li>
              <li>
                <Link to='/ai'>Hot Topic: Ai</Link>
              </li>
              <li>
                <Link to='/News'>News</Link>
              </li>
              <li>
                <Link to='/articles'>Articles</Link>
              </li>
              <li>
                <Link to='/branded-insights'>Branded Insights</Link>
              </li>
              <li>
                <Link to='/events'>Events & Webinars</Link>
              </li>
              <li>
                <Link to='/tech-memes'>Tech Memes</Link>
              </li>
              <li>
                <Link to='/td-dictionary'>Dictionary</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
