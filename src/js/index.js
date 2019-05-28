 
  const createRoller = () => _.shuffle(_.range(1, totalBolas));

  const createCard = (items = 15) => {
    const bolas = _.shuffle(_.range(1, totalBolas));
    return bolas.slice(0, items);
  }
  
  const showCard = (element, card) => {
    let divCard = document.querySelector(element);
    divCard.innerHTML = '';

    for(let i = 0; i < card.length; i++){
      const numero = card[i];
      divCard.innerHTML += `<div class="number number${numero}">${numero}</div>`;
    }
  }

  const takeNumberElement = () => document.getElementById("numElement");

  const checkNumber = (cardPlayer, cardCpu) => {

    const n = document.querySelectorAll('.number' + check);
    const m = document.querySelector('.number' + check);
  
    if((cardPlayer.indexOf(check) != -1) && (cardCpu.indexOf(check) != -1)){
        n[0].classList.add('strike');
        n[1].classList.add('strike');
        cardPlayer.splice((cardPlayer.indexOf(check)), 1);
        cardCpu.splice((cardCpu.indexOf(check)), 1);
    }
    else if(cardPlayer.indexOf(check) != -1){
      m.classList.add('strike');
      cardPlayer.splice((cardPlayer.indexOf(check)), 1);
    }
    else{
      m.classList.add('strike');
      cardCpu.splice((cardCpu.indexOf(check)), 1);
    }
  }

  const restartGame = () =>{
    location.reload();
  }

  const addEnd = (value) => {
    const result = document.getElementById('result');
    const btn = document.getElementById('button');

    if(value === 'w'){
      result.textContent = '¡Has ganado!';
    }
    else if(value === 'e'){
      result.textContent = '¡Han empatado!';
    }
    else{
      result.textContent = '¡Has perdido!';
    }
    btn.textContent = 'Volver a jugar';
    btn.addEventListener('click', restartGame);

  }

  const takeFromRoller = () => {
    if((cardPlayer.length == 0) && (cardCpu.length == 0)){
      addEnd('e');
    }

    if (cardPlayer.length == 0){
      addEnd('w');
    }

    if (cardCpu.length == 0){
      addEnd('p');
    }
    check = roller.pop();
    numberElement.textContent = check;
    checkNumber(cardPlayer, cardCpu);
  }

  const totalBolas = 90;
  let check = 0;

  const roller =  createRoller();
  const cardPlayer = createCard();
  const cardCpu = createCard();

  const numberElement = takeNumberElement();
  const btn = document.getElementById("button")
  btn.addEventListener('click', takeFromRoller);
  
  showCard('.cardPlayer', cardPlayer);
  showCard('.cardCpu', cardCpu);