import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "No pierdas tiempo",
    Svg: require("@site/static/img/undraw_compose_music_re_wpiw.svg").default,
    description: (
      <>
        Mordente te permitirá ahorrar tiempo en la gestión de tu agrupación
        musical. Dedícate a lo que realmente importa: la música.
      </>
    ),
  },
  {
    title: "Fácil de usar",
    Svg: require("@site/static/img/undraw_share_opinion_re_4qk7.svg").default,
    description: (
      <>
        Usa Mordente desde Telegram. No necesitas instalar nada más. ¿Sabes usar
        un chat de Telegram? ¡Ya estás listo!
      </>
    ),
  },
  {
    title: "Personalízalo a tu gusto",
    Svg: require("@site/static/img/undraw_switches_1js3.svg").default,
    description: (
      <>
        Mordente es un proyecto de código abierto. Siéntete libre de modificarlo
        a tu gusto y compartirlo con el resto de la comunidad.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
