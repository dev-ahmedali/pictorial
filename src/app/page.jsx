import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/images/hero.png";
import Button from "../components/button/Button";

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
        <Button url="/portfolio" text="See Our Work"/>
        <button className={styles.button}></button>
      </div>

      <div className={styles.item}>
        <Image src={hero} alt="hero section" className={styles.heroImg} />
      </div>
    </div>
  );
}
