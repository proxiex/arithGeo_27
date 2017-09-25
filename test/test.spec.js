const assert = require('chai');
const app = require('../src/arithGeo.js');

describe('ariGeo', function(){
  
  // Handeling Valid inputs
  describe('Handle empty input', function(){
    // empty array
    it('Should return 0 for []', function(){
      assert.expect(app.aritGeo([])).to.equal(0)
    });
  });

});