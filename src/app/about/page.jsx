import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          className={styles.img}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
            vero ipsum autem tenetur fugit natus quisquam consequatur itaque
            neque delectus nulla numquam omnis incidunt, eius ex sint
            repellendus voluptatibus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
            vero ipsum autem tenetur fugit natus quisquam consequatur itaque
            neque delectus nulla numquam omnis incidunt, eius ex sint
            repellendus voluptatibus.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
            vero ipsum autem tenetur fugit natus quisquam consequatur itaque
            neque delectus nulla numquam omnis incidunt, eius ex sint
            repellendus voluptatibus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
            vero ipsum autem tenetur fugit natus quisquam consequatur itaque
            neque delectus nulla numquam omnis incidunt, eius ex sint
            repellendus voluptatibus.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
