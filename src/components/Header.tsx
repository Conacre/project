import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#statistics">Статистика</a>
        <a href="#reports">Отчеты</a>
        <a href="#tasks">Задачи по проекту</a>
        <a href="#files">Обмен файлами</a>
        <a href="#documents">Документы</a>
        <a href="#requests" className="active">Заявки</a>
      </nav>
    </header>
  );
};

export default Header;