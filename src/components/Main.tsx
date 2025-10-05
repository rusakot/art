import { mainData } from "../data/mainData";
export default function Main() {
  return (
    <div className="content">
      <main className="main">
        {mainData.map((el) => (
          <section key={el.id} className="section">
            <h2 className="section__title">{el.title}</h2>
            <div className="section__content">
              <p>{el.content}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
