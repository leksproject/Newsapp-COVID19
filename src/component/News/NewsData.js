import React from 'react';

const NewsData = (props) =>
{
    console.log("NewsData", props.item);
     return(
        // <div className="col s4 col md4">
      
            <div className="card">
                  <div className=" col s4">
                <div className="card-image">
                    <img src={props.item.urlToImage} alt = {props.item.title}/>
                    <span className="card-title">{props.item.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.item.title}</p>
                </div>
                <div className="card-action">
                  <a href={props.item.url}>Full article</a>
                </div>
            </div>
        </div>
        // <li>
        //    <p>{props.item.author}  :   {props.item.title}</p>
        //    <p> {props.item.description}</p>
        // </li>
     )
        
    
}

export default NewsData;



