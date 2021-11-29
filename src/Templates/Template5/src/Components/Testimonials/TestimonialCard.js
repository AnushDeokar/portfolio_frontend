import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const useStyles = makeStyles({
  title: {
    textAlign: "left",
  },
  avatarImg: {
    height: "60px",
    width: "60px",
    backgroundColor: blue[500],
  },
});

export const TestimonialCard = () => {
  const classes = useStyles();
  return (
    // <Container>
    <div className="carousel-cell">
      <Card elevation={1} style={{ margin: "15px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",}}>
        <CardHeader
          // className={classes.title}
          align={"left"}
          title={"Ayush Shukla"}
          subheader={"Senior Wordpress Developer"}
          avatar={<Avatar className={classes.avatarImg} />}
        ></CardHeader>
        <CardContent>
          <Typography align={"left"} variant="body2" color="textSecondary">
            He was a great team player and he do every task very effectively and
            before the deadline.
          </Typography>
        </CardContent>
      </Card>
    </div>
    // </Container>
  );
};
