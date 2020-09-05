import React, { useEffect } from "react";
import "./style.css";

import { useQuery, useMutation } from "@apollo/client";
import { MEAL_CATEGORIES } from "./gql/gqlQueries";
import { DELETE_MEAL_CATEGORY } from "./gql/gqlMutations";
import { Col, Table, Button, Row } from "react-bootstrap";

const CategoryComponent = (props) => {
  const { handleEditCategoryData, editCategoryModalShow } = props;
  const {
    data: dataMealCategories,
    error: errorMealCategories,
    loading: loadingMealCategories,
    refetch,
  } = useQuery(MEAL_CATEGORIES);

  const [deleteMealCategory, { data: mealCategoryDeleteData }] = useMutation(
    DELETE_MEAL_CATEGORY
  );

  useEffect(() => {
    refetch();
    console.log("refetch");
  }, [editCategoryModalShow, refetch, mealCategoryDeleteData]);

  if (errorMealCategories || loadingMealCategories) return null;

  const categories = dataMealCategories.mealCategories;

  return (
    <Col lg={4}>
      <h2>Kategorie</h2>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button
            variant="primary"
            className="add-new-category"
            onClick={() =>
              handleEditCategoryData({
                id: null,
                category: null,
                order: 1,
              })
            }
          >
            Dodaj nową kategorię
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategoria</th>
            <th>Kolejność</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.category}</td>
              <td>{item.order}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleEditCategoryData(item)}
                >
                  Edytuj
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() =>
                    window.confirm("Czy na pewno chcesz usunąć?")
                      ? deleteMealCategory({ variables: { id: item.id } })
                      : null
                  }
                >
                  Usuń
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default CategoryComponent;
