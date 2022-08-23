const StringCounter = (letter, string) => {
    var cont = 0;
    for (var i in string) {
        if (letter == string[i]) {
            cont++;
        }
    }
    if (cont===1) {
        console.log('Essa letra aparece ' + cont + ' vez');
    } else {
        console.log('Essa letra aparece ' + cont + ' vezes');
    }
}

StringCounter('M', 'Matheus');