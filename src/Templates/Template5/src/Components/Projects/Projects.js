import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

// var myProjects = [
//   {
//     category: "Web Projects",
//     projects: [
//       {
//         name: "IoT Web Portal",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "HTML, CSS, Javascript, NodeJS, MongoDB",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Music Beats",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "HTML, CSS, Javascript, Django, SQLite",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Kaizen 2.0",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "ReactJS, MaterialUI",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Kaizen Todo",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "HTML, CSS, Javascript",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//     ],
//   },
//   {
//     category: "Machine Learning Projects",
//     projects: [
//       {
//         name: "Object Detector",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "YOLOv5, CNN",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Corona X-Ray Predictor",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "CNN, Keras",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Wine Quality Testor",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "Keras, Django, HTML, CSS",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Cifar-10 Classification",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "Keras, CNN",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//     ],
//   },
//   {
//     category: "Electronics  Projects",
//     projects: [
//       {
//         name: "Smart Street Light",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "YOLOv5, CNN",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Terrace Farming Robot",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "CNN, Keras",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "Smart Agriculture",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "Keras, Django, HTML, CSS",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//       {
//         name: "IoT Smart Sensors",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "Keras, CNN",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//     ],
//   },
//   {
//     category: "Gaming Projects",
//     projects: [
//       {
//         name: "Dog Run",
//         date: "21st Sept 2021",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla velit laborum incidunt quibusdam libero perspiciatis blanditiis. Tempora veritatis expedita dolorum aperiam consequuntur.",
//         techStack: "YOLOv5, CNN",
//         img: "imgPath.jpg",
//         githubLink: "https://github.com",
//         deployedLink: "www.google.co.in",
//       },
//     ],
//   },
// ];

export const Projects = (props) => {
  const myProjects = props.data.projects;
  console.log(myProjects);
  return (
    <div>
      <Typography variant="h3" align={"center"} style={{fontWeight: "600", paddingTop: "60px", fontSize: "38px"}}>
        Projects
      </Typography>
      <Grid container spacing={3} style={{marginTop:"30px"}}>
      {myProjects.map((data) => (
        
          
        <Grid key={data.id} item sm={12} xs={12} md={4} lg={4}>
              <ProjectCard data={data} />
          </Grid>
      
      ))}
      </Grid>
    </div>
  );
};
