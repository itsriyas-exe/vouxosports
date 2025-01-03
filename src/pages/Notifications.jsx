import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/notifications.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Notifications() {
  const [notifications, setNotifications] = useState([
    "Your favorite team won!",
    "New comment on your post.",
    "Your profile has been updated.",
    "Weekly newsletter is available.",
    "Checkout upcoming matches.",
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />
      <motion.div
        className="notifications-container container-fluid"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <motion.div
              className="notifications-header d-flex justify-content-between align-items-center"
              variants={fadeIn}
            >
              <h2 className="text-light mt-4">Notifications</h2>
              {notifications.length > 0 && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={clearNotifications}
                >
                  Clear All
                </button>
              )}
            </motion.div>
            <motion.div
              className="notifications-list"
              initial="hidden"
              animate="visible"
            >
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <motion.div
                    key={index}
                    className="notification-item p-3 mb-2 rounded"
                    variants={itemAnimation}
                    initial="hidden"
                    animate="visible"
                  >
                    {notification}
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="text-center text-secondary mt-4"
                  variants={fadeIn}
                >
                  No notifications to show!
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Notifications;
