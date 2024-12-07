import React, { useState } from "react";
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

  return (
    <>
    <Header/>
        <div className="notifications-container container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="notifications-header d-flex justify-content-between align-items-center">
                <h2 className="text-light mt-4">Notifications</h2>
                {notifications.length > 0 && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={clearNotifications}
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="notifications-list">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="notification-item p-3 mb-2 rounded"
                    >
                      {notification}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-secondary mt-4">
                    No notifications to show!
                  </p>
                )}
              </div>
            </div>
          </div>   
        </div>
        <Footer/>
    </>
  );
}

export default Notifications;
