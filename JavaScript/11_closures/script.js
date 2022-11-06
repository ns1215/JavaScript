// closures in javascript

const outer = () => {
    const outerVar = 'hello!';
// creting a function inside a function 

    const inner = () => {
        const innerVar = 'hi';
        console.log(outerVar, innerVar);

    }

    return inner;
    // calling inner function
    // no parameters so we can ignore paranthesis

}

const innerFn=outer();// calling outer function
innerFn();