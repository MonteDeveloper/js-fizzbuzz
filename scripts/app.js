let squaresContainer = document.getElementById("my-squaresContainer");
let fizzStr = "fizz";
let buzzStr = "buzz";

for (let i = 1; i <= 100; i++) {
    let text = i;

    if(i % 3 == 0){
        text = fizzStr;

        if(i % 5 == 0){
            text += buzzStr
        }

    }else if(i % 5 == 0){
        text = buzzStr;
    }

    squaresContainer.innerHTML += `<div class="my-square my-${text}BG">${text}</div>`;
}