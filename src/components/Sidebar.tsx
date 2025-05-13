import '../styles/Sidebar.css';
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.svg';
import seoIcon from '../assets/seo.svg';
import contextIcon from '../assets/context.svg';
import qualityControlIcon from '../assets/quality_control.svg';
import qaIcon from '../assets/q_a.svg';
import trainingIcon from '../assets/training.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Логотип" className="logo" />
        <p className="logo-text">market-flora.ru</p>
        <div className="divider"></div> {/* Полоса под текстом */}
      </div>

      {/* Основные кнопки */}
      <div className="main-buttons">
        <button className="sidebar-button">
          <img src={seoIcon} alt="SEO" className="button-icon" />
          SEO
        </button>
        <button className="sidebar-button">
          <img src={contextIcon} alt="Контекст" className="button-icon" />
          Контекст
        </button>
      </div>

      {/* Информация об аккаунте */}
      <div className="account-info">
        <div className="account-top">
          <img src={avatar} alt="Аватар" className="avatar" />
          <div className="account-details">
            <p className="account-name">Валерия</p>
            <p className="account-name">Горностаева</p>
          </div>
        </div>
        <hr className="divider full-width" /> {/* Разделительная полоса */}
        <div className="account-bottom">
          <p className="account-contact">8 983 527 67 33</p>
          <p className="account-contact">sk@itb-company.com</p>
        </div>
      </div>

      <div className="divider"></div> {/* Новая полоса */}

      {/* Дополнительные кнопки */}
      <div className="additional-buttons">
        <button className="sidebar-button">
          <img src={qualityControlIcon} alt="Контроль качества" className="button-icon" />
          Контроль качества
        </button>
        <button className="sidebar-button">
          <img src={qaIcon} alt="Вопрос / Ответ" className="button-icon" />
          Вопрос / Ответ
        </button>
        <button className="sidebar-button">
          <img src={trainingIcon} alt="Обучение" className="button-icon" />
          Обучение
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;