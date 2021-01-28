import React from "react";
import Emoji from "./Emoji";
import Topic from "./Topic";
import Description from "./Description";

function  Card(props){
  return (
     <div className="term">
          <dt>
          <Emoji emoji={props.emoji} />
            <Topic topic={props.topic}/>
          </dt>
          <Description description={props.description} />
        </div>
  );


}

export default Card;