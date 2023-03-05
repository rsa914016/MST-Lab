const prompt = require("prompt-sync")({sigint : true})
var cal = require("./Calculator")

console.log('1. Add\n2. Sub\n3. Mul\n4. Div')
var a = Number(prompt("Enter a :"))
var b = Number(prompt('Enter b :'))
var op = prompt('Enter Operation :')
switch(op){
    case "1":
        cal.add(a,b);break;
    case "2":
        cal.sub(a,b);break;
    case "3":
        cal.mul(a,b);break;
    case "4":
        cal.div(a,b);break;
}