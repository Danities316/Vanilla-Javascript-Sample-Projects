const colors = ["purple", "blue", "white", "green", "black", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');


//We need To convert colors number into random number to get diffrent colors
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}


//adding event listers on btn
btn.addEventListener('click', () =>{
    //Getting random numbers
    const randomNumber = getRandomNumber()
    // console.log(randomNumber)


    //Rendering the background color to the screen
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})