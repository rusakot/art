//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

const headerData = [
  { title: "Об авторе" },
  { title: "Работы" },
  { title: "Контакты" },
];

const dataSections = [
  { title: "Об авторе", content: "Информация" },
  { title: "Работы", content: "Примеры работ и проектов" },
  {
    title: "Контакты",
    content: "Контактная информация и форма обратной связия",
  },
];
const dataFooter = [
  { title: "Футер", content: "Татьяна Русакова. Все права защищены." },
];

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">Татьяна Русакова</h1>
          <nav className="navigation">
            <ul className="nav-list">
              {headerData.map((el, index) => (
                <li key={index}>
                  <a className="nav-button">{el.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <a href="https://t.me/avokas_y" className="nav-button tg">
          Связь
        </a>
      </header>
      <div className="content">
        <main className="main">
          {dataSections.map((el, index) => (
            <section key={index} className="section">
              <h2 className="section__title">{el.title}</h2>
              <div className="section__content">
                <p>{el.content}</p>
              </div>
            </section>
          ))}
        </main>
      </div>
      <footer className="footer">
        {dataFooter.map((el, index) =>
          index === 0 ? (
            <p key={index} id="footer__par">
              <span>{new Date().getFullYear()}</span> &copy; {el.content}
            </p>
          ) : (
            <p key={index} id="footer__par">
              {el.content}
            </p>
          )
        )}
      </footer>
      <h3>Vite + React</h3>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
