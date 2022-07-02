const twitter = document.querySelector('.twitter')
const whatsapp = document.querySelector('.whatsapp')
const telegram = document.querySelector('.telegram')

const twitterApi = 'https://twitter.com/intent/tweet?text=Infórmate sobre el ciberfraude! https://grupocafraudecibernetico.netlify.app'
const whatsappApi = 'https://wa.me/?text=Infórmate sobre el ciberfraude! https://grupocafraudecibernetico.netlify.app'
const telegramApi = 'https://t.me/share/https://t.me/share/url?url=https://grupocafraudecibernetico.netlify.app&text=Infórmate sobre el ciberfraude'    

twitter.addEventListener('click', () => {
    window.open(url = twitterApi, target='blank')
})

whatsapp.addEventListener('click', () => {
    window.open(url = whatsappApi, target='blank')
})


telegram.addEventListener('click', () => {
    window.open(url = telegramApi, target='blank')
})