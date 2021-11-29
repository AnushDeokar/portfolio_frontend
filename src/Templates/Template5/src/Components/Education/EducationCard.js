import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GradeIcon from "@mui/icons-material/Grade";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const useStyles = makeStyles({
  projectsCard: {
    // padding: "20px",
    backgroundColor: "white",
    margin: "15px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    textAlign: "left",
    padding: "20px",
  },
});

export const EducationCard = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.projectsCard}>
      <Grid container>
        <Grid key = {data.id} item xs={12} md={6} lg={6}>
          {data.name !== "NULL" && (
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                color: "rbg(43, 43, 43)",
                marginBottom: "25px",
              }}
            >
              {data.name}
            </Typography>
          )}
          <div style={{ display: "flex" }}>
            {data.brief !== "NULL" && (
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginRight: "30px" }}
              >
                {data.brief}
              </Typography>
            )}
            {!(data.start === "NULL" || data.end === "NULL") && (
              <Typography
                variant="body2"
                style={{
                  padding: "3px 10px",
                  backgroundColor: "#FFB400",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                {data.start}-{data.end}
              </Typography>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {data.description !== "NULL" && (
            <Typography
              variant="h5"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                color: "rbg(43, 43, 43)",
                marginBottom: "25px",
              }}
            >
              {data.description}
            </Typography>
          )}
          {/* {data.location != "NULL" && (
            <div style={{ margin: "0px 5px 8px -8px", display: "flex" }}>
              <LocationOnIcon color="primary" fontSize={"small"} />
              <Typography variant="body2">{data.location}</Typography>
            </div>
          )}
          {data.cgpa !== "NULL" && (
            <div style={{ margin: "8px 5px 8px -8px", display: "flex" }}>
              <GradeIcon color="primary" fontSize={"small"} />
              <Typography variant="body2" style={{ fontSize: "13px" }}>
                CGPA: {data.cgpa}
              </Typography>
            </div>
          )}
          {data.percentage !== "NULL" && (
            <div style={{ margin: "8px 5px 8px -8px", display: "flex" }}>
            <GradeIcon color="primary" fontSize={"small"} />
            <Typography variant="body2" style={{ fontSize: "13px" }}>
              Percentage: {data.percentage}
            </Typography>
          </div>
          )}

          {data.board !== "NULL" && (
            <div style={{ margin: "8px 5px 8px -8px", display: "flex" }}>
              <AccountBalanceIcon color="primary" fontSize={"small"} />
              <Typography variant="body2" style={{ fontSize: "13px" }}>
                {data.board}
              </Typography>
            </div>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
};
