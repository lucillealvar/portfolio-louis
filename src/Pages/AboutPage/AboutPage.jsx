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
            I always wanted to work in the Video Game Industry, and I felt more
            comfortable in creating them. I decided to write a new
            chapter of my life and study Game Design after a Business school and
            a degree in Digital Marketing.{" "}
          </p>
          <p>
            After my graduation as Valedictorian in Game Design at Isart Digital
            Montreal and the success of our graduation game, Blood Spear (PC,
            Steam), I worked as Designer on games like Dead Matter (PC, Steam),
            the famous Dead by Daylight and currently on an unannounced but
            famous brand project for Bandai Namco at Reflector Entertainment.
          </p>
          <h3>What I can bring to a team</h3>
          <p>
            I have a solid knowledge of design processes, from high level
            (emergence of the pitch, main pillars, target audience, etc.) to
            details (pacing, golden path, gameplay loops, in-engine
            implementation, etc.).{" "}
          </p>
          <p>
            Besides Design, I also have technical skills with engines and Unreal
            became my greatest crafting tool. I love building gameplay
            ingredients or tools for my fellow Level Designers.{" "}
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
          <h3>What I am looking for</h3>
          <p>
            Be part of a crew of people I admire and are as good professionals
            as human beings. I am a true believer that success is done by
            passionate individuals that want to make something special together.
          </p>
          <p>
            Other than video games, I like cooking, coffee, my cat Sidoy,
            roleplay games, electronic music, board games, and barbecues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
