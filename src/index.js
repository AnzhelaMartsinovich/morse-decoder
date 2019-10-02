const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrLetter = [];
    // т.к. буква = 10 символов, то получим массив, в который будет забито по букве
    for (let i = 0; i < expr.length; i += 10) {
        arrLetter.push(expr.substr(i, 10));
    }

    return arrLetter.map(function (sign) {
        if (sign === '**********') {
            return ' ';
        }

        let letter = '';
        for (let i = 0; i < sign.length; i++) {

            if (sign[i] === '1' && sign[i + 1] === '0') {
                letter += '.';
            } else if (sign[i] === '1' && sign[i + 1] === '1') {
                i += 1;
                letter += '-';
            }

        }
        // console.log(letter);
        return MORSE_TABLE[letter];
    }).join('');
}

module.exports = {
    decode
}