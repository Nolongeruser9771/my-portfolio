import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div class="container">
      <div class="row no-gutters" style={{ display: "flex", gap: "3rem" }}>
        <div className="col project-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/mx54_HlXzY0?si=fdWYLu0qingPTwWx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h4>JapTube</h4>
          <p>{t("jabtube-description")}</p>
          <Link
            to="https://github.com/Nolongeruser9771/jabTube"
            target="_blank"
            className="btn"
          >
            {t("View")}
          </Link>
        </div>

        <div className="col project-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/M8p1tMl4B3k?si=YZSEV-GUiYFpVIz-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h4>Meow Blog</h4>
          <p>{t("blog-description")}</p>
          <Link
            to="https://github.com/Nolongeruser9771/meow-blog"
            target="_blank"
            className="btn"
          >
            {t("View")}
          </Link>
        </div>

        <div className="col project-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rSpNt5cDOug?si=l7bYnm9NAO6a1onA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h4>To-do-list App</h4>
          <p>{t("to-do-app-description")}</p>
          <Link
            to="https://github.com/Nolongeruser9771/to-do-app"
            target="_blank"
            className="btn"
          >
            {t("View")}
          </Link>
        </div>
      </div>
    </div>
  );
}
