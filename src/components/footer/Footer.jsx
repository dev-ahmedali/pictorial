import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Pictorial, All rights reserved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/../public/images/1.png"
          width={15}
          height={15}
          alt="pictorial Facebook"
        />
        <Image
          className={styles.icon}
          src="/../public/images/2.png"
          width={15}
          height={15}
          alt="pictorial Instagram"
        />
        <Image
          className={styles.icon}
          src="/../public/images/3.png"
          width={15}
          height={15}
          alt="pictorial Twitter"
        />
        <Image
          className={styles.icon}
          src="/../public/images/4.png"
          width={15}
          height={15}
          alt="pictorial Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
