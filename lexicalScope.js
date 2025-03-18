// Lexical Scope Example
function outerFunction() {
    let outerVariable = "I'm from outer function!";

    function innerFunction() {
        console.log(outerVariable); // Can access outer function's variable
    }

    innerFunction();
}

outerFunction();
