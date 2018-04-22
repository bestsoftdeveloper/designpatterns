class Person {
	// let name  = "";
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }

    setVal(val){
    	this.name  =val;
    }
}

export default Person;
