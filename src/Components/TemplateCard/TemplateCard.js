import React from 'react';
import PropTypes from  "prop-types";
import {Information} from "./Templateinformation";
import {IndividualTemplate} from "./IndividualTemplate";
function TemplateCard(props) {
  
  return (
    <section className="text-gray-600 body-font mr-20 ml-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Information.map((template, i)=>
            <IndividualTemplate img= {template.img}TemplateName={template.TemplateName} Views={template.Views} Description={template.Descrption} Price={template.Price}/>
          )}

        </div>
      </div>
    </section>
  )
}

TemplateCard.defaultProps = {
  theme: 'indigo'
};

TemplateCard.propTypes = {
  theme: PropTypes.string.isRequired
};

export default TemplateCard;