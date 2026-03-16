import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <h3>谷若德的博客</h3>
          </div>
          <div className="footer-links">
            <Link to="#">GitHub</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">LinkedIn</Link>
          </div>
        </div>
        <p>&copy; 2024 谷若德的个人博客. 保留所有权利.</p>
      </div>
    </footer>
  )
}

export default Footer