import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">谷若德的博客</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/">文章</Link></li>
            <li><Link to="/">关于</Link></li>
            <li><Link to="/">联系</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header