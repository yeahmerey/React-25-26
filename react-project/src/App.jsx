import "./App.css";

function App() {
  return (
    <div className="about_us_page">
      <h3 className="title_bg_small">About US</h3>
      <h2 className="welcome_text">
        Welcome to my React project, here are my social networks:
      </h2>

      <div className="social_buttons">
        <a
          href="https://github.com/yeahmerey/"
          target="_blank"
          className="btn btn_github"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/merey-kaliyev-27b3a42a1/"
          target="_blank"
          className="btn btn_linkedin"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/yeahmerey/React-25-26"
          target="_blank"
          className="btn btn_repo"
        >
          My Project Repo
        </a>
      </div>

      <div>
        <h2>Some info : </h2>
      </div>
      <div className="carousel">
        <input type="radio" name="year" id="year_2006" defaultChecked />
        <input type="radio" name="year" id="year_2012" />
        <input type="radio" name="year" id="year_2023" />

        <div className="slides">
          <div className="slide slide_2006">
            <img
              src="https://i-a.d-cd.net/DrR_JnrUHBke6zTQdKf5X4DDM6U-1920.jpg"
              alt="2006"
            />
            <div className="slide_content">
              <p className="slide_year">2006</p>
              <h4>Was born</h4>
              <p>The beginning of life</p>
            </div>
          </div>

          <div className="slide slide_2012">
            <img
              src="https://pitoka.ru/wp-content/uploads/2025/03/prikolnye-kartinki-pro-shkolu-39.jpg"
              alt="2012"
            />
            <div className="slide_content">
              <p className="slide_year">2012</p>
              <h4>First class in school</h4>
              <p>Start of school time</p>
            </div>
          </div>

          <div className="slide slide_2023">
            <img
              src="https://avatars.mds.yandex.net/i?id=ba8e3e4bd1e426f99bad83de53c2f26343039329-16442799-images-thumbs&n=13"
              alt="2023"
            />
            <div className="slide_content">
              <p className="slide_year">2023</p>
              <h4>KBTU</h4>
              <p>Kbtu life</p>
            </div>
          </div>
        </div>

        <div className="carousel_indicators">
          <label htmlFor="year_2006">2006</label>
          <label htmlFor="year_2012">2012</label>
          <label htmlFor="year_2023">2023</label>
        </div>
      </div>
    </div>
  );
}

export default App;
