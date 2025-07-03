// src/App.js
import React, { useState } from 'react';
import './App.css';
import {
  FaStore, FaThList, FaClipboardList, FaHeart, FaShoppingCart, FaEnvelopeOpenText, FaCommentDots, FaQuestionCircle, FaCog, FaSearch, FaBell, FaWhatsapp, FaEnvelope, FaThLarge, FaBoxes, FaSeedling, FaCarrot, FaFish, FaAppleAlt, FaDrumstickBite, FaPlus, FaDollarSign, FaChartLine, FaUser, FaStar // Added FaStar here
} from 'react-icons/fa';
import {
  MdOutlineCategory, MdOutlineReorder, MdOutlineMessage, MdOutlineFeedback, MdOutlineHelpOutline, MdOutlineSettings, MdStorefront, MdMenu, // Import MdMenu for the toggle button
}
  from 'react-icons/md';

import { IoHeartOutline, IoCartOutline } from 'react-icons/io5';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'; // Import icons for light/dark mode

function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Wishlist state and handler for popular products ---
  const [wishlist, setWishlist] = useState({});
  const toggleWishlist = (productName) => {
    setWishlist((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  // Product data for popular products (used for wishlist functionality)
  const products = [
    {
      name: "Cabbage",
      img: "cabbage.png",
      stock: 210,
      price: "$15.10",
    },
    {
      name: "Kale vegetables",
      img: "kale_vegetables.png",
      stock: 124,
      price: "$8.24",
    },
    {
      name: "Brocoly",
      img: "brocoli.png",
      stock: 83,
      price: "$5.93",
    },
    {
      name: "Celery",
      img: "Celery.png",
      stock: 10,
      price: "$4.80",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Conditional classes for overall layout and dark mode
    <div className={`app-container ${isSidebarHidden ? 'sidebar-hidden-layout' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <aside className={`sidebar ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
        <div className="sidebar-header">
          <img src="company-logo.png" alt="Astrolite Logo" />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item market">
            <FaStore className="sidebar-icon"  />
            <span>Market</span>
          </li>
          <li className="sidebar-menu-item categories">
            <FaThList className="sidebar-icon" />
            <span>Categories</span>
          </li>
          <li className="sidebar-menu-item order">
            <FaClipboardList className="sidebar-icon" />
            <span>Order</span>
            <span className="item-count">3</span>
          </li>
          <li className="sidebar-menu-item favourite">
            <FaHeart className="sidebar-icon" />
            <span>Favourite</span>
          </li>
          <li className="sidebar-menu-item cart">
            <FaShoppingCart className="sidebar-icon" />
            <span>Carts</span>
            <span className="item-count">8</span>
          </li>
          <li className="sidebar-menu-item message">
            <FaEnvelopeOpenText className="sidebar-icon" />
            <span>Message</span>
          </li>
          <li className="sidebar-menu-item feedback">
            <FaCommentDots className="sidebar-icon" />
            <span>Feedback</span>
          </li>
          <li className="sidebar-menu-item help">
            <FaQuestionCircle className="sidebar-icon" />
            <span>Help</span>
          </li>
          <li className="sidebar-menu-item settings">
            <FaCog className="sidebar-icon"/>
            <span>Settings</span>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-buttons">
            <button className="menu-toggle-button" onClick={toggleSidebar}>
              <MdMenu />
            </button>
            <button className="buy">BUY</button>
            <button className="sell">SELL</button>
            <div className="header-communication-icons">
              <FaWhatsapp className="header-icon whatsapp" />
              <FaEnvelope className="header-icon mail" />
            </div>
          </div>
          <div className="header-search">
            <div className="search-bar-enhanced">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products, orders, categories..."
                className="search-input"
              />
            </div>
          </div>
          <div className="header-profile-group">
            <FaBell className="header-icon notification" />
            <button className="theme-toggle-button" onClick={toggleDarkMode}>
              {isDarkMode ? <BsSunFill className="header-icon" /> : <BsMoonFill className="header-icon" />}
            </button>
            <div className="header-user-container">
              <div className="header-user-avatar">S</div>
              <span className="header-user-name">Saishma</span>
            </div>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="left-panel">
            <div className="card discount-banner">
              <div>
                <h3>Get special discounts up to 45%</h3>
                <p>Enjoy our vegetables at a discount price</p>
                <button>Use Now</button>
              </div>
              <img src="vegetables-banner.png" alt="Vegetables Discount" />
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <FaThLarge className="card-title-icon category-icon" />
                  Popular Categories
                </h4>
                <a href="#" className="view-all">View All</a>
              </div>
              <div className="categories-grid">
                <div className="category-item">
                  <img src="vegetables.png" alt="Vegetables" />
                  <span>Vegetables</span>
                </div>
                <div className="category-item">
                  <img src="fashion.png" alt="Fashion" />
                  <span>Fashion</span>
                </div>
                <div className="category-item">
                  <img src="mobile.png" alt="Mobiles" />
                  <span>Mobiles</span>
                </div>
                <div className="category-item">
                  <img src="office.png" alt="Office" />
                  <span>Office</span>
                </div>
                <div className="category-item">
                  <img src="computer.png" alt="Computers" />
                  <span>Computers</span>
                </div>
              </div>
            </div>

            <div className="card categories-stock-card">
              <div className="card-header">
                <h4 className="card-title">
                  <FaBoxes className="card-title-icon" />
                  Categories and Stock
                </h4>
                <button className="filter-button">Filter</button>
              </div>
              <div className="stock-grid">
                <div className="stock-item vegetables-stock">
                  <div className="stock-icon-wrapper">
                    <FaSeedling />
                  </div>
                  <div className="stock-item-count">1.890</div>
                  <div className="stock-item-name">Veggies</div>
                </div>
                <div className="stock-item tubers-stock">
                  <div className="stock-icon-wrapper">
                    <FaCarrot />
                  </div>
                  <div className="stock-item-count">2.040</div>
                  <div className="stock-item-name">Tubers</div>
                </div>
                <div className="stock-item fish-stock">
                  <div className="stock-icon-wrapper">
                    <FaFish />
                  </div>
                  <div className="stock-item-count">548</div>
                  <div className="stock-item-name">Fish</div>
                </div>
                <div className="stock-item fruits-stock">
                  <div className="stock-icon-wrapper">
                    <FaAppleAlt />
                  </div>
                  <div className="stock-item-count">300</div>
                  <div className="stock-item-name">Fruits</div>
                </div>
                <div className="stock-item meat-stock">
                  <div className="stock-icon-wrapper">
                    <FaDrumstickBite />
                  </div>
                  <div className="stock-item-count">236</div>
                  <div className="stock-item-name">Meat</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <FaStar className="card-title-icon" />
                  Popular Product
                </h4>
                <a href="#" className="view-all">See All</a>
              </div>
              <div className="product-grid">
                {products.map((product) => (
                  <div className="product-card" key={product.name}>
                    <img src={product.img} alt={product.name} />
                    <div className="product-card-info">
                      <div className="product-card-name">{product.name}</div>
                      <div className="product-card-stock">{product.stock} stock</div>
                      <div className="product-card-price">{product.price}</div>
                    </div>
                    <button className="add-to-cart-btn"><FaPlus /></button>
                    <button
                      className={`wishlist-btn${wishlist[product.name] ? " wished" : ""}`}
                      onClick={() => toggleWishlist(product.name)}
                      title={wishlist[product.name] ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <FaHeart />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="card income-card">
              <div className="card-header">
                <FaDollarSign className="card-title-icon" />
                <h4 className="card-title">Income</h4>
              </div>

              <div className="income-summary">
                <div className="income-item today-sales">
                  <div className="income-item-icon-wrapper">
                    <FaShoppingCart />
                  </div>
                  <div className="income-item-value">$129.80</div>
                  <div className="income-item-label">Today's Sales</div>
                </div>
                <div className="income-item weekly-revenue">
                  <div className="income-item-icon-wrapper">
                    <FaChartLine />
                  </div>
                  <div className="income-item-value">$347.52</div>
                  <div className="income-item-label">Weekly Revenue</div>
                </div>
                <div className="income-item monthly-income">
                  <div className="income-item-icon-wrapper">
                    <FaDollarSign />
                  </div>
                  <div className="income-item-value">$897.66</div>
                  <div className="income-item-label">Monthly Income</div>
                </div>
              </div>
            </div>

            <div className="card notification-card">
              <div className="card-header">
                <FaBell className="card-title-icon" />
                <h4 className="card-title">Notification</h4>
              </div>
              <ul className="notification-list">
                <li className="notification-item">
                  <span>New product added: Organic Apples.</span>
                  <span className="date">Just now</span>
                </li>
                <li className="notification-item">
                  <span>Low stock: Bananas. Reorder soon.</span>
                  <span className="date">14 May, 12:00</span>
                </li>
                <li className="notification-item">
                  <span>Order delivered(Vegetable stocks).</span>
                  <span className="date">14 May, 09:00</span>
                </li>
                <li className="notification-item">
                  <span>Action: Salmon stock critically low.</span>
                  <span className="date">13 May, 10:00</span>
                </li>
                <li className="notification-item">
                  <span>Inventory update: Breast stock.</span>
                  <span className="date">13 May, 08:30</span>
                </li>
                <li className="notification-item">
                  <span>Customer feedback: "Excellent service."</span>
                  <span className="date">12 May, 15:00</span>
                </li>
                <li className="notification-item">
                  <span>Payment received from User.</span>
                  <span className="date">12 May, 14:10</span>
                </li>
                <li className="notification-item">
                  <span>Order #8766 pending.</span>
                  <span className="date">12 May, 13:45</span>
                </li>
                <li className="notification-item">
                  <span>Price updated: Tomatoes.</span>
                  <span className="date">12 May, 12:30</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  <FaClipboardList className="card-title-icon" />
                  Latest Order</h4>
              </div>
              <table className="latest-orders-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Goods</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><FaUser /></td>
                    <td>Saishma</td>
                    <td>Carrot (5)</td>
                    <td><button className="status-button">Accept</button></td>
                  </tr>
                  <tr>
                    <td><FaUser /></td>
                    <td>Rakesh</td>
                    <td>Fruits</td>
                    <td><button className="status-button">Accept</button></td>
                  </tr>
                  <tr>
                    <td><FaUser /></td>
                    <td>Harshu</td>
                    <td>Table 4*4</td>
                    <td><button className="status-button">Accept</button></td>
                  </tr>
                  <tr>
                    <td><FaUser /></td>
                    <td>Deepika</td>
                    <td>Pure Ghee</td>
                    <td><button className="status-button">Accept</button></td>
                  </tr>
                   <tr>
                    <td><FaUser/></td>
                    <td>Jyothi</td>
                    <td>Eggs</td>
                    <td><button className="status-button">Accept</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
