import "./subscriber.scss";
import { motion } from "framer-motion";

const tabContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const tabChildrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

function Subscriber() {
  const subscriberList1 = [
    {
      key: 1,
      title: "Subscribers",
      num: "40,689",
      icon: "/subscriber-icon.png",
    },
    {
      key: 2,
      title: "Unsubscribe",
      num: "10,293",
      icon: "/unsubscribe-icon.png",
    },
    { key: 3, title: "Spam Reported", num: "9,000", icon: "/spam-icon.png" },
    { key: 4, title: "Blacklisted", num: "2,040", icon: "/blacklist-icon.png" },
  ];

  return (
    <motion.div
      className="subscriber"
      variants={tabContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {subscriberList1.map((list, index) => (
        <motion.div
          className="tab shadow-sm bg-body"
          variants={tabChildrenVariants}
          key={index}
        >
          <div className="title">
            <p>{list.title}</p>
            <h4>{list.num}</h4>
          </div>
          <img src={list.icon} alt="" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Subscriber;
