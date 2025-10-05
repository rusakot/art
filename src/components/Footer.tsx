import { footerData } from "../data/footerData";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg"; // Исправленный импорт

export default function Footer() {
  return (
    <footer className="footer">
      {footerData.map((el, index) =>
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
      <div className="footer-tech">
        <h3 className="footer-tech__title">Vite + React</h3>
        <a
          className="footer-tech__link"
          href="https://vite.dev"
          target="_blank"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          className="footer-tech__link"
          href="https://react.dev"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </footer>
  );
}
