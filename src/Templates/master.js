import React from 'react'
import axios from 'axios';
import credentials from './credentials.json'
import { Template4 } from './Template4/Template4';
// import { Template1  } from './Template1/Template1';
// import { Template1  } from './Template1/Template1';
// import Template5 from './Template5/src/Template5'
// import Template3 from './Template3/src/Template3'
// import { CourseComponent } from '../Templates/Template4/Courses/CourseComponent';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data:null
        };
    }
    componentWillMount() {
        
        axios.post('https://sitesheet.apoorvpal.in/api/sites/pages/all', credentials.User1)
            .then(response => {
                // console.log(response, "responses")
                this.setState({
                    
                    ...this.state, // spreading in state for future proofing
                isLoaded: true,
                data: response.data
                
                });
                
            }).catch(error => {
                console.log(error)
        })
    }

    render() {
        // const  details  = this.state;
        const { isLoaded, data } = this.state;
        return <div>
            {
            isLoaded?
            <Template4
             details={data}/>:<div></div>

            }

            {/* {
            isLoaded?
            <Template5 props={data}/>:<div></div>
            
            } */}
            
            {/* <Template1/> */}
        </div>;
    }
}
export default Master;

