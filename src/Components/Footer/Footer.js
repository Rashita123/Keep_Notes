import "./footer.css";
export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__intro">
        <h2>
          <span
            style={{
              background: "#ffae19",
              color: "white",
              padding: "0.25rem 0.5rem"
            }}
          >
            Rashita
          </span>{" "}
          Mehta
        </h2>
      </div>
      <div class="footer__social">
        <a href="https://github.com/Rashita123">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/rashita-mehta-350346197">
          <img src="https://img.icons8.com/material-two-tone/48/000000/linkedin--v1.png" />
        </a>
        <a href="https://twitter.com/rashitamehta">
          <img src="https://img.icons8.com/material-two-tone/48/000000/twitter.png" />
        </a>
      </div>
    </div>
  );
};
