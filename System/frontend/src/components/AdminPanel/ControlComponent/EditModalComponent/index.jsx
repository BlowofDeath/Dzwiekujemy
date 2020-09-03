import React, { useEffect } from "react";
import "./style.css";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";

import { MEAL_CATEGORIES } from "./gql/gqlQueries";
import { UPDATE_MEAL, ADD_MEAL } from "./gql/gqlMutations";

import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const EditModalComponent = (props) => {
  const { handleSubmit, register, errors, watch } = useForm();
  const { editModalShow, setEditModalShow, editModalData } = props;
  const {
    loading: loadingMealCategories,
    error: errorMealCategories,
    data: dataMealCategories,
  } = useQuery(MEAL_CATEGORIES);

  const [updateMeal] = useMutation(UPDATE_MEAL, {
    getError: (err) => {
      alert("Wystąpił problem z edycją potrawy");
    },
  });

  const [addMeal] = useMutation(ADD_MEAL, {
    getError: (err) => {
      alert("Wystąpił problem z dodanią nowej potrawy");
    },
  });

  if (errorMealCategories) return null;
  if (loadingMealCategories) return null;
  const categories = dataMealCategories.mealCategories;

  const onSubmit = (values) => {
    const { dish, price, MealCategoryId, description, dayOfWeek } = values;
    const conf = window.confirm("Czy na pewno chcesz zapisać zmiany?");
    if (conf) {
      if (editModalData.id === null) {
        addMeal({
          variables: {
            dish,
            price: Math.round(price * 100),
            MealCategoryId,
            description,
            dayOfWeek: parseInt(dayOfWeek),
          },
        });
      } else {
        updateMeal({
          variables: {
            id: editModalData.id,
            dish,
            price: Math.round(price * 100),
            MealCategoryId,
            description,
            dayOfWeek: parseInt(dayOfWeek),
          },
        });
      }
      setEditModalShow(false);

      // window.location.reload(false);
    }
  };

  return (
    <Modal
      show={editModalShow}
      animation={false}
      onHide={() => setEditModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Produkt</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Danie</Form.Label>
            <Form.Control
              defaultValue={editModalData.dish}
              name="dish"
              ref={register({
                required: "Required",
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Opis</Form.Label>
            <Form.Control
              as="textarea"
              style={{ resize: "none" }}
              defaultValue={editModalData.description}
              name="description"
              ref={register()}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kategoria</Form.Label>
            <Form.Control
              as="select"
              defaultValue={editModalData.MealCategoryId}
              name="MealCategoryId"
              ref={register({
                required: "Required",
              })}
            >
              {categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dzień</Form.Label>
            <Form.Control
              as="select"
              defaultValue={editModalData.dayOfWeek}
              name="dayOfWeek"
              ref={register({
                required: "Required",
              })}
            >
              {days.map((day, index) => (
                <option key={index} value={index + 1}>
                  {day}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Cena</Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text>zł</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                defaultValue={editModalData.price / 100}
                step=".01"
                name="price"
                ref={register({
                  required: "Required",
                })}
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Zamknij
          </Button>
          <Button variant="primary" type="submit">
            Zapisz
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditModalComponent;
