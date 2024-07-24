// --------------- import external dependencies ---------------
import React from "react";
import Image from "next/image";

// --------------- import interna dependencies -------------
import styles from "./style.module.css";

interface Props {
  img: string;
  name: string;
  type: string;
}

function UserDetail({ img, name, type }: Props) {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="User Avatar" className={styles.avatar} width={100} height={100} />
      <article>
        <span className={styles.username}>{name}</span>
        <span className={styles.type}>type: {type}</span>
      </article>
    </div>
  );
}

export default UserDetail;
