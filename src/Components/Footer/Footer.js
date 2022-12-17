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
            Keep
          </span>{" "}
          Notes
        </h2>
      </div>
      <div class="footer__social">
        <a href="https://github.com/yashika2406">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
      </div>
    </div>
  );
};
