import React from "react";
import "./style.css";
import { Modal, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { UPDATE_MEAL_CATEGORY, ADD_MEAL_CATEGORY } from "./gql/gqlMutations";

const EditCategoryModalComponent = (props) => {
  const { handleSubmit, register, errors, watch } = useForm();
  const {
    editCategoryModalShow,
    editCategoryModalData,
    setEditCategoryModalShow,
  } = props;

  const [updateMealCategory] = useMutation(UPDATE_MEAL_CATEGORY, {
    getError: (err) => {
      alert("Błąd z aktualizacją kategorii");
    },
  });

  const [addMealCategory] = useMutation(ADD_MEAL_CATEGORY, {
    getError: (err) => {
      alert("Błąd z dodaniem kategorii");
    },
  });

  const onSubmit = (values) => {
    const { category, order } = values;
    const conf = window.confirm("Czy na pewno chcesz zapisać zmiany?");
    if (conf) {
      if (editCategoryModalData.id === null) {
        console.log("val", values);
        addMealCategory({
          variables: {
            category,
            order: parseInt(order),
          },
        });
      } else {
        updateMealCategory({
          variables: {
            id: editCategoryModalData.id,
            category,
            order: parseInt(order),
          },
        });
      }

      setEditCategoryModalShow(false);
    }
    console.log(values);
  };
  return (
    <Modal
      show={editCategoryModalShow}
      animation={false}
      onHide={() => setEditCategoryModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Kategoria</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nazwa</Form.Label>
            <Form.Control
              defaultValue={editCategoryModalData.category}
              name="category"
              ref={register({
                required: "Required",
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kolejność</Form.Label>
            <Form.Control
              defaultValue={editCategoryModalData.order}
              name="order"
              type="number"
              ref={register({
                required: "Required",
              })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setEditCategoryModalShow(false)}
          >
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

export default EditCategoryModalComponent;
