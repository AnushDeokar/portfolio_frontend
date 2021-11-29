import { Container, Grid } from "@material-ui/core";
import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import ReactMapGL from "react-map-gl";

const accessToken =
  "pk.eyJ1IjoiYXJ5YW4wMTQxIiwiYSI6ImNrdXRnbTl1dDBqeDIyb28wbjlzaHM4YWYifQ.n3bpmHXkeoxiYdIYExYECw";

export const Contact = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
    width: "95%",
    height: "500px",
  });

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ContactInfo />
        </Grid>
      </Grid>
      <Container>
        <ReactMapGL
          style={{ margin: "50px auto" }}
          mapStyle={"mapbox://styles/mapbox/streets-v11"}
          mapboxApiAccessToken={accessToken}
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        ></ReactMapGL>
      </Container>
    </div>
  );
};
