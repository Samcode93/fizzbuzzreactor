var i = 0;

function validate(number) {
    console.log(number+"isnumber"); 
    input = parseInt(number);
if (isNaN(number)){
    number = prompt("Please insert a number for Fizzbuzz");
}

for (i; i <= number; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
     document.write("fizzbuzz");
    }
    else if (i % 3 === 0) {
        document.write("fizz");
    }
    else if (i % 5 === 0) {
        document.write("buzz");
    }
    else {
        document.write(i);
    }

}

}

var input = prompt("How much do you fizzbuzz?");


validate(input);
