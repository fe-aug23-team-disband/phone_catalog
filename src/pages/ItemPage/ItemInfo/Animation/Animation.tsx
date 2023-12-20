import React, { useEffect } from "react";
import mentorImage from "../../../../static/ItemPageState/mentor.png";
import styles from "./Animation.module.scss";

export const Animation = () => {
  useEffect(() => {
    const main = document.querySelector<HTMLDivElement>(".animation__wrapper");
    const ball = document.querySelector<HTMLImageElement>(".animation__wrapper-img");

    if (!main || !ball) {
      return;
    }

    let leftright = Math.floor(Math.random() * 2);
    let right = leftright ? true : false;

    let updown = Math.floor(Math.random() * 2);
    let up = updown ? true : false;
    const velocity = 3;

    const ballMove = setInterval(() => {
      const ballBounds = ball.getBoundingClientRect();
      const boardBounds = main.getBoundingClientRect();

      if (right && up) {
        ball.style.top = ballBounds.top - velocity + "px";
        ball.style.left = ballBounds.left + velocity + "px";
      }

      if (!right && up) {
        ball.style.top = ballBounds.top - velocity + "px";
        ball.style.left = ballBounds.left - velocity + "px";
      }

      if (right && !up) {
        ball.style.top = ballBounds.top + velocity + "px";
        ball.style.left = ballBounds.left + velocity + "px";
      }

      if (!right && !up) {
        ball.style.top = ballBounds.top + velocity + "px";
        ball.style.left = ballBounds.left - velocity + "px";
      }

      if (ballBounds.top <= boardBounds.top) {
        leftright = Math.floor(Math.random() * 2);
        right = leftright ? true : false;

        up = false;
      }

      if (ballBounds.bottom >= boardBounds.bottom) {
        leftright = Math.floor(Math.random() * 2);
        right = leftright ? true : false;

        up = true;
      }

      if (ballBounds.right >= boardBounds.right) {
        right = false;
        updown = Math.floor(Math.random() * 2);
        up = updown ? true : false;
      }

      if (ballBounds.left <= boardBounds.left) {
        right = true;
        updown = Math.floor(Math.random() * 2);
        up = updown ? true : false;
      }
    }, 70);

    return () => clearInterval(ballMove);
  }, []);

  return (
    <div className={styles.animation}>
      <div className={styles.animation__wrapper}>
        <img
          src={mentorImage}
          alt="Error"
          className={styles["animation__wrapper-img"]}
        />
      </div>
    </div>
  );
};
