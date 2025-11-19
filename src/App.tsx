import css from "./App.module.scss";
import useFetch from "./hooks/useFetch";
import type { ProductProps } from "./types";

export default function App() {
  const { data: products } = useFetch<ProductProps[] | null>("src/data.json");

  console.log(products);

  return (
    <div className={`${css.app} text-preset--3`}>
      <div className={`${css.grid}`}>
        <header>
          <h1 className="text-preset--1">Desserts</h1>
        </header>

        <main>
          {products && (
            <ul>
              {products.map(({ image, name, category, price }) => (
                <li key={name}>
                  <picture>
                    <source
                      srcSet={image.desktop}
                      media="(min-width: calc(1264 / 16 * 1rem))"
                    />
                    <source
                      srcSet={image.tablet}
                      media="(min-width: calc(768 / 16 * 1rem))"
                    />
                    <img src={image.mobile} alt="" />
                  </picture>

                  <div className="text-preset--4">{name}</div>
                  <div className="text-preset--3-semibold">{category}</div>
                  <div className="text-preset--3">{price}</div>
                </li>
              ))}
            </ul>
          )}
        </main>

        <aside>
          <h2 className="text-preset--2">Your Cart (0)</h2>
          <p className="text-preset--4-semibold">
            Your added items will appear here
          </p>
        </aside>
      </div>
    </div>
  );
}
