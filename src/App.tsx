import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import ServiceCards from './components/ServiceCards';
import CommentsSection from './components/CommentsSection';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main">
        <SearchBar />
        <ServiceCards />
        <CommentsSection />
      </main>
    </div>
  );
};

export default App;