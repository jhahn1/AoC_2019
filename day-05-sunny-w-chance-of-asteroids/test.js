const assert = require('assert');
const sunnyAsteroids = require('./sunnyAsteroids');
const sinon = require('sinon');

describe('Day 5: Sunny with a Chance of Asteroids', () => {
    it('should pass test 1', () => {
        const input = '3,0,4,0,99';
        let spy = sinon.spy(console, 'log');
        sunnyAsteroids(input);
        assert(spy.calledWith(1));
    }) ;
    it('should pass test 2', () => {
        const input = '1002,4,3,4,33';
        let spy = sinon.spy(console, 'log');
        sunnyAsteroids(input);
       assert(spy.calledWith('1002,4,3,4,99'));
   }) ;
});

