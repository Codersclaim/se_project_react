import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";
const Header = ({ onCreateModal, date, city }) => {
 
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={logo} alt={logo} />
          </div>

          <div className="header__location">{`${currentDate}, ${city}`}</div>
        </div>

        <div className="header__avatar-logo">
          <div>
            <button
              className="header__button"
              type="text"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
          <div className="header__name">Terrence Tegegne</div>
          <div>
            <img src={avatar} alt={avatar} />
          </div>
        </div>
      </header>
    
  );
};

export default Header;
