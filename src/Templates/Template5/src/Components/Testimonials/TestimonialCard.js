import { makeStyles } from "@material-ui/styles";
import {

  Card,
  CardContent,
  CardHeader,

  Typography,
  CardActionArea,
  CardActions
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


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

export const TestimonialCard = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const data = props.data;
  return (
    // <Container>
    <div className="carousel-cell">
      <Card elevation={1} style={{ margin: "15px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",}}>
        <CardActionArea onClick = {()=> history.push("/course") }>
          <CardHeader
            // className={classes.title}
            align={"left"}
            title={data.name}
            subheader={data.code}
            // avatar={<Avatar className={classes.avatarImg} />}
          ></CardHeader>
          <CardContent>
            <Typography align={"left"} variant="body2" color="textSecondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.root}>

                      <Button size="small">
                          <Link  to="/#" href={data.meet} style={{ textDecoration: 'none' }}>
                              Meet
                          </Link>    
                      </Button>
                          
                      <Button size="small">
                          <Link  to="/#" href={data.classroom} style={{ textDecoration: 'none' }}>
                              classroom
                          </Link>
                          </Button>
                  </CardActions>
      </Card>
    </div>
    // </Container>
  );
};
