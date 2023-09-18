export default function Projects() {
  return (
    <div class="container">
      <div class="row no-gutters" style={{ display: "flex", gap: "3rem" }}>
        <div className="col project-item">
          <img src="" alt=""></img>
          <h4>JapTube</h4>
          <p>
            Website learning Japanese by films providing subtitles
            and translation. Users can also cut short
            videos and save to their playlists.
          </p>
          <div className="btn">View</div>
        </div>
        <div className="col project-item">
          <img src="" alt=""></img>
          <h4>Meow Blog</h4>
          <p>
            Meow Blog allows users to post their blog with utils to help writing
            blogs; Authors also can CRUD their owns blogs, search or read other
            blogs;
          </p>
          <div className="btn">View</div>
        </div>
        <div className="col project-item">
          <img src="" alt=""></img>
          <h4>To-do-list App</h4>
          <p>
            To-Do App that build will allow a user to add a task to a list of
            to-do items. Once the task is added, the user will be able to delete
            it as completed once it has done.
          </p>
          <div className="btn">View</div>
        </div>
      </div>
    </div>
  );
}
