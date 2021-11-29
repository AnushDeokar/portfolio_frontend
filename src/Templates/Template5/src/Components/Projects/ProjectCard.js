// import { makeStyles } from "@material-ui/styles";
import logo from "../images/projectSample.jpg";
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { GitHub, Public } from "@mui/icons-material";
// import { Icon } from "@mui/material";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {blue} from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const listOfColors = ["blue"]

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// console.log(Math.floor(Math.random() * (listOfColors.length - 0 + 1) + 0));

export default function RecipeReviewCard({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "10px", minHeight:"500px"}}>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: listOfColors[Math.floor(Math.random() * (listOfColors.length - 0) + 0)] }} aria-label="recipe">
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {data.name[0].toUpperCase()}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={data.name}
        subheader={data.year}
      />
      <CardMedia
        component="img"
        height="194"
        image={logo}
        alt="No-Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <GitHub />
        </IconButton>
        <IconButton aria-label="share">
          <Public />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
