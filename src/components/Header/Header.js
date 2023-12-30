import "./Header.css";
import avatar from "../../images/avatar.svg"
// import logo from "../../images/logo.svg"
const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={require("../../images/logo.svg").default} alt="logo" />
          </div>

          <div>Date</div>
        </div>

        <div className="header__avatar-logo">
          <div>
            <button className="header__button" type="text" onClick={onCreateModal}>
              + Add clothes
            </button>
          </div>
          <div className="header__name" >Terrence Tegegne</div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
