interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const Rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'green'
}

const Rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    },
}
Rect2.color = 'black';

const Rect3 = {} as Rect
const Rect4 = <Rect>{}

/* ========================= */

interface RectWithArea extends Rect {
    getArea: () => number
}

const Rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

/* ========================= */

interface IClock {
    time: Date,
    setTime(data: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(data: Date) {
        this.time = data;
    }
}

/* ========================= */
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
};