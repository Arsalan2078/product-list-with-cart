import css from "./App.module.scss";

export default function App() {
  return (
    <div className={`${css.app} text-preset--3`}>
      <div className={`${css.grid}`}>
        <header>
          <h1 className="text-preset--1">Desserts</h1>
        </header>

        <main>Main</main>

        <aside>Aside</aside>
      </div>
    </div>
  );
}
