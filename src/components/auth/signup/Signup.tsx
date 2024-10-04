import Logo from "../../global ui/logo/Logo";
import Illus from "../../global ui/automation-illustration/Illus";
import "./signup.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const listedText = [
  "Reach your target audience effectively, track your results, and grow your customer base with ease",
  "With intuitive tools and features, creating stunning email campaigns has never been easier",
  "Design your marketing with email automation workflow",
  "Join the thousands of businesses that trust us for their email marketing needs and start seeing results today.",
];

function Signup() {
  return (
    <div className="signup">
      <div className="left">
        <div className="header">
          <Logo />
        </div>
        <div className="content">
          <div className="title">
            <h1>Sign Up</h1>
            <p>
              Already have an account ? <a href="">Log in</a>{" "}
            </p>
          </div>
          <form action="">
            <div>
              <label htmlFor="fName">Full Name</label>
              <input
                type="text"
                name="fName"
                placeholder="example name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="psw">Password</label>
              <input
                type="password"
                name="psw"
                placeholder="@£*%"
                id="psw"
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              {/* <span className="password-toggle-icon">
                <i className="fas fa-eye"></i>
              </span> */}
            </div>
            <div>
              <label htmlFor="cPsw">Confirm Password</label>
              <input type="password" name="cPsw" placeholder="@£*%" required />
              {/* <span className="password-toggle-icon">
                <i className="fas fa-eye"></i>
              </span> */}
            </div>
            <div className="submit">
              <button className="btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="illustration">
          <div className="linear">
            {/* <img src="./gradient.png" alt="" /> */}
          </div>
          <Illus />
        </div>
        <div className="illust-text">
          <h3>Track every single email sent out for your campaign</h3>
          <motion.div className="list">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {listedText.map((list) => (
                <motion.li variants={childVariants}>{list}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
