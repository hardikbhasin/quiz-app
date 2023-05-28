import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Intuitive quiz hub
        <hr className="divider" />
      </Link>
    </div>
  )
}

export default Header
