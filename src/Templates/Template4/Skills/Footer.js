import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import { GitHub, LinkedIn, Twitter, Facebook } from "@mui/icons-material";
import Link from '@material-ui/core/Link';

export const Footer = (props) => {
    const data  = props.data;
    // console.log(data, "ddd");
    return (
        <div>
            {data.email!=null?
                <Link href={`mailto: ${data.email}`}  target="_blank" >
                <MailIcon style={{ margin:"15px 15px",color: "white", marginTop:"25px", marginBottom:"5px" }}/></Link>:
                <></>   
            }

            {data.github!=null?
            <Link href={data.github} target="_blank" >
                <GitHub style={{margin:"15px 15px",color: "white", marginTop:"25px", marginBottom:"5px" }}/></Link>:
                <></>   
            }


            {data.facebook!=null?
            <Link href={data.facebook} target="_blank" >
                <Facebook style={{ margin:"15px 15px",color: "white", marginTop:"25px", marginBottom:"5px" }}/></Link>:
                <></>   
                
            }


            {data.twitter!=null?
                <Link href={data.twitter} target="_blank" >
                    <Twitter style={{ margin:"15px 15px",color: "white", marginTop:"25px", marginBottom:"5px" }}/></Link>:
                    <></>   
                
            }

            {data.linkedin!=null?
                <Link href={data.linkedin} target="_blank" >
                    <LinkedIn style={{ margin:"15px 15px",color: "white", marginTop:"25px", marginBottom:"5px" }}/></Link>:
                    <></>   
                
            }
            
        </div>
    )
}