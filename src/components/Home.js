import React from 'react';


import Users from './Users';


const Home = () => {
    const [value, setValue] = React.useState('');
 
    const onChange = event => {
      localStorage.setItem('myValueInLocalStorage', event.target.value);
   
      setValue(event.target.value);
    };
   
    return(
        <div className="App">
         
            
            <Users/>
      </div>
    );
}

export default Home;