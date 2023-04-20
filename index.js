const Notification = (props) => {
  //  Write your code here.
  const { className, name, icon } = props;
  return;
  <div className={className}>
    <img src={icon} className="notification-icon" />
    <p className="description">{name}</p>
  </div>;
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1 className="heading"> Notifications </h1>

    <Notification
      className="information"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      name="Information Message"
    />
    <Notification
      className="success"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      name="Success Message"
    />
    <Notification
      className="warning"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      name="Warning Message"
    />
    <Notification
      className="error"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      name="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
