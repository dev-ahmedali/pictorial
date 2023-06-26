import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/images/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sequi atque ad aliquid fugiat quaerat!
        </p>
        <button className={styles.button}>See Our Work</button>
      </div>

      <div className={styles.item}>
        <Image src={hero} alt="hero section" className={styles.heroImg} />
      </div>
    </div>
  );
}
