import { Link } from "react-router-dom"

export default function Projects() {
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
          <p>
            Website learning Japanese by films providing subtitles and
            translation. Users can also cut short videos and save to their
            playlists.
          </p>
          <Link to="https://github.com/Nolongeruser9771/jabTube" target="_blank" className="btn">View</Link>
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
          <p>
            Meow Blog allows users to post their blog with utils to help writing
            blogs; Authors also can CRUD their owns blogs, search or read other
            blogs;
          </p>
          <Link to="https://github.com/Nolongeruser9771/meow-blog" target="_blank" className="btn">View</Link>
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
          <p>
            To-Do App that build will allow a user to add a task to a list of
            to-do items. Once the task is added, the user will be able to delete
            it as completed once it has done.
          </p>
          <Link to="https://github.com/Nolongeruser9771/to-do-app" target="_blank" className="btn">View</Link>
        </div>
      </div>
    </div>
  );
}
