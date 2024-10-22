import Logo from "../logo/Logo";
import "./mobileNav.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const navChildrenVariants = {
  hidden: {
    // y: "90vh",
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    // y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

function MobileBar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="mobileNav">
      <a
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop"
      >
        <i
          className="fa-solid fa-bars"
          onClick={() => setIsOpen(true)}
          style={{ color: "#365F36" }}
        ></i>
      </a>
      <div
        className="offcanvas offcanvas-start"
        tab-index="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <div
            className="offcanvas-title"
            id="offcanvasWithBackdropLabel"
            style={{ paddingLeft: "15px" }}
          >
            <Logo size={undefined} height={undefined} />
          </div>
          <a
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></a>
        </div>
        <div className=" overflow-hidden">
          <motion.div
            className="menu"
            variants={navContainerVariants}
            animate={isOpen ? "visible" : "hidden"}
          >
            <motion.a href={"/app/dashboard"} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("dashboard")}
                style={activeMenu === "dashboard" ? customStyle : undefined}
              >
                Dashboard
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("email-campaigns")}
                style={
                  activeMenu === "email-campaign" ? customStyle : undefined
                }
              >
                Email Campaigns
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("sms-campaign")}
                style={activeMenu === "sms-campaign" ? customStyle : undefined}
              >
                SMS Campaigns
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("templates")}
                style={activeMenu === "templates" ? customStyle : undefined}
              >
                Templates
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("list")}
                style={activeMenu === "list" ? customStyle : undefined}
              >
                List menu{" "}
                <span>
                  <i className="fa-solid fa-chevron-right fa-beat"></i>
                </span>
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("blacklist")}
                style={activeMenu === "blacklist" ? customStyle : undefined}
              >
                Sending Blacklist
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("pricing")}
                style={activeMenu === "pricing" ? customStyle : undefined}
              >
                Pricing
              </p>
            </motion.a>
            <motion.a href={""} variants={navChildrenVariants}>
              <p
                onClick={() => handleClick("api")}
                style={activeMenu === "api" ? customStyle : undefined}
              >
                API
              </p>
            </motion.a>
          </motion.div>
          <motion.div className="logout" variants={navChildrenVariants}>
            <button className="logout">Logout</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MobileBar;
