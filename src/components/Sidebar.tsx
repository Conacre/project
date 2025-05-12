import '../styles/Sidebar.css';
import logo from '../assets/logo.svg'; // Импорт логотипа
import seoIcon from '../assets/seo.svg'; // Импорт иконки SEO
import contextIcon from '../assets/context.svg'; // Импорт иконки Контекст
import avatar from '../assets/avatar.svg'; // Импорт аватарки

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Логотип" className="logo" />
        <p className="logo-text">market-flora.ru</p>
        <div className="divider"></div> {/* Полоса под текстом */}
      </div>
      <div className="buttons-container">
        <button className="button">
          <img src={seoIcon} alt="SEO" className="button-icon" />
          SEO
        </button>
        <button className="button">
          <img src={contextIcon} alt="Контекст" className="button-icon" />
          Контекст
        </button>
      </div>
      <div className="account-container">
        <img src={avatar} alt="Аватар" className="account-avatar" />
        <div className="account-info">
          <div className="account-name">
            <p>Валерия</p>
            <p>Горностаева</p>
          </div>
          <div className="account-details">
            <p className="account-phone">8 983 527 67 33</p>
            <p className="account-email">sk@itb-company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;