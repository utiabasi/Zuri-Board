import './App.css';
import ProfileImg from '../src/img/profile__img.png';
import ZuriImg from '../src/img/Vector.png';
import I4G from '../src/img/I4G.png';
import SlackIcon from '../src/img/slack.png';
import GithubIcon from '../src/img/github.png';
import Data from './homeData.json';

function App() {
  return (
    <div className="home">
      <div className="inner">
        <div className="home__profile">
          <img 
            className="home__profile_img" id="profile__img"
            src={ProfileImg}
            alt={"Home Profile"}
          />
          <h3 className="home__profile_twitter" id="twitter">
            Annette Black
          </h3>
          <p className="home__profile_slack" id="slack">
            @utibearchibong
          </p>
        </div>
        <div className="home__links">
          {
            Data.map((item) => {
              return (
                <>
                  <div className="home__links_container">
                    <a 
                      key={item.id} 
                      id={item.id_style} 
                      href={item.link}
                      >  
                        {item.name}
                    </a>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="home__socials">
          <img src={SlackIcon} alt="Slack Icon" />
          <img src={GithubIcon} alt="Github Icon" />
        </div>
        <footer>
          <img src={ZuriImg} alt="Zuri Imgage" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="Ingresive For Good" />
        </footer>
      </div>
    </div>
  );
}

export default App;
