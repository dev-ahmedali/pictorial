import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/images/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Better design for your digital products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sequi atque ad aliquid fugiat quaerat!
        </p>
      </div>
      <button>See Our Work</button>
      <div className={styles.item}></div>
      <Image src={hero} alt="hero section" className={styles.heroImg} />
    </div>
  );
}
