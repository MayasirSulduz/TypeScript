let response: any = "34";

let numericLength:number = (response as string).length

type Book = {
    name:string
}

let bookString = '{"name": "One thing}';

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement

let value:any