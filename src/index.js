fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => {
    console.log(data)
    for (let game of data) {
        renderGame(game);
        renderGameDetails(game);
    }
})

function renderGame(games) {
    let gameList = document.querySelector('.game-list')
    let title = document.createElement('h5')
    title.innerText = `${games.name} (${games['manufacturer_name']})`
    gameList.appendChild(title);

    title.addEventListener('click', () => {
        renderGameDetails(games)
    })
}

let score = document.querySelector('#detail-high-score')

function renderGameDetails(games) {
    let detailSection = document.querySelector('.game-details')

    let img = document.querySelector('#detail-image')
    img.src = games.image

    let title = document.querySelector('#detail-title')
    title.innerText = games.name

    score.innerText = games['high_score']

    detailSection.append(img, title, score)
}


let form = document.querySelector('#high-score-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target[0].value)

    score.innerText = e.target[0].value
    console.log(typeof e.target[0].value)
})