import { FC } from "react";

import "../scss/section/contactblock.scss";
import { useTranslation } from "react-i18next";
import email from "../assets/svg/email.svg";
import discord from "../assets/svg/discord.svg";

export const ContactBlock: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contact__wrap">
      <p className="contact__wrap-text">{t("wrap")}</p>
      <div className="contact__wrap-box">
        <h5 className="contact__box-title">{t("masse")}</h5>
        <a
          className="contact__box-link"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discord} alt="discord" />
          <p>wileplc</p>
        </a>
        <a
          className="contact__box-link"
          href="mailto:dmitrukadrian@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="email" />
          <p>dmitrukadrian@gmail.com</p>
        </a>
      </div>
    </div>
  );
};
