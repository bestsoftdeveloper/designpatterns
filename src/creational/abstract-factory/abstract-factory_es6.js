function droidProducer(kind) {
   if (kind === 'battle') return new B1();
   return new Rx24();
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}


class B1 {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 {
    info() {
        return "Rx24, Pilot Droid";
    }
}


export default droidProducer;
