import { SetStateAction, useState } from 'react'
import './Header.css'
import amazonLogo from '../assets/amazon-logo.png'
import { BiCartAdd } from 'react-icons/bi' // Import the cart icon

function Header() {
  const [location, setLocation] = useState('Canada')
  const [popupVisible, setPopupVisible] = useState(false)
  const [language, setLanguage] = useState('EN')
  const [accountPopupVisible, setAccountPopupVisible] = useState(false)

  const handleLocationChange = (event: { target: { value: SetStateAction<string> } }) => {
    setLocation(event.target.value)
  }

  const handleLanguageChange = (event: { target: { value: SetStateAction<string> } }) => {
    setLanguage(event.target.value)
  }

  return (
    <header className="header">
      <div className="logo-and-location">
        <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" />
        <div className="location">
          <button onClick={() => setPopupVisible(true)} className="deliver-to-button">
            Deliver to
            <div className="location-name">{location}</div>
          </button>
          {popupVisible && (
            <div id="location-popup" className="location-popup show">
              <div className="popup-header">
                <span>Choose your location:</span>
                <button onClick={() => setPopupVisible(false)} className="close-button">x</button>
              </div>
              <label>
                <select value={location} onChange={handleLocationChange}>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </label>
              <p className="delivery-info">Delivery options and delivery speeds may vary for different locations</p>
              <button className="sign-in-address-button">Sign in to see your addresses</button>
            </div>
          )}
        </div>
      </div>
      <div className="search-container">
        <select className="department-dropdown">
          <option value="all">All Departments</option>
          <option value="arts">Arts, Crafts & Sewing</option>
          <option value="audible">Audible Books & Originals</option>
          <option value="automotive">Automotive Parts & Accessories</option>
          <option value="baby">Baby</option>
          <option value="beauty">Beauty & Personal Care</option>
          <option value="books">Books</option>
          <option value="cds">CDs & Vinyl</option>
          <option value="cellphones">Cell Phones & Accessories</option>
          <option value="collectibles">Collectibles & Fine Art</option>
          <option value="computers">Computers</option>
          <option value="credit">Credit and Payment Cards</option>
          <option value="digitalmusic">Digital Music</option>
          <option value="electronics">Electronics</option>
          <option value="garden">Garden & Outdoor</option>
          <option value="giftcards">Gift Cards</option>
          <option value="grocery">Grocery & Gourmet Food</option>
          <option value="handmade">Handmade</option>
          <option value="health">Health, Household & Baby Care</option>
          <option value="homebusiness">Home & Business Services</option>
          <option value="homekitchen">Home & Kitchen</option>
          <option value="industrial">Industrial & Scientific</option>
          <option value="prime">Just for Prime</option>
          <option value="kindle">Kindle Store</option>
        </select>
        <input type="text" className="search-field" placeholder="Search Amazon" />
        <button className="search-button">Search</button>
        <select className="language-dropdown" value={language} onChange={handleLanguageChange}>
          <option value="EN">EN - English</option>
          <option value="ES">ES - Español</option>
          <option value="FR">FR - Français</option>
          <option value="DE">DE - Deutsch</option>
          <option value="IT">IT - Italiano</option>
          <option value="JA">JA - 日本語</option>
          <option value="ZH">ZH - 中文</option>
        </select>
      </div>
      <nav>
        <div
          className="account-lists"
          onMouseEnter={() => setAccountPopupVisible(true)}
          onMouseLeave={() => setAccountPopupVisible(false)}
        >
          <a href="#">Hello, sign in
            <div>Account & Lists</div>
          </a>
          {accountPopupVisible && (
            <div className="account-popup">
                <div className='sign-in-section'> 
                    <button  className="sign-in-button">Sign in</button>
                    <p >New customer? <span className="new-customer">Start here.</span></p>
                </div>
              
      
              <div className="popup-content">
                <div>
                <p className="popup-title">Your Lists</p>
                  <p>Create a List</p>
                  <p>Find a List or Registry</p>
                </div>
                <div>
                  <p className="popup-title">Your Account</p>
                  <p>Orders</p>
                  <p>Recommendations</p>
                  <p>Browsing History</p>
                  <p>Watchlist</p>
                  <p>Video Purchases & Rentals</p>
                  <p>Kindle Unlimited</p>
                  <p>Content & Devices</p>
                  <p>Subscribe & Save Items</p>
                  <p>Memberships & Subscriptions</p>
                  <p>Music Library</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="account-lists">
          <a href="#">Returns
          <div>& Orders</div>
          </a>
        </div>
        
        <div className="account-lists">
          <a href="#">
            <BiCartAdd className="bi-cart-add" /> {/* Cart icon with class name */}
          </a> 
        </div>
      </nav>
    </header>
  )
}

export default Header
