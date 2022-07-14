import React from "react";
import { Link } from "react-router-dom";
import {
  FcAbout,
  FcBusinessman,
  FcHome,
  FcVoicePresentation,
} from "react-icons/fc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">لوجو المعرض</div>

      <nav className="navbar">
        <div className="links">
          <FcHome className="icon" />
          <Link to="/">
            <h1>الصفحة الرئيسية</h1>
          </Link>
        </div>
        <div className="links">
          <FcAbout className="icon" />
          <Link to="/about">
            <h1>حول المعرض</h1>
          </Link>
        </div>
        <div className="links">
          <FcBusinessman className="icon" />
          <Link to="/visitors">
            <h1>الزوار</h1>
          </Link>
        </div>
        <div className="links">
          <FcVoicePresentation className="icon" />
          <Link to="/exhibitors">
            <h1>العارضين</h1>
          </Link>
        </div>
      </nav>

      <div className="made-by">
        <p className="design">
          تصميم وتطوير <hr />
          محمد عيسى حجاج
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/mohammadhajjaj/"
            target="_blank"
            rel="noreferrer"
            className="social-media"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/MohammedIHajjaj"
            target="_blank"
            rel="noreferrer"
            className="social-media"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
