import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./sidenav.scss";
import { useState } from "react";

interface sizes {
  fontSize: string;
  height: number;
}

function Sidenav() {
  const fSize = {
    fontSize: "30px",
  };
  const logoHeight = {
    height: 20,
  };

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  function handleClick(menu: string) {
    setActiveMenu(menu);
  }

  const customStyle = {
    backgroundColor: "#365f36",
    color: "#ffffff",
    cursor: "pointer",
    padding: "10px 15px",
    borderRadius: "7px",
  };

  return (
    <div className="sidenav">
      <div id="title">
        <Logo size={fSize} height={logoHeight} />
      </div>
      <div className="menu">
        <Link to={"/app/dashboard"}>
          <p
            onClick={() => handleClick("dashboard")}
            style={activeMenu === "dashboard" ? customStyle : undefined}
          >
            Dashboard
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("email-campaigns")}
            style={activeMenu === "email-campaign" ? customStyle : undefined}
          >
            Email Campaigns
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("sms-campaign")}
            style={activeMenu === "sms-campaign" ? customStyle : undefined}
          >
            SMS Campaigns
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("templates")}
            style={activeMenu === "templates" ? customStyle : undefined}
          >
            Templates
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("list")}
            style={activeMenu === "list" ? customStyle : undefined}
          >
            List menu{" "}
            <span>
              <i className="fa-solid fa-chevron-right fa-beat"></i>
            </span>
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("blacklist")}
            style={activeMenu === "blacklist" ? customStyle : undefined}
          >
            Sending Blacklist
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("pricing")}
            style={activeMenu === "pricing" ? customStyle : undefined}
          >
            Pricing
          </p>
        </Link>
        <Link to={""}>
          <p
            onClick={() => handleClick("api")}
            style={activeMenu === "api" ? customStyle : undefined}
          >
            API
          </p>
        </Link>
      </div>
      <div className="logout">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Sidenav;
