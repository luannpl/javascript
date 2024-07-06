function helloWorld(arg) {
    if (typeof arg!== 'string' && arg!== undefined) {
        return "Função aceita apenas string como argumento!";
    } else if (arg === undefined ) {
        return "Hello World!";
    } else {
        return "Hello " + arg + "!";
    }
}

