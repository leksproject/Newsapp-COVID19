import React from 'react'

const Singleside = ({item}) => {
    return(
    <div>
        <div className="divider"> </div>
        <a href={item.url}>
                <div className="section">
                <h5>{item.source.name}</h5>
                <p>{item.title}</p>
                </div>
        </a>
            
      
    </div>
    );
}

export default Singleside;