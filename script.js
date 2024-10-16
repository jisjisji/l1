const burgerBtn=document.querySelector('.burger__menu')
const burgermodalMenu=document.querySelector('.modal__burger_menu')
const menu=document.querySelector('.menu')
const modal__form=document.querySelector('.modal__form')
const modal=document.querySelector('.modal')
const input=document.querySelector('input')

burgerBtn.addEventListener('click',()=>{
    burgermodalMenu.classList.toggle('active')
})
window.addEventListener('click',(e)=>{
	if(input===''){
		
	}
	else{
    if(!burgermodalMenu.contains(e.target)&& !burgerBtn.contains(e.target)){
        burgermodalMenu.classList.remove('active')
    }}
})

const addTask=(e)=>{
const taskhtml=`<div class="modal__window">
				<form>
					<input class="br1" type="text" placeholder="Boris Johnson" />
					<input class="br2" type="password" placeholder="password" />
					<input class="br3" type="password" placeholder="Confirm password" />
					<button class="send">Send</button>
				</form>
			</div>
`


modal.insertAdjacentHTML('beforeend', taskhtml);}
menu.addEventListener("click",addTask);




// функція показу модального вікна по кліку на кнопку, закриття можально 
//вікна по кліку на кнопку х2, якщо поля інпутів порожні бордери інпутів загоряться червоним