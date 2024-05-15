

//  data-spoller-trigger дата атрибут блоку на котором должен идти клик
// data-spollers родительский блок, оболочка меню аккордеон
// data-spollers-content  контент спойлера


const accordion = () => {
	const trigger = document.querySelectorAll("[data-spoller]");   
	trigger.forEach(item => {
		item.addEventListener("click", (e)=> {
			if(!e.target.classList.contains("data-off")) {
				const parent = item.parentElement;
				const content = item.nextElementSibling;
				parent.classList.toggle("active");
				if(parent.classList.contains("active")) {
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					content.style.maxHeight = 0;
				}
			}
			
		});
	});
};



export default accordion;