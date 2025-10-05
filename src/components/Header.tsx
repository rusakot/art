import { headerData } from "../data/headerData";
export default function Header() {
  return (
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
  );
}
