//Count need to start from zero
let count =  0;

//selecting value and the buttons4

const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

//Logic on all the selected buttons

buttons.forEach((btn) =>{
    //when button is click, add classes, decrease or increase
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else{
            count = 0
        }

//Changing colors of decrease/increase buttons
        if(count > 0){
            value.style.color = 'blue'
        }
        if(count < 0){
            value.style.color = 'purple'
        }
        if(count === 0){
            value.style.color = 'gray'
        }
        value.textContent = count
    })

})
