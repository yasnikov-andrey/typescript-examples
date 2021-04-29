class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version;
    }
    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel;
    }
}

class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

/* ====================== */

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go(): void {
        console.log('go!');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);

/* ====================== */

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('AppComponent render!');
    }
    info(): string {
        return 'this is info!';
    }
}