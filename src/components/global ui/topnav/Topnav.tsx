import { useState } from "react";
import ProfileCard from "../profileCard/ProfileCard";
import "./topnav.scss";
import Logo from "../logo/Logo";
import Sidenav from "../sidenav/Sidenav";
import MobileBar from "../mobileNav/MobileBar";

function Topnav() {
  const fSize = {
    fontSize: "30px",
  };
  const logoHeight = {
    height: 20,
  };

  const [selectLanguage, setSelectedLanguage] = useState({
    language: "English",
    flag: "/england.png",
  });
  const countries = [
    { key: 1, language: "English", flag: "/england.png" },
    { key: 2, language: "French", flag: "/france.png" },
    { key: 3, language: "Spanish", flag: "/spain.png" },
  ];

  function handleSelection(country: { language: string; flag: string }) {
    setSelectedLanguage(country);
  }

  return (
    <div className="topnav">
      <div className="title">
        <MobileBar />
        <Logo size={fSize} height={logoHeight} />
      </div>
      <div className="content">
        <form action="" className="center">
          <input type="text" name="search" placeholder="Search" />
        </form>
        <div className="right">
          <div className="notification">
            <i className="fa-solid fa-bell fa-beat"></i>
          </div>
          <div
            className="dropdown"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <p
              className="dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-display="static"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                border: "none",
                outline: "none",
              }}
            >
              <img
                src={selectLanguage.flag}
                alt=""
                style={{ width: "1.5em", height: "1em" }}
              />
              {selectLanguage.language}
            </p>
            <ul
              className="dropdown-menu dropdown-menu-lg-start"
              aria-labelledby="dropdownMenuButton1"
              style={{ paddingLeft: "5px" }}
            >
              <p>Select Language</p>
              {countries.map((country, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleSelection(country)}
                >
                  <img
                    src={country.flag}
                    alt=""
                    style={{ width: "1.5em", height: "1em" }}
                  />
                  {country.language}
                </li>
              ))}
            </ul>
          </div>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Topnav;
