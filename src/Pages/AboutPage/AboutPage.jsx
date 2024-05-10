import "./AboutPage.scss";
import User from "../../assets/User-img.jpg";

function AboutPage() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-description">
        <div className="img">
          <img src={User} alt={User} />
        </div>
        <div className="about-description_details">
          <h3>Hi!</h3>
          <p>
            After a
            degree in Digital Marketing and a Business school, I had some
            experience as Community Manager for a Freelances Recruitment
            company. I always wanted to work in the Video Game Industry, but I
            felt more comfortable in creating them instead, so I decided to
            write a new chapter of my life and study Game Design.
          </p>
          <p>
            I succeeded in my studies and was Valedictorian in Game
            Design at Isart Digital Montreal. After the success of our
            graduation game, Blood Spear (PC, Steam), I was hired as a Game
            Design and Unity teacher by Studio XP. After a couple of months, I
            was able to get a Gameplay System Designer role at Quantum Integrity
            Inc. for the game Dead Matter (PC, Steam).
          </p>
          <h3>Who am I?</h3>
          <p>
            Thanks to my studies, I have a solid knowledge of design processes,
            from the high level (emergence of the pitch, main pillars, target
            audience, etc.) to design (pacing, golden path, gameplay loops,
            in-engine implementation, etc.).
          </p>
          <p>
            My skills and experiences allow me to identify production problems
            that can arise on a project, particularly in terms of communication,
            scope, and resource management.
          </p>
          <p>
            On a personal level, my passion for teamwork strives to be
            empathetic and serve those I work with to help us all achieve
            greatness. I am also always looking for feedback and tips that can
            continue to help me grow.
          </p>
          <p>
            If you want to know more about how I behave at work, my coworkers
            will probably tell you that I am smiling and having fun. I am also
            known to be a driving force, allowing a project to go forward.
          </p>
          <p>
            My dream is one day to create a crew with people I admire and are as
            good professionals as human beings. Other than video games, I like
            cooking, coffee, my cat Sidoy, roleplay games, electronic music,
            board games, and barbecues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
