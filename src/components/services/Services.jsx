import './services.css';
import './services-adaptive.css';
import { Helmet } from 'react-helmet-async'



const Services = () => {
    return (
        <div>
             <Helmet>
                <title>Услуги по оформлению виз в США | Туристические, студенческие, консультации</title>
                <meta 
                    name="description" 
                    content="Мы предлагаем помощь в оформлении виз в США: туристические визы B1/B2, студенческие F1/F2, визовые консультации и сопровождение. Индивидуальный подход к каждому клиенту." 
                />
                <meta 
                    name="keywords" 
                    content="виза в США, туристическая виза, студенческая виза, визовая консультация, оформление визы, b1 b2, f1 f2, помощь с визой" 
                />
                <meta property="og:title" content="Услуги по оформлению виз в США" />
                <meta 
                    property="og:description" 
                    content="Туристические и студенческие визы, профессиональные консультации и помощь с документами. Полное сопровождение при подаче на визу." 
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_RU" />
            </Helmet>
            <section id="services" className="section_services">
                <div className="content_services">
                    <h1 className='h1-benefits'>наши <b className='b'>услуги</b></h1>
                    <div className="wrap">
                        <div className="cards">
                            <div className="card">
                                <div className="img">
                                    <div className='img_name'>
                                        <p className='name_card'>Туристические визы</p>
                                        <p className='name_b'>b1/b2</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Мы помогаем оформить туристическую визу в США. Поддержим на каждом этапе: от заполнения анкеты до подготовки к собеседованию.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_2">
                                    <div className='img_name'>
                                        <p className='name_card'>Студенческие визы</p>
                                        <p className='name_b'>F1/F2</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Получение студенческой визы требует тщательной подготовки. Мы поможем вам с документами и расскажем, как успешно пройти интервью в консульстве.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_3">
                                    <div className='img_name'>
                                        <p className='name_card'>визовые</p>
                                        <p className='name_b'>консультации</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Если вы только планируете подачу на визу и не знаете, с чего начать, наша консультация - первый шаг к успеху. Мы обсудим ваши цели и предложим оптимальные решения.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_4">
                                    <div className='img_name'>
                                        <p className='name_card'>помощь в сборе</p>
                                        <p className='name_b'>документов</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Мы помогаем оформить туристическую визу в США. Поддержим на каждом этапе: от заполнения анкеты до подготовки к собеседованию.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
