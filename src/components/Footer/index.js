import React from 'react';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={3}>
    <div><a href="https://github.com/NadyaSlb"><img src={require(`../../icons/GitHub-Mark-32px.png`)} alt="GitHub icon" /></a></div>
    <div><a href="https://www.linkedin.com/in/nadzeya-slabukha-92a296234/"><img src={require(`../../icons/linkedin.png`)} alt="Linkedin icon" /></a></div>
    <div><a href="https://stackoverflow.com/users/18434556/nadzeya-slabukha"><img src={require(`../../icons/stackoverflow.png`)} alt="Stack Overflow icon" /></a></div>
    </Stack>
    </div>
    );
  }
  
  export default Footer;