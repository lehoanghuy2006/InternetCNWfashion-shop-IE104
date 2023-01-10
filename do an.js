function onIcons(){
    this.setAttribute("src", "images/star2.png");
}
function outIcons(){
    this.setAttribute("src", "images/star1.png");
}


/* count amount + - */



  let amountElemet = document.getElementById('amount')
  let amount = amountElemet.value

  // console.log(amount)
  let render = (amount) => {
    amountElemet.value = amount
  }
  
  // HandlePlus

  let handlePlus = () => {
    amount++
    render(amount);
  }

    // HandleMinus
    console.log(amount)
  let handleMinus = () => {
    if(amount > 1)
        amount--;
    render(amount);
  }

