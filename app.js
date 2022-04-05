const container = document.getElementById("container")
const imageClasses = document.querySelector(".images").children
const button = document.getElementById("btn")
const boxes = document.getElementById("container").children
const balanceSpan = document.getElementById("balance")
const result = document.getElementById("result")
const comment = document.getElementById("comment")
let balance = 100
balanceSpan.textContent = balance

button.addEventListener("click",()=>{
    result.textContent = ""
    comment.textContent = ""
    result.classList= ""
    button.disabled = true
    const myInterval = setInterval(shuffle,30)
    setTimeout(() => {
        clearInterval(myInterval)
        button.disabled = false
        
        if(boxes[0].classList.toString() == boxes[1].classList.toString() &&
        boxes[0].classList.toString() == boxes[2].classList.toString()&&
        boxes[1].classList.toString() == boxes[2].classList.toString()){
            balance += 60 
            result.textContent = "YOU WON!!!"
            result.classList.add("scale")
        }else{
            balance -=  2
            result.textContent = "YOU LOSE!"
            
        }        
        balanceSpan.textContent = balance
        if(balance == 60 ){
            comment.textContent = "işler kötü gidiyor galiba"
        }
        else if(balance == 40){
            comment.textContent = "tezgah kapanıyor!"
        }
        else if(balance == 20){
            comment.textContent = "senden olmayacak galiba"
        }
        else if(balance == 0){
            button.disabled = true
            button.textContent = "bütün paranı kaybettin lütfen sayfayı yenile"
        }
        
    }, 1500)    
})

function shuffle(){
    let randomNumber0 = Math.floor(Math.random()*6)
    let randomNumber1 = Math.floor(Math.random()*6)
    let randomNumber2 = Math.floor(Math.random()*6)
        
    for(i of boxes){
        i.classList = ""
    }  
    
    boxes[0].classList.add(imageClasses[randomNumber0].classList)
    boxes[1].classList.add(imageClasses[randomNumber1].classList)
    boxes[2].classList.add(imageClasses[randomNumber2].classList)    
}









