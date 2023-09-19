import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="contact-content">
        <div className="contact-body">
          <h1>{t("Get In Touch")}</h1>
          <p>{t("contact-content")}</p>
          <div className="btn">{t("Say Hello")}</div>
        </div>

        <div className="contact-footer">
          <p>© Copyright 2023</p>
          <hr />
          <p>
            Designed & Built by <b>NguyenNguyen</b>
          </p>
        </div>
      </div>
    </div>
  );
}
