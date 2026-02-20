import React, { useState } from 'react';
import {
    View,
    Panel,
    PanelHeader,
    SplitLayout,
    SplitCol,
    PanelHeaderBack,
    Title,
    Text,
    ConfigProvider,
    AdaptivityProvider,
    AppRoot,
    Button,
    Card
} from '@vkontakte/vkui';
import { Icon24PhoneOutline, Icon24MailOutline, Icon24LogoVk } from '@vkontakte/icons';

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [selectedImage, setSelectedImage] = useState(null);

    // Данные для вывесок
    // Данные для вывесок с улучшенными описаниями
    const signsData = [
        { id: 1, src: '/images/1.png', title: 'Стоматология', desc: 'Светящаяся вывеска зуба. Лицевая подсветка обеспечивает отличную читаемость ночью.', price: '35 000 ₽' },
        { id: 2, src: '/images/2.png', title: 'Кафе / Бар', desc: 'Классический световой короб с яркой панелью. Идеально для привлечения внимания.', price: '14 800 ₽' },
        { id: 3, src: '/images/3.png', title: 'Торговый павильон', desc: 'Оформление фасада магазина композитными панелями и объемными световыми буквами "МОДА СПОРТ".', price: 'от 350 000 ₽' },
        { id: 4, src: '/images/4.jfif', title: 'Офис LUMINA', desc: 'Премиальные световые буквы с подсветкой и декоративные световые линии на глухом фасаде.', price: 'от 350 000 ₽' },
        { id: 5, src: '/images/5.jfif', title: 'Салон Q-NAILS', desc: 'Элегантные объемные буквы с лицевым свечением. Стильное решение для индустрии красоты.', price: 'от 80 000 ₽' },
        { id: 6, src: '/images/6.jfif', title: 'Студия КУХНИ', desc: 'Контрастный прямоугольный световой короб внушительных размеров. Строгий вид и максимальная читаемость.', price: 'от 98 000 ₽' },
        { id: 7, src: '/images/7.jfif', title: 'Кронштейн КАФЕ', desc: 'Изящная двусторонняя вывеска на консоли с элементами художественной ковки. Придает заведению шарм.', price: '10 000 ₽' },
        { id: 8, src: '/images/8.jfif', title: 'Пекарня Крендель', desc: 'Фигурные объемные буквы теплого свечения с дополнительными декоративными элементами.', price: 'от 185 000 ₽' },
        { id: 9, src: '/images/9.jfif', title: 'Круглое Cafe', desc: 'Двусторонняя круглая панель-кронштейн в современном стиле. Отлично выделяет заведение на улице.', price: '35 000 ₽' },
        { id: 10, src: '/images/10.jfif', title: 'Вывеска SALON', desc: 'Строгая подвесная табличка с классическим орнаментом на узорном кованом подвесе.', price: '35 000 ₽' },
        { id: 11, src: '/images/11.png', title: 'Ваш Дизайн', desc: 'Изготовим любую вывеску по вашим размерам и дизайну. «Вывески, которые говорят о вас больше, чем слова!»', price: 'По запросу' },
    ];


    return (
        <ConfigProvider appearance="dark">
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout>
                        <SplitCol>
                            <View activePanel={activePanel}>
                                <Panel id="home">
                                    <PanelHeader transparent={true}></PanelHeader>

                                    <div className="hero-container">
                                        <div className="hero-title-wrapper">
                                            <span className="super-title">Рекламно-производственная компания</span>
                                            <div className="glitch-title" data-text="ТЕХНОЛОГИЯ">
                                                ТЕХНОЛОГИЯ
                                                <div className="glitch-line"></div>
                                            </div>
                                        </div>
                                        <Text
                                            className="hero-subtitle"
                                            style={{
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: '1.8rem',
                                                fontStyle: 'italic',
                                                color: '#D4AF37',
                                                letterSpacing: '1px',
                                                textShadow: '0 2px 10px rgba(212, 175, 55, 0.2)'
                                            }}
                                        >
                                            Производство эффектных вывесок для вашего бизнеса
                                        </Text>

                                        <div className="action-buttons">
                                            <Button size="l" appearance="positive" className="gold-btn main-action">Рассчитать заказ</Button>
                                            <Button size="l" appearance="overlay" className="gold-btn" onClick={() => setActivePanel('engraving')}>Лазерная гравировка</Button>
                                            <Button size="l" appearance="overlay" className="gold-btn">Услуги</Button>
                                        </div>
                                    </div>

                                    <div className="catalog-section">
                                        <Title level="2" className="section-title" style={{ fontFamily: "'Montserrat', sans-serif" }}>НАШИ РАБОТЫ</Title>
                                        <div className="showcase-grid">
                                            {signsData.map(item => (
                                                <div
                                                    key={item.id}
                                                    className="sign-card-container"
                                                    onClick={() => setSelectedImage(item.src)}
                                                >
                                                    <div className="sign-card-inner">
                                                        {/* Лицевая сторона */}
                                                        <Card mode="shadow" className="sign-card sign-card-front">
                                                            <div className="sign-image-wrapper">
                                                                <img src={item.src} alt={item.title} className="sign-image" />
                                                                <div className="sign-overlay">
                                                                    <Title level="3" style={{ color: '#fff', marginBottom: '8px' }}>{item.title}</Title>
                                                                </div>
                                                            </div>
                                                        </Card>

                                                        {/* Обратная сторона */}
                                                        <Card mode="shadow" className="sign-card sign-card-back">
                                                            <div className="card-back-content">
                                                                <Title level="3" style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: "'Montserrat', sans-serif" }}>
                                                                    {item.title}
                                                                </Title>
                                                                <Text style={{ color: '#eee', marginBottom: '16px', lineHeight: '1.5' }}>
                                                                    {item.desc}
                                                                </Text>
                                                                <div className="price-tag">{item.price}</div>
                                                                <Button size="m" className="gold-button order-btn" onClick={(e) => { e.stopPropagation(); console.log('Order clicked'); }}>
                                                                    Заказать просчет
                                                                </Button>
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Лайтбокс для полноэкранного просмотра (плавно появляется) */}
                                    {selectedImage && (
                                        <div className="fullscreen-lightbox" onClick={() => setSelectedImage(null)}>
                                            <div className="lightbox-content">
                                                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                                                <img src={selectedImage} alt="Полноэкранный просмотр" />
                                            </div>
                                        </div>
                                    )}

                                    <Footer setActivePanel={setActivePanel} />
                                </Panel>

                                <Panel id="engraving">
                                    <PanelHeader
                                        before={<PanelHeaderBack onClick={() => setActivePanel('home')} />}
                                        transparent={true}
                                    >
                                        <span style={{ color: '#D4AF37' }}>В меню</span>
                                    </PanelHeader>

                                    <div className="hero-container" style={{ minHeight: '20vh' }}>
                                        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>ЛАЗЕРНАЯ ГРАВИРОВКА</h1>
                                        <p className="hero-subtitle">Металлические изделия идеального качества</p>
                                    </div>

                                    <main className="catalog-section">
                                        <div className="engraving-placeholder">
                                            <h3 style={{ color: '#fff' }}>Раздел находится в разработке</h3>
                                            <p style={{ color: '#aaa', marginTop: '10px' }}>Здесь будет представлена галерея наших работ по металлу.</p>
                                            <Button size="l" className="gold-outline-button" onClick={() => setActivePanel('home')} style={{ marginTop: '2rem' }}>
                                                Вернуться на главную
                                            </Button>
                                        </div>
                                    </main>

                                    <Footer setActivePanel={setActivePanel} />
                                </Panel>

                                <Panel id="privacy">
                                    <PanelHeader
                                        before={<PanelHeaderBack onClick={() => setActivePanel('home')} />}
                                        transparent={true}
                                    >
                                        <span style={{ color: '#D4AF37' }}>Политика конфиденциальности</span>
                                    </PanelHeader>

                                    <main className="catalog-section" style={{ padding: '2rem', color: '#fff', textAlign: 'left', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                                        <h2 style={{ color: '#D4AF37', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Политика конфиденциальности</h2>
                                        <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую ООО "Альянс-Менеджмент НВ" может получить о Пользователе во время использования сайта.</p>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>1. Определение терминов</h3>
                                        <p>1.1. В настоящей Политике конфиденциальности используются следующие термины:</p>
                                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                                            <li>«Администрация сайта» – уполномоченные сотрудники на управление сайтом, действующие от имени ООО "Альянс-Менеджмент НВ".</li>
                                            <li>«Персональные данные» — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                                            <li>«Обработка персональных данных» — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
                                        </ul>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>2. Общие положения</h3>
                                        <p>2.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.</p>
                                        <p>2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.</p>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>3. Предмет политики конфиденциальности</h3>
                                        <p>3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации на сайте или при оформлении заказа.</p>
                                        <p>3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, включают в себя:</p>
                                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                                            <li>Фамилию, имя, отчество Пользователя;</li>
                                            <li>Контактный телефон Пользователя;</li>
                                            <li>Адрес электронной почты (e-mail);</li>
                                            <li>Название компании (опционально);</li>
                                        </ul>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>4. Цели сбора персональной информации пользователя</h3>
                                        <p>4.1. Персональные данные Пользователя Администрация сайта может использовать в целях:</p>
                                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                                            <li>Идентификации Пользователя, зарегистрированного на сайте, для оформления заказа и (или) заключения Договора купли-продажи товара дистанционным способом.</li>
                                            <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта, оказания услуг, обработку запросов и заявок от Пользователя.</li>
                                        </ul>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>5. Способы и сроки обработки персональной информации</h3>
                                        <p>5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом.</p>
                                        <p>5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.</p>

                                        <h3 style={{ marginTop: '2rem', color: '#D4AF37' }}>6. Реквизиты организации</h3>
                                        <p>ООО "Альянс-Менеджмент НВ"<br />
                                            ИНН: 8603191776<br />
                                            ОГРН: 1128603020897<br />
                                            Юридический адрес: 628602, Ханты-Мансийский Автономный округ - Югра, город Нижневартовск, ул. Чапаева, д.11-б.</p>
                                    </main>

                                    <Footer setActivePanel={setActivePanel} />
                                </Panel>

                            </View>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

const Footer = ({ setActivePanel }) => (
    <footer className="footer">
        <div className="footer-content">
            <div className="contact-item">
                <Icon24PhoneOutline style={{ display: 'inline', verticalAlign: 'middle', color: '#D4AF37', marginRight: 8 }} />
                +7 (922) 783-90-22
            </div>
            <div className="contact-item">
                <Icon24MailOutline style={{ display: 'inline', verticalAlign: 'middle', color: '#D4AF37', marginRight: 8 }} />
                uv-nv@mail.ru
            </div>
            <div className="contact-item" style={{ marginTop: '1.5rem' }}>
                <a href="https://vk.com/club" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <Icon24LogoVk style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                    Мы ВКонтакте
                </a>
            </div>
            <div className="contact-item" style={{ marginTop: '1rem' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setActivePanel('privacy'); }} className="contact-link" style={{ fontSize: '0.9rem', color: '#aaa', textDecoration: 'underline' }}>
                    Политика конфиденциальности
                </a>
            </div>
        </div>
    </footer>
);

export default App;
