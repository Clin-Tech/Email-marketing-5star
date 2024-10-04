import Logo from "../../global ui/logo/Logo";
import Illus from "../../global ui/automation-illustration/Illus";
import "./signin.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

function Signin() {
  return (
    <div className="signin">
      <div className="left">
        <div className="header">
          <Logo />
        </div>
        <div className="content">
          <div className="title">
            <h1>Sign in</h1>
            <p>
              Dont't have an account ?{" "}
              <Link to={"/auth/signup"}>Create now</Link>
            </p>
          </div>
          <form action="">
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
              <input type="password" name="psw" placeholder="@£*%" required />
            </div>
            <div className="remember">
              <div className="toLeft">
                <input type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe">remember me</label>
              </div>
              <div className="toRight">
                <Link to={"/"}>Forgot Password ?</Link>
              </div>
            </div>
            <div className="submit">
              <button className="btn" type="submit">
                Sign in
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

export default Signin;
