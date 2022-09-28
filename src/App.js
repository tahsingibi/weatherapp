import Provider from './context/Context';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Provider>
        <Header />
        <Weather />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
