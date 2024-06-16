import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


import burgerMenu from "./ui/burger.js";
burgerMenu();


import  accordion  from "./ui/accordion.js";
accordion();

//import tabs from "./ui/tabs.js";
//tabs(triggerClass, contentClass);

import DynamicAdapt from "./modules/dynamicadapt.js";
const da = new DynamicAdapt("max");
da.init();


import modal from "./modules/modals.js";
import addWrapperPageDashboard from "./modules/addWrapperPageDashboard.js";
import dashboardCreateLine from "./modules/dashboardPaintLines.js";

try {
    dashboardCreateLine();
    modal();
} catch(e) {}
try {
    addWrapperPageDashboard();
}catch(e) {}



//Animation
try {
    const animItems = document.querySelectorAll("._anim-items");

    if(animItems.length > 0) {

        window.addEventListener("scroll" , animOmScroll );
        function animOmScroll() {
            for(let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const offsetHeight = offset(animItem).top;
                const elementHeight = animItem.scrollHeight;
                const animNumber = 4;
                
                let startAnim = window.innerHeight - elementHeight/animNumber;
                if(window.innerHeight > elementHeight) {
                    startAnim = window.innerHeight - elementHeight/animNumber;
                }

                if((scrollY > offsetHeight - startAnim) && scrollY < (offsetHeight + elementHeight)) {
                    animItem.classList.add("_start-anim");
                } 
                
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }

        setTimeout(()=> {
            animOmScroll();
        }, 300);
    }
} catch(e) {

}


// Modals Calendar
try {
    $(document).ready(function(){
        $('#input').datepicker({
            inline: true,
            language: {
                daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'yyyy-mm-dd',
                firstDay: 0
            },
        });
    });
    const calendarWrapper = document.querySelector(".calendar__wrapper");
    const calendarClose = document.querySelector(".calendar-close");
    const calendarActive = document.querySelector(".calendar-active");
    
    calendarActive.addEventListener("click", () => {
        calendarActive.classList.add("active");
        calendarWrapper.style.display = "flex";
        document.body.style.overflow = "hidden";
        deleteClass()
    })
    
    calendarClose.addEventListener("click", () => {
        calendarActive.classList.remove("active");
        calendarWrapper.style.display = "none";
        document.body.style.overflow = "";
    })
    
    calendarWrapper.addEventListener("click", (e) => {
        if(e.target.classList.contains("calendar__wrapper")) {
            calendarActive.classList.remove("active");
            calendarWrapper.style.display = "none";
            document.body.style.overflow = "";
        }
    })
} catch(e) {

}




// импорт модуля форм
//import forms from "./modules/forms.js";
//forms();



window.addEventListener("resize", () => {
    const triggers = document.querySelectorAll("[data-spoller]");   
    triggers.forEach(item => {
        const parent = item.parentElement;
        const content = item.nextElementSibling;
        if(parent.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
})


    const search = document.querySelector(".header__search-input");
    const searchBlock =  document.querySelector(".header__search-block");

    search.addEventListener("focus", function() {
        searchBlock.classList.add("active")
    });

    search.addEventListener("blur", function() {
        searchBlock.classList.remove("active")
    });


    const searchButton = document.querySelector(".header__button-search");
    const formMobile = document.querySelector(".header__form");
    const ham3 = document.querySelector(".ham3")

    searchButton.addEventListener("click" , () => {
        formMobile.classList.add("active")
        document.body.style.overflow = "hidden";
    })
    ham3.addEventListener("click" , () => {
        formMobile.classList.remove("active")
        document.body.style.overflow = "";
    })







    const aside = document.querySelector(".aside")
    const ham7 = document.querySelector(".ham7")
    const buttonBurger = document.querySelector(".icon-menu")

    function deleteClass() {
        aside.classList.remove("_active")
        ham7.classList.remove("active")
        document.body.style.overflow = "";
        buttonBurger.classList.remove("_active")
    }

    let startX, startY, endX, endY;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, false);

    document.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipe();
    }, false);


    function handleSwipe() {
        let deltaX = endX - startX;
        let deltaY = endY - startY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
            formMobile.classList.remove("active")
            document.body.style.overflow = "";
        
            deleteClass();
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
            
            // Swipe left

        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
            // Swipe up
            formMobile.classList.remove("active")
            
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
            // Swipe down
        }
    }






// Blocks tabs icons button off/on
try {
    const buttonsOff = document.querySelectorAll("[data-off]");

    buttonsOff.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active")
        })
    })


    function changeActive(selector) {
        const buttonsBorders = document.querySelectorAll(selector);
        
        buttonsBorders.forEach(item => {

            item.addEventListener("click", (e) => {
                buttonsBorders.forEach(item => item.classList.remove("active"));
                e.target.classList.add("active")
            })
        })
    }

    changeActive("[data-border]");
    changeActive(".button-green")


} catch(e) {

}

//Select Home page top block
try {
    const selectButton = document.querySelector(".header-select__button");
    const selectParent = document.querySelector(".header-select")

    selectButton.addEventListener("click", () => {
        selectParent.classList.toggle("active")
    })

    const selectOption = document.querySelectorAll(".header-select__option");
    selectOption.forEach(item => {
        item.addEventListener("click", () => {
            selectParent.classList.remove("active")
        })
    })
} catch(e) {}

//Gols blocks
try {
    const containersColunms = document.querySelectorAll(".team-span__number-gol");

    containersColunms.forEach(item => {
        
        item.style.gridTemplateColumns = `repeat(${Math.ceil(item.children.length / 2)}, 1fr)`;
    })
    
} catch(e) {

}

try {

    const staticParent = document.querySelector(".static-game__block");
    const blockStatic = document.querySelector(".static-block").children;

    for(let i = 0; i < blockStatic.length; i++) {
        const block = blockStatic[i];
        block.addEventListener("click", () => {
            staticParent.classList.toggle("_active")
        })
    }
}catch(e) {
}






import addBorderToScrollTable from "./modules/addBorderToScrollTable.js";
addBorderToScrollTable(".table-block-scroll")




const gameTabs = document.querySelectorAll(".game-tabs");

gameTabs.forEach(block => {
    const elementsItems = block.querySelectorAll(".game-tabs__button");
    const activeLine = block.querySelector(".game-tabs__span");


    const dataContent = document.querySelectorAll("[data-tabs-content]");


    function changeWidthLine() {
        const elementWidth = elementsItems[0].clientWidth;
        activeLine.style.width = `${elementWidth}px`;
    }

    changeWidthLine();
    window.addEventListener("resize", changeWidthLine);

    function deleteActiveClass() {
        elementsItems.forEach(item => item.classList.remove("active"));
        dataContent.forEach(item => item.classList.remove("active"));
    }


    elementsItems.forEach((button, index) => {
        button.addEventListener("click", () => {
            deleteActiveClass();

            dataContent[index].classList.add("active");

            button.classList.add("active");
            
            switch(elementsItems.length) {
                case 2:

                    return  activeLine.style.left = `${50 * index}%`;
                case 3:
                    return  activeLine.style.left = `${33.33333 * index}%`;
                case 4:
                    return activeLine.style.left = `${25 * index}%`;
                default:
                    return activeLine.style.left = `${0 * index}%`;
            }
        })
    })
})

