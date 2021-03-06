const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        const videoId = card.getAttribute("id")
        modalOverlay.querySelector("iframe").src = `https://youtube.com/embed/${videoId}`
    })
}

 document.querySelector(".close-modal").addEventListener("click", function(){
     modalOverlay.classList.remove("active")
     modalOverlay.querySelector("iframe").src = ""
 })

