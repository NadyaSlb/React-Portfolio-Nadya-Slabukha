import React from 'react';

function Project({title,description,src,alt}) {
    return (
<div>
   <h1>{title}</h1>
   <p>{description}</p>
   <img src={src} alt={alt}/>
    </div>
    );
  }
  
  export default Project;