const days = document.querySelector('#day')
const hours = document.querySelector('#hour')
const minutes = document.querySelector('#minute')
const seconds = document.querySelector('#second')

const updateValues = () => {

    const dateFinal = new Date(2023, 00, 01)
    const date = Date.now()

    const totalSeconds = (dateFinal - date) / 1000

    days.textContent = Math.floor(totalSeconds / 3600 / 24);
    hours.textContent = Math.floor(totalSeconds / 3600) % 24;
    minutes.textContent = Math.floor(totalSeconds / 60) % 60;
    seconds.textContent = Math.floor(totalSeconds) % 60;
}

setInterval(updateValues, 1000)