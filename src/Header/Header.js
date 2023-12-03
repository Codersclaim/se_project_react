import './Header.css'

const Header = () => {
console.log('Header');

return(
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={require("../images/logo.svg").default} alt="logo" />
          </div>

          <div>Date</div>
        </div>

        <div className="header__avatar-logo">
          <div>
            <button className="button" type="text">Add New Clothes</button>
          </div>
          <div>Name</div>
          <div><img src="/images/avatar.svg" alt="avatar" /></div>
        </div>
      </header>
    </div>
)
}

export default Header;