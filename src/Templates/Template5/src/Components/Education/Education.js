import { Typography } from "@mui/material";
import React from "react";
import { EducationCard } from "./EducationCard";

// const myEducation = [
//   {
//     name: "IIT Jodhpur",
//     degree: "Bachelor's of Technology",
//     branch: "Computer Science",
//     location: "Jodhpur, Rajasthan",
//     from: "July 2019",
//     to: "May 2023",
//     board: "Institute of National Importance",
//     cgpa: "7.63",
//     percentage: "NULL",
//   },
//   {
//     name: "Minarva Se. Sec. School",
//     degree: "Secondary Education",
//     branch: "Science-Maths",
//     location: "Bharatpur, Rajasthan",
//     from: "April 2017",
//     to: "March 2019",
//     board: "Rajasthan Board of Secondary Education",
//     cgpa: "NULL",
//     percentage: "10",
//   },
//   {
//     name: "DAV Centenary Public School",
//     degree: "High School",
//     branch: "Basic Subjects",
//     location: "Indore, Rajasthan",
//     from: "April 2008",
//     to: "March 2017",
//     board: "Central Board of Secondary Education",
//     cgpa: "7.43",
//     percentage: "NULL",
//   },
// ]

export const Education = (props) => {
  const myEducation = props.data.education;
  console.log(myEducation);
  return (
    <div>
      <Typography style={{textAlign: "center", margin: "0px"}} variant="h4">Education</Typography>
      {myEducation.map((data) => (
        <EducationCard key = {data.id} data={data} />
      ))}
    </div>
  );
};
