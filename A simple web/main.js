
const buy = document.querySelectorAll('.js-buy-now ')
const modal = document.querySelector('.modal')
const container = document.querySelector('.js-modal-container')
const art=document.querySelectorAll('.js-art')
function showbuy(){
    modal.classList.add('open')
}
const close = document.querySelector('.js-modal-close')
function closebuy(){
    modal.classList.remove('open')
}
for(const i of buy){
    i.addEventListener('click',showbuy)
}
for(const i of art){
    i.addEventListener('click',showbuy)
}
close.addEventListener('click',closebuy)
modal.addEventListener('click',closebuy)
container.addEventListener('click',function(event){
    event.stopPropagation()
})
