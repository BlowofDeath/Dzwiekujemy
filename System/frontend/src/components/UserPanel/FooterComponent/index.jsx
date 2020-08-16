import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";

const FooterComponent = (props) => {
  return (
    <Col className="footer text-center">
      Copyright &copy; Tomasz Jabłoński <br />
      tjablonski@codeinq.pl
    </Col>
  );
};

export default FooterComponent;
