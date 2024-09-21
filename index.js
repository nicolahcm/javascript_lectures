// Dato un numero ritorna la lista delle cifre (tipo numero)


class LogicNumbers {

    constructor() {
    }

    extractDigits(num) {
        const digits = num.toString().match(/\d/g);

        let digitsconvertedNumber = [];
        for (let digit of digits) {
            digitsconvertedNumber.push(Number(digit))
        }

        return digitsconvertedNumber ? digitsconvertedNumber : [];
    }

    // fa la somma dei numeri in una lista (number[])
    sumNumbersInAList(listOfNumbers) {
        // se la lista è vuota ritorna 0 
        let sum = 0;
        for (let i = 0; i < listOfNumbers.length; i++) {
            sum += listOfNumbers[i];
        }
        return sum;
    }

    // prende un numbero. Vede se è minore di 22. Ritorna il numero. Altrimenti fa la somma delle cifre. e così ricorsivamente.
    getSumLessTT(number) {
        if (number > 22) {
            let newNumber = this.sumNumbersInAList(this.extractDigits(number))
            return this.getSumLessTT(newNumber)
        } else {
            return number
        }
    }
}