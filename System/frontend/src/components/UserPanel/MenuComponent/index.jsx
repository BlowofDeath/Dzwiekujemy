import React from "react";
import { Container, Carousel, Col, Table } from "react-bootstrap";
import useWindowDimensions from "./../../../hooks/useWindoDimensions";
import "./style.css";

const MenuComponent = (props) => {
  const { width } = useWindowDimensions();
  return (
    <Col lg={8}>
      <h2 id="Menu">Menu</h2>
      <Container fluid>
        <Carousel
          indicators={true}
          controls={width > 768 ? true : false}
          interval={null}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon d-md-inline-block"
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon d-md-inline-block"
            />
          }
          className="carousel-menu"
        >
          <Carousel.Item className="h-100 menu">
            <div class="carousel-item active">
              <h3>Poniedziałek</h3>
              <Table className="menu">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Potrawa</th>
                    <th>Cena</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <div class="carousel-item active">
              <h3>Wtorek</h3>
              <Table hover className="menu">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Potrawa</th>
                    <th>Cena</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Schabowy z ziemniakami <br />
                      <i>Do tego surówka z marchwi</i>
                    </td>
                    <td>18 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Barscz ukraiński</td>
                    <td>10zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Burger wołowy</td>
                    <td>16 zł</td>
                    <td>Dodaj do koszyka</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Col>
  );
};

export default MenuComponent;
