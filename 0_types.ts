const message: string = 'Hello World!';
const isFetching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const wordsArray: Array<string> = ['Hello', 'World!'];
const contact: [string, number] = ['Name', 1233456];

let variable: any = 42;
variable = 'new string';

function seyMyName(name: string): void {
    console.log(name);
}
seyMyName('Test Name');

function throwError(message: string): never {
    throw new Error(message);
}

type Login = string;
const login: Login = 'admin';

type Id = string | number;
const id1: Id = 1234;
const id12: Id = 'test_id';

type SomeType = string | null | undefined;