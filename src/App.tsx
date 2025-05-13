import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServiceCards from './components/ServiceCards';
import CommentsSection from './components/CommentsSection';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <main className="main">
        <SearchBar />
        <ServiceCards />
        <CommentsSection />
      </main>
    </div>
  );
};

export default App;