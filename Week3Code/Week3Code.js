//Question 1

    let ages = [3, 9, 23, 64, 45, 2, 8, 28, 93];
    console.log(ages[(ages.length - 1)] - ages[0]);

    console.log( ages.reduce(function(total, currentValue){
        return total + currentValue; }) / ages.length );

//Question 2

    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

    // console.log( names.map(function(elm){
    //     return elm.length}).reduce(function(total, currentValue){
    //     return total + currentValue; }) / names.length)

    let namelength = []

    for (i in names){
        namelength.push(names[i].length)
    }

    let nameavg = ((namelength.reduce(function (total, currentValue){
        return total + currentValue;}) / namelength.length));

    console.log(nameavg);

    let namestring = ""
    
    for (i in names){
        namestring = namestring + names[i] + " "
    }

    console.log(namestring);

//Question 3

    console.log(names[0]);

//Question 4

    console.log(names[names.length - 1]);

//Question 5

    let nameLengths = [];

    names.forEach(element => {
        nameLengths.push(element.length)
    });

    console.log(nameLengths);

//Question 6

    console.log(nameLengths.reduce(function(total, currentValue){return total + currentValue;}))

//Question 7

    function hellofunction(word, n) {
        let fullReturn = ""
        for (let i = 0; i < n; i++) {
            fullReturn = fullReturn + word;
        }
        return fullReturn;
    }

    console.log(hellofunction("Hello", 3));

//Question 8

    function fullname(firstname, lastname) {
        return firstname + " " + lastname;
    }

    console.log(fullname("Rory","Borger-Johnson"));

//Question 9

    function sum100(arr){
        return (arr.reduce(function(total, currentValue){
            return total + currentValue;
        }) > 100)
    }

    let testarray1 = [10,20,50,30];
    let testarray2 = [50, 30, 10]

    console.log(sum100(testarray1));

    console.log(sum100(testarray2));

//Question 10

    function avgarry(arr){
        return (arr.reduce(function(total, currentValue){
            return total + currentValue;
        }) / (arr.length))
    }


    console.log(avgarry(testarray1));

    console.log(avgarry(testarray2));

//Question 11

    function avgarryTest(arr1, arr2){
        return ((arr1.reduce(function(total, currentValue){
            return total + currentValue;
        }) / (arr1.length)) > (arr2.reduce(function(total, currentValue){
            return total + currentValue;
        }) / (arr2.length)))
    }


    console.log(avgarryTest(testarray1, testarray2));

    console.log(avgarryTest(testarray2, testarray1));

//Question 12

    function willBuyDrink(isHotOutside, moneyInPocket){
        if (isHotOutside == false) {
            return false;
        }

        let convrtmoneyInPocket = moneyInPocket * 100

        if (convrtmoneyInPocket <= 1050){
            return false;
        }
        return true;

    }

    console.log(willBuyDrink(true, 10.50));
    console.log(willBuyDrink(false, 11.50));
    console.log(willBuyDrink(true, 10.51));

//Question 13

    /* This Function takes a secrect code and a guess and returns how close the guess is to the secret code, 
        folowing the rules of the game Mastermind. */

    function mastermind(Code, guess){
        
        if (Code.length != 4){
            return "Code is too long/short (Needs to be 4 long)" /*These first few line are to make sure
                                                                     the inputs follow the game's rules. */
        }
        if (guess.length != 4){
            return "Guess is too long/short (Needs to be 4 long)"
        }
        if (Code.forEach(element => {
            element > 6 || element < 0
        })){
            return "Pegs in Code need to be from 1-6"
        };
        
        if (guess.forEach(element => {
            element > 6 || element < 0
        })){
            return "Pegs in guess need to be from 1-6"
        };

        if (arrEqual(Code,guess) != true) {//This code makes sure that the guess is not the same as the the code.
            let correctcol = 0
            let correctpos = 0
            for (i in Code){
                if (Code[i] == guess[i]) { // This counts the number of pegs that are the right color (Number) 
                correctpos++                    //and in the right position.
                
                }
            }
            for (i in Code){
                if (guess.includes(Code[i])){// This counts the number of pegs that are the right color (Number).
                    correctcol++
                }
            }
            correctcol = correctcol - correctpos /* This removes the amount of pegs counted in the correct 
                                                   position from the pegs in the correct color, because if 
                                                   they are in the right position they are also the right color.*/
            return "There are " + correctcol + " pegs of the correct color, and " + correctpos + " pegs in the correct position."
        }
        return "Correct"
    }

    function arrEqual (arry1, arry2) {
        if (arry1.length != arry2.length) {
            return false
        }
        for (i in arry1){
            if (arry1[i] != arry2[i]) {
            return false
            }
        }
        return true

    }

    console.log(mastermind([1,2,3,4],[1,2,3,5]));
    console.log(mastermind([1,2,3,4],[1,2,3,5,6]));
    console.log(mastermind([1,2,3,10],[1,2,3,5]));
    console.log(mastermind([1,2,3,4],[4,2,1,3]));
    console.log(mastermind([1,2,3,4],[1,2,3,4]));