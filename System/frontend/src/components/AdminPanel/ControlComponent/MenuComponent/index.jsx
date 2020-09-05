import React, { useState, useEffect } from "react";
import "./style.css";
import { Col, Table, Form, Row, Button } from "react-bootstrap";
import { MEALS, MEAL_CATEGORIES } from "./gql/gqlQueries";
import { DELETE_MEAL } from "./gql/gqlMutations";

import { useQuery, useMutation } from "@apollo/client";

const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const MenuComponent = (props) => {
  const { handleEditData, editModalShow } = props;
  const {
    loading: loadingMeals,
    error: errorMeals,
    data: dataMeals,
    refetch,
  } = useQuery(MEALS);
  const {
    loading: loadingMealCategories,
    error: errorMealCategories,
    data: dataMealCategories,
  } = useQuery(MEAL_CATEGORIES);

  const [deleteMeal, { data: mealDeleteData }] = useMutation(DELETE_MEAL);

  useEffect(() => {
    refetch();
  }, [editModalShow, refetch, mealDeleteData]);

  const [dayOfWeek, setDayOfWeek] = useState(0);
  const [category, setCategory] = useState(0);

  if (errorMeals || errorMealCategories) return null;
  if (loadingMeals || loadingMealCategories) return null;

  const menu = dataMeals.meals;
  const categories = dataMealCategories.mealCategories;

  return (
    <Col lg={12}>
      <h2>Menu</h2>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button
            variant="primary"
            onClick={() =>
              handleEditData({
                id: null,
                description: null,
                dish: null,
                price: null,
                dayOfWeek: null,
                MealCategoryId: null,
              })
            }
          >
            Dodaj nowe danie
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Dzień tygodnia</Form.Label>
            <Form.Control
              as="select"
              defaultValue={dayOfWeek}
              onChange={(e) => setDayOfWeek(parseInt(e.target.value))}
            >
              <option value="0">Wszystkie</option>
              {days.map((day, index) => (
                <option key={index} value={index + 1}>
                  {day}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Kategoria</Form.Label>
            <Form.Control
              as="select"
              defaultValue={category}
              onChange={(e) => setCategory(parseInt(e.target.value))}
            >
              <option value="0">Wszystkie</option>
              {categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Danie</th>
            <th>Opis</th>
            <th>Kategoria</th>
            <th>Dzień</th>
            <th>Cena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menuItem, index) => {
            if (
              (parseInt(menuItem.MealCategoryId) === category ||
                category === 0) &&
              (menuItem.dayOfWeek === dayOfWeek || dayOfWeek === 0)
            )
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{menuItem.dish}</td>
                  <td>{menuItem.description}</td>
                  <td>{menuItem.category}</td>
                  <td>{days[menuItem.dayOfWeek - 1]}</td>
                  <td>{menuItem.price / 100} zł</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => handleEditData(menuItem)}
                    >
                      Edytuj
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() =>
                        window.confirm("Czy na pewno chcesz usunąć?")
                          ? deleteMeal({ variables: { id: menuItem.id } })
                          : null
                      }
                    >
                      Usuń
                    </Button>
                  </td>
                </tr>
              );
            else return null;
          })}
        </tbody>
      </Table>
    </Col>
  );
};

export default MenuComponent;
