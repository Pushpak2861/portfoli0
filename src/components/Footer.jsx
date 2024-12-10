import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/Pushpak2861"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Pushpak Raj
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
          I have not failed. I've just found 10,000 ways that won't work.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
