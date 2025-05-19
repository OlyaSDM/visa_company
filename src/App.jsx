
import './App.css';
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Work from './components/work/work';
import Faq from "./components/faq/Faq";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";
import Services from './components/services/Services';
import Top from './components/top/Top';
import Call from './components/call/call';
import { Helmet } from 'react-helmet-async';



function App() {

    return (
        <div className="App">
            <Helmet>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
    rel="stylesheet"
    media="print"
    onLoad="this.media='all'"
  />
</Helmet>
            <Welcome/>
            <About />
            <Services />
            <Work/>
            <Faq />
            <Reviews />
            <Contacts />
            <Call/>
            <Top/>
        </div>
    );
}

export default App
