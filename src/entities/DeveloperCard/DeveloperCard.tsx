import { Developer } from "../../types/Developer";
import styles from "./DeveloperCard.module.scss";

import GithubIcon_Light from "../../static/Icons/github.png";
import EmailIcon_Light from "../../static/Icons/email.png";
import TelegramIcon_Light from "../../static/Icons/telegram.png";
import LinkedInIcon_Light from "../../static/Icons/linkedin.png";

import GithubIcon from "../../static/Icons/github_d.png";
import EmailIcon from "../../static/Icons/email_d.png";
import TelegramIcon from "../../static/Icons/telegram_d.png";
import LinkedInIcon from "../../static/Icons/linkedin_d.png";
import { useContext } from "react";
import { ThemeContext } from "../../app/providers/ThemeProvider";

interface Props {
  developer: Developer
}

export const DeveloperCard: React.FC<Props> = ({ developer }) => {
  const { theme } = useContext(ThemeContext);

  const {
    name,
    avatar,
    role,
    linkedin,
    email,
    github,
    telegram
  } = developer;

  return (
    <div className={styles.card}>
      <div className={styles.card_info__wrapper}>
        <img className={styles.card_image} src={avatar} alt={`${name}'s avatar`} />
        <div className={styles.card_info}>
          <h2>{name}</h2>
          <p>{role}</p>
          <div className={styles.card__icons__wrapper}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <img
                src={theme === "light" ? LinkedInIcon_Light : LinkedInIcon}
                alt="linkedin icon"
                className={styles.card__icon}
              />
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <img
                src={theme === "light" ? EmailIcon_Light : EmailIcon}
                alt="email icon"
                className={styles.card__icon}
              />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <img
                src={theme === "light" ? GithubIcon_Light : GithubIcon}
                alt="aithub icon"
                className={styles.card__icon}
              />
            </a>
            <a href={telegram} target="_blank" rel="noreferrer">
              <img
                src={theme === "light" ? TelegramIcon_Light : TelegramIcon}
                alt="telegram icon"
                className={styles.card__icon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
