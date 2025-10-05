import { headerData } from "../data/headerData";
export default function Header() {
  return (
    <header className="header">
      <div className="header--block">
        <h1 className="header--title">Татьяна Русакова</h1>
        <nav className="header--nav">
          <ul className="header--nav__item">
            {headerData.map((el) => (
              <li key={el.id}>
                <a className="header--nav__btn">{el.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href="https://t.me/avokas_y" className="header--nav__btn tg">
        Связь
      </a>
    </header>
  );
}
