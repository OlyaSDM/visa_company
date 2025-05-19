import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import './welcome.css';
import './welcome-adaptive.css';

const Welcome = () => {
  const phoneNumber = '+1 (347) 612 8437';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // исправлено: без window на сервере

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) closeMenu();
    };

    handleResize(); // вызываем сразу при монтировании
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="head">
      <Helmet>
        <title>VISA TRAVEL EASY – Помощь в оформлении виз</title>
        <meta
          name="description"
          content="Помощь в получении виз: США, Шенген, Великобритания, Япония. Легко, быстро и надёжно."
        />
        <meta property="og:title" content="VISA TRAVEL EASY" />
        <meta
          property="og:description"
          content="Быстрая и профессиональная помощь в получении виз. Более 5 лет опыта."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="ru" />
      </Helmet>

      <header>
        <div className="header">
          {isMobile ? (
            <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <div className={`line ${isMenuOpen ? 'line-1' : ''}`}></div>
              <div className={`line ${isMenuOpen ? 'line-2' : ''}`}></div>
              <div className={`line ${isMenuOpen ? 'line-3' : ''}`}></div>
            </div>
          ) : (
            <nav className="navbar">
              <ul className="contt">
                {['about', 'services', 'benefits', 'FAQ', 'reviews', 'contacts'].map(section => (
                  <li className="li" key={section}>
                    <Link
                      className="a"
                      to={section}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {section === 'about' && 'ОБО МНЕ'}
                      {section === 'services' && 'УСЛУГИ'}
                      {section === 'benefits' && 'ПРЕИМУЩЕСТВА'}
                      {section === 'FAQ' && 'FAQ'}
                      {section === 'reviews' && 'ОТЗЫВЫ'}
                      {section === 'contacts' && 'КОНТАКТЫ'}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="burger-menu active">
            <ul>
              {['about', 'services', 'benefits', 'FAQ', 'reviews', 'contacts'].map(section => (
                <li className="a_burgerr" key={section}>
                  <Link
                    className="a"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    {section === 'about' && 'ОБО МНЕ'}
                    {section === 'services' && 'УСЛУГИ'}
                    {section === 'benefits' && 'ПРЕИМУЩЕСТВА'}
                    {section === 'FAQ' && 'FAQ'}
                    {section === 'reviews' && 'ОТЗЫВЫ'}
                    {section === 'contacts' && 'КОНТАКТЫ'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <div className="text-main">
        <div className="text">
          <p className="first_text">Добро пожаловать на сайт</p>
          <h1 className="h1_main">VISA TRAVEL EASY!</h1>
          <div className="second_all">
            <p className="third_text">
              США, Шенген, Великобритания, Япония — подскажем, поможем, оформим
            </p>
            <p className="four_text">
              Более 5 лет опыта и множество успешных кейсов — с нами оформление виз становится
              простым и быстрым.
            </p>
          </div>
        </div>
        <a href="https://wa.me/13476128437" target="_blank" rel="noopener noreferrer">
          <button className="main_btn">СВЯЗАТЬСЯ С НАМИ</button>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
