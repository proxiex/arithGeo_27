const assert = require('chai').assert;
const app = require('../src/arithGeo.js');

//Geometric 
//Arithmetic 
// -1
//0

describe('arithGeo', function() {

    //handleling empty inputs
    describe('Handle empty  input', () => {
        // empty array
        it('should  return 0 for []', function() {
            assert.equal(app.aritGeo([]), 0);
        });

    });


    describe('Handle Arithmetic  input', function() {
        //Arithmetic
        it('should  return Arithmetic for [1,2,3,4,5]', function() {
            assert.equal(app.aritGeo([1, 2, 3, 4, 5]), 'Arithmetic');
        });

        it('should  return Arithmetic for [5,10,15,20,25]', function() {
            assert.equal(app.aritGeo([5, 10, 15, 20, 25]), 'Arithmetic');
        });

        it('should  return Arithmetic for [20,17,14,11,8,5,3,0]', function() {
            assert.equal(app.aritGeo([20, 17, 14, 11, 8, 5, 2, -1]), 'Arithmetic');
        });

        it('should  return Arithmetic for [-3,-1,1,3]', function() {
            assert.equal(app.aritGeo([-3, -1, 1, 3]), 'Arithmetic');
        });
    });

    describe('Handle Geometric  input', function() {
        //Geometric

        it('should  return Geometric for [1,6,36,216]', function() {
            assert.equal(app.aritGeo([1, 6, 36, 216, ]), 'Geometric');
        });

        it('should  return Geometric for [100,20,5,1]', function() {
            assert.equal(app.aritGeo([100, 20, 4]), 'Geometric');
        });

        it('should  return Geometric for [10,5,2.5]', function() {
            assert.equal(app.aritGeo([1, 3, 9, 27]), 'Geometric');
        });

        it('should  return Geometric for [1,0.5,0.25,0.125]', function() {
            assert.equal(app.aritGeo([1, 0.5, 0.25, 0.125]), 'Geometric');
        });
    });

    describe('Handle Non geometric or arithmetic  input', function() {
        //Neither geometric or arithmetic
        it('should  return -1 for [1,3,3,54,9]', function() {
            assert.equal(app.aritGeo([1, 3, 3, 54, 9]), -1);
        });

        it('should  return -1 for [1,1,1,4,9]', function() {
            assert.equal(app.aritGeo([1, 1, 1, 4, 9]), -1);
        });

        it('should  return -1 for [1,"hi",1,4,9]', function() {
            assert.equal(app.aritGeo([1, "hi", 1, 4, 9]), -1);
        });


        it('should  return -1 for ["","hi",1,4,9]', function() {
            assert.equal(app.aritGeo(["", "hi", 1, 4, 9]), -1);
        });


    });
})