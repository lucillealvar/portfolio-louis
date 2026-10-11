import "./Opening.scss";

function Opening() {
  return (
    <div className="opening">
      <h2>
        I design gameplay systems and interactions, wrapped in great narrative.
      </h2>
      <p>
        6+ years in the game industry, working with Unreal Engine and Blueprints
        on live-service, early-access and unannounced titles. Valedictorian of
        Isart Digital Montréal, 2021.
      </p>
      <div className="opening-buttons">
        <a
          className="opening-button opening-button_primary"
          href={process.env.PUBLIC_URL + "/Resume_LouisLanglet-compressed.pdf"}
          rel="noreferrer"
          target="_blank"
        >
          Download resume
        </a>
        <a className="opening-button" href="#projects">
          See my work
        </a>
      </div>
    </div>
  );
}

export default Opening;
