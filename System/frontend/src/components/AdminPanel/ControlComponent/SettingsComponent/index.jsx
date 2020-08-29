import React, { useState, useEffect } from "react";
import "./style.css";
import { Form, Col, Button } from "react-bootstrap";
import { PAGE_SETTINGS } from "./gql/gqlQueries";
import { UPDATE_PAGE_SETTINGS } from "./gql/gqlMutations";
import { useQuery, useMutation } from "@apollo/client";

const SettingsComponent = (props) => {
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [dayOfWeekStatus, setDayOfWeekStatus] = useState(1);
  const {
    loading: loadingPageSettings,
    error: errorPageSettings,
    data: dataPageSettings,
  } = useQuery(PAGE_SETTINGS);

  const [
    updatePageSettings,
    { data, loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_PAGE_SETTINGS);
  if (mutationError) console.log(mutationError);

  useEffect(() => {
    if (!loadingPageSettings && dataPageSettings) {
      setOnlineStatus(dataPageSettings.pageSettings.online);
      setDayOfWeekStatus(dataPageSettings.pageSettings.dayOfWeek);
    }
  }, [dataPageSettings, loadingPageSettings]);

  if (errorPageSettings || loadingPageSettings) return null;

  const updateDayOfWeek = (event) => {
    const day = parseInt(event.target.value);
    setDayOfWeekStatus(day);

    updatePageSettings({
      variables: {
        online: onlineStatus,
        dayOfWeek: parseInt(day),
      },
    });
  };

  const updateOnline = () => {
    setOnlineStatus(!onlineStatus);

    updatePageSettings({
      variables: {
        online: !onlineStatus,
        dayOfWeek: dayOfWeekStatus,
      },
    });
  };

  return (
    <Col lg={3}>
      <h2>Ustawienia</h2>
      <Form>
        <Form.Group controlId="Control.day">
          <Form.Label>Dzień</Form.Label>
          <Form.Control
            as="select"
            defaultValue={dataPageSettings.pageSettings.dayOfWeek}
            onChange={(e) => updateDayOfWeek(e)}
          >
            <option value="1">Poniedziałek</option>
            <option value="2">Wtorek</option>
            <option value="3">Środa</option>
            <option value="4">Czwartek</option>
            <option value="5">Piątek</option>
            <option value="6">Sobota</option>
            <option value="7">Niedziela</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Control.orderStatus">
          <Form.Label>
            Zamówienia online:{" "}
            <span
              className={onlineStatus ? "order-status-on" : "order-status-off"}
            >
              {onlineStatus ? "Włączone" : "Wyłączone"}
            </span>
          </Form.Label>
          <br />
          <Button
            variant={!onlineStatus ? "success" : "danger"}
            onClick={() => updateOnline()}
          >
            {!onlineStatus ? "Włącz" : "Wyłącz"}
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default SettingsComponent;
