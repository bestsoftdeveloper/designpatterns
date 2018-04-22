const expect = require('chai').expect;
import Person from '../src/creational/singleton/singleton_es6';

describe('singleton_es6 test', () => {
    it('sanity', () => {
        var john = new Person();
        john.setVal("111111111111");

        var john2 = new Person();
        john.setVal("22222222222222222");

        expect(john).to.equal(john2);
        expect(john.name).to.equal(john2.name);

        expect(john === john2).to.be.true;
    });
});
