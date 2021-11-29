import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = (props) => {
  const Courses = props.data.courses;
  console.log(Courses, "c");
  return (
    <div>
      <Typography
        variant="h3"
        align={"center"}
        style={{ fontWeight: "600", padding: "50px", fontSize: "38px" }}
      >
        Courses
      </Typography>
      <Container>
        <Grid container>
          {Courses.map((data)=>(
          <Grid key={data.id} item xs={12} md={6} lg={4}>
            <TestimonialCard data={data} />
          </Grid>
          ))}
          

        </Grid>
      </Container>
    </div>
  );
};
