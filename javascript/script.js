const mainButton = document.querySelector('#btn');
console.log(mainButton)
mainButton.addEventListener('click', function() {
    this.classList.toggle('blue');
    document.getElementById("btn").disabled = true;
    for(let i = 1; i < 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}
});

function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    newSquare.addEventListener('click', function() {
    this.classList.add('blue');
    });

    return newSquare;
};

// generare numero random fuori dall'array

const list = [1,2,3,5,6,8,10]
generateUniqueRandomNumber (1, 10, list)

function generateUniqueRandomNumber (min, max, blacklist){
    let isFound = false;
    let randomNumber;

    while(!isFound){

        if (!blacklist.includes(randomNumber)){
            isFound = true;
        }
    }

    return randomNumber;
}

