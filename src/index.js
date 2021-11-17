document.addEventListener('DOMContentLoaded', () => {
  
//card options
  const cardArray = [
    {
      name: 'fries',
      img: '../Images/fries.png'
    },{
      name: 'cheeseburger',
      img: '../Images/cheeseburger.png'
    },{
      name: 'hotdog',
      img: '../Images/hotdog.png'
    },{
      name: 'ice-cream',
      img: '../Images/ice-cream.png'
    },{
      name: 'milkshake',
      img: '../Images/milkshake.png'
    },{
      name: 'pizza',
      img: '../Images/pizza.png'
    },{
      name: 'fries',
      img: '../Images/fries.png'
    },{
      name: 'cheeseburger',
      img: '../Images/cheeseburger.png'
    },{
      name: 'hotdog',
      img: '../Images/hotdog.png'
    },{
      name: 'ice-cream',
      img: '../Images/ice-cream.png'
    },{
      name: 'milkshake',
      img: '../Images/milkshake.png'
    },{
      name: 'pizza',
      img: '../Images/pizza.png'
    },
  ]
  console.log(cardArray)
  //to sort an array randomly
  cardArray.sort(()=>0.5 - Math.random()) //shuffles the elements within the array 

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#results')
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []


  function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', '../Images/rainbow.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch , 500)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId === optionTwoId) {
      alert('You have clicked the same image!')
      cards[optionOneId].setAttribute('src', '../Images/rainbow.png')
      cards[optionTwoId].setAttribute('src', '../Images/rainbow.png')
    } else if(cardsChosen[0] === cardsChosen[1]) {
      alert('You have found a match!')
      cards[optionOneId].setAttribute('src', '../Images/sun-white.png')
      cards[optionTwoId].setAttribute('src', '../Images/sun-white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '../Images/rainbow.png')
      cards[optionTwoId].setAttribute('src', '../Images/rainbow.png')
      alert('Sorry try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congrats! You won!'
    }
    console.log(cardsChosen)
    console.log(cardsWon)
  }


  createBoard()

})