import React from 'react';
import Card from 'react-bootstrap/Card';

// function Project({title,description,src,alt,gitHubLink,deployLink}) {
//     return (
// <div>
//    <h1>{title}</h1>
//    <p>{description}</p>
//    <div><a href={gitHubLink}><img src={require(`../../../icons/GitHub-Mark-32px.png`)} alt="GitHub icon" /></a></div>
//    <div><a href={deployLink}><img src={src} alt={alt}/></a></div>
//     </div>
//     );
//   }

function Project({title,description,src,alt,gitHubLink,deployLink}) {
  return (
<>
   <Card border="light" style={{ width: '100%' }}>
    <Card.Header>
      <h1>{title}</h1>
      <p>{description}</p>
      <div><a href={gitHubLink}><img src={require(`../../../icons/GitHub-Mark-32px.png`)} alt="GitHub icon" /></a></div>
      </Card.Header>
    <Card.Body>
      <div><a href={deployLink}><img src={src} alt={alt}/></a></div>
    </Card.Body>
  </Card>
  <br />
</>
);
}

  
  export default Project;