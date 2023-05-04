function writeCards (listNames, event){
    const messages=[];

    for (let i = 0; i<listNames.length; i++){
        messages.push(`Thank you, ${listNames[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

/*function countDown(number){
    for (let i = 0; i <= number; i++){
        console.log (number - i);
    }
}*/

function countDown(number){
    while (number >= 0){
        console.log(number)
        number -= 1;
    }
}
