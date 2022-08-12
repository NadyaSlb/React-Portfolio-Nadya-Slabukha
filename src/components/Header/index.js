import React from 'react';
import Navigation from '../Navigation';

function Header({activeTab, changeTab}) {
    return (
        <Navigation activeTab={activeTab} changeTab={changeTab}/>
    );
  }
  
  export default Header;