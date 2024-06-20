import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


import burgerMenu from "./ui/burger.js";
burgerMenu();


import  accordion  from "./ui/accordion.js";
accordion();

import tabs from "./ui/tabs.js";
tabs(".game-tabs__button", "[data-tabs-content]")

import addBorderToScrollTable from "./modules/addBorderToScrollTable.js"
import addWrapperPageDashboard from "./modules/addWrapperPageDashboard.js";
import dashboardCreateLine from "./modules/dashboardPaintLines.js";

try {
    addWrapperPageDashboard()
    addBorderToScrollTable(".table-block-scroll")
} catch(e) {

}



const activeAnimation = () => {
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
    
}
//Animation

const activeCalendar = () => {
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
}
// Modals Calendar



// импорт модуля форм


const activeSpollersResize = () => {
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
}

const headerFunctionSwipe = () => {
    
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
}



const activeFunctionOffOn = () => {
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
}

// Blocks tabs icons button off/on

const activeSelectHomeHeaderBlock = () => {
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
}
//Select Home page top block

//Gols blocks
const addGols = () => {
    try {
        const containersColunms = document.querySelectorAll(".team-span__number-gol");
    
        containersColunms.forEach(item => {
            
            item.style.gridTemplateColumns = `repeat(${Math.ceil(item.children.length / 2)}, 1fr)`;
        })
        
    } catch(e) {
    
    }
}

function activateLinesPaint() {
    
    const elementsDashboard = document.querySelectorAll(".dashboard__body");

    elementsDashboard.forEach((element) =>{

        const parentElement = element.closest('[data-tabs-content]');
        
        if(window.getComputedStyle(parentElement).display === 'flex') {

            if(!element.classList.contains("activation")) {
                dashboardCreateLine(element);
                element.classList.add("activation");
            }
        }
    })
}
activateLinesPaint()

function updateGridColumns(block, lengthItem, line) {
    block.style.cssText = `
        grid-template-columns: repeat(${lengthItem}, 1fr);
    `;
    //const elementWidth = elementsItems[0].clientWidth;
    //line.style.width = `${elementWidth}px`;
}


// const activeTabstriggers = () => {
//     const gameTabs = document.querySelectorAll(".game-tabs");

//     gameTabs.forEach(block => {
//         let elementsItems = block.querySelectorAll(".game-tabs__button");
//         let itemsLength = elementsItems.length;
//         const activeLine = block.querySelector(".game-tabs__span");
        
//         function changeWidthLine() {
//             var elementsItems = block.querySelectorAll(".game-tabs__button");
//             activeLine.style.width = `${elementsItems[0].clientWidth}px`;
//         }

//         changeWidthLine();

//         function deleteActiveClass() {
//             elementsItems.forEach(item => item.classList.remove("active"));
//         }

//         function changeLeftStyle() {
//             var elementsItems = block.querySelectorAll(".game-tabs__button");
//             elementsItems.forEach((button, index) => {
//                 button.addEventListener("click", () => {
//                     deleteActiveClass();
//                     button.classList.add("active");
//                     activeLine.style.left = `${Math.floor((100 / itemsLength)) * index}%`;
//                     //activateLinesPaint();
//                 })
//             })
//         }

//         changeLeftStyle();

//         function updateWidth(length) {
//             console.log(length)
//             updateGridColumns(block, length);
//             changeWidthLine();
//         }



//         updateWidth(itemsLength);

//         const observer = new MutationObserver(() => {
//             elementsItems = block.querySelectorAll(".game-tabs__button");
//             itemsLength = elementsItems.length;
//             updateWidth(itemsLength);
//         });

//         const config = { childList: true };

//         observer.observe(block, config);
//     });
// }
const activeTabstriggers = () => {
    const gameTabs = document.querySelectorAll(".game-tabs");

    gameTabs.forEach(block => {
        let elementsItems = block.querySelectorAll(".game-tabs__button");
        let itemsLength = elementsItems.length;
        const activeLine = block.querySelector(".game-tabs__span");

        function changeWidthLine() {
            var elementsItems = block.querySelectorAll(".game-tabs__button");
            if (elementsItems.length > 0) {
                activeLine.style.width = `${elementsItems[0].clientWidth}px`;
            }
        }

        changeWidthLine();

        function deleteActiveClass() {
            elementsItems.forEach(item => item.classList.remove("active"));
        }

        function changeLeftStyle() {
            elementsItems.forEach((button, index) => {
                button.addEventListener("click", () => {
                    deleteActiveClass();
                    button.classList.add("active");
                    activeLine.style.left = `${(100 / itemsLength) * index}%`;
                    activateLinesPaint();
                });
            });
        }

        changeLeftStyle();

        function updateWidth(length) {
            console.log(length);
            updateGridColumns(block, length);
            changeWidthLine();
        }

        function updateActiveLinePosition() {
            elementsItems = block.querySelectorAll(".game-tabs__button");
            const activeButton = block.querySelector(".game-tabs__button.active");
            if (activeButton) {
                const index = Array.from(elementsItems).indexOf(activeButton);
                activeLine.style.left = `${(100 / itemsLength) * index}%`;
            } else if (elementsItems.length > 0) {
                elementsItems[0].classList.add("active");
                activeLine.style.left = `0%`;
            }
        }

        updateWidth(itemsLength);

        const observer = new MutationObserver(() => {
            elementsItems = block.querySelectorAll(".game-tabs__button");
            itemsLength = elementsItems.length;
            updateWidth(itemsLength);
            updateActiveLinePosition();
            changeLeftStyle();
        });

        const config = { childList: true, subtree: true };

        observer.observe(block, config);
        window.addEventListener("resize", changeWidthLine)
    });
}

document.addEventListener("DOMContentLoaded", activeTabstriggers);
document.addEventListener("DOMContentLoaded", activeTabstriggers);
/**All Pages */

activeAnimation();
activeCalendar();
headerFunctionSwipe();
activeSpollersResize();
activeTabstriggers();

import DynamicAdapt from "./modules/dynamicadapt.js";
const da = new DynamicAdapt("max");
da.init();
/*****************Home Function************** */
addGols();
activeSelectHomeHeaderBlock();
activeFunctionOffOn();



/*****************Game center function************** */



/*****************Dashboard function************** */


const inputs = document.querySelectorAll("input[type='number']");

inputs.forEach(input => {
    input.addEventListener("input", (event) => {
        const input = event.target;
        let value = input.value;
    
        // Разрешить только цифры и удалить всё остальное
        value = value.replace(/[^0-9]/g, '');
    
        // Ограничить ввод одним знаком
        if (value.length > 1) {
            value = value.charAt(0);
        }

        // Обновить значение input
        input.value = value;
    });
});





