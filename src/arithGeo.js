'use strict';

module.exports = {
  aritGeo: (array) => {
    
    // Make sure its not enpty
    if (array.length < 1 ) {
      return 0;
    } else {
      // validate user input
      for (let i = 0; i <= array.length -1; i++){
        if (typeof(array[i]) !== 'number' ) {
          return 'Numbers Only'
        }
      }
       // Define Base
      const diff = array[1] - array[0];
      const ratio = array[1] / array[0];
      
      // Default valuse
      let arithmetic = true;
      let geometric = true;

      // Let's check
      for (let i = 0; i < array.length - 1; i++) {
        
        if (array[i + 1] - array[i] !== diff){
          arithmetic = false;
        }

        if (array[i + 1] / array[i] !== ratio) {
          geometric = false;
        }
      }

      // it is arithmetic; retrun value
      if (arithmetic === true) {
        return 'Arithmetic';
      } else if (geometric === true) {
        return 'Geometric';
      } else if (arithmetic === false && geometric === false) {
        return -1;
      }
    }
  }
}