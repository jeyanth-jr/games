function startGame(){
    isAlive=true
    blackJack=false
    mSum=0
    document.getElementById("msg").textContent="Welcome to blackjack";
    cards=[]
    cards.push(Math.floor(Math.random()*13)+1)
    cards.push(Math.floor(Math.random()*13)+1)
    update()
    if(sum<21){
        document.getElementById("msg").textContent="Do you want to draw another card???";
    }
    renderGame()
}

function newCard(){
    if(isAlive===true && blackJack===false){ 
        cards.push(Math.floor(Math.random()*13)+1)
        update()
    }
    else if(isAlive==false && blackJack===false){
        document.getElementById("msg").textContent="You can't draw a new card. You lost!"
    }
    else{
        document.getElementById("msg").textContent="It's a blackjack! You won!"
    }
    renderGame()
}

function update(){
    sum=0
    document.getElementById("cards-el").textContent="Cards:"+" "
    for(i=0;i<cards.length;i++){
        if(cards[i]===1){
            document.getElementById("cards-el").textContent+='A'+" "
        }
        else if(cards[i]===11){
            document.getElementById("cards-el").textContent+='J'+" "
        }
        else if(cards[i]===12){
            document.getElementById("cards-el").textContent+='Q'+" "
        }
        else if(cards[i]===13){
            document.getElementById("cards-el").textContent+='K'+" "
        }
        else{
            document.getElementById("cards-el").textContent+=cards[i]+" "
        }
        sum+=cards[i]
    }
    mSum=sum;
    document.getElementById("sum-el").textContent="Sum:"+" "+sum
}
function renderGame(){
    if(isAlive===true){
        if(mSum===21){
            document.getElementById("msg").textContent="It's a blackjack!!! You won!!!"
            isAlive=false
            blackJack=true
        }
        else if(mSum>21){
            document.getElementById("msg").textContent="You Lost"
            isAlive=false
        }
        else if(mSum<21){
            document.getElementById("msg").textContent="Do you want to draw another card???"
        }
    }
}
