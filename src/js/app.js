import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


import burgerMenu from "./ui/burger.js";
burgerMenu();


import  accordion  from "./ui/accordion.js";
accordion();

//import tabs from "./ui/tabs.js";
//tabs(triggerClass, contentClass);

//import DynamicAdapt from "./modules/dynamicadapt.js";
//const da = new DynamicAdapt("max");
//da.init();


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


// импорт модуля форм
import forms from "./modules/forms.js";
forms();



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


const searchNutton = document.querySelector(".header__button-search");
const formMobile = document.querySelector(".header__form");
const ham3 = document.querySelector(".ham3")

searchNutton.addEventListener("click" , () => {
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
/*
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
        fromMobile.classList.remove("active")
        document.body.style.overflow = "";
       
        deleteClass();
    } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
        
        // Swipe left

    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
        // Swipe up
        fromMobile.classList.remove("active")
        
        
        
    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
        // Swipe down
    }
}
*/


let startX;
let startY;
let endX;
let endY;
let isSwiping = false;


function touchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    isSwiping = true;
}

function touchMove(event) {
    if (!isSwiping) return;
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;

    let deltaX = endX - startX;
    let deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
        // Swipe left - dynamically update 'right' property
        let newRight = Math.min(0, -120 + (deltaX / window.innerWidth) * 120) + '%';
        aside.style.right = newRight;
    }
}

function touchEnd(event) {
    isSwiping = false;
    let deltaX = endX - startX;
    let deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
        // Swipe right
        aside.classList.remove("active");
        document.body.style.overflow = "";
        deleteClass();
    } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
        // Swipe left
        aside.classList.add("active");
    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
        // Swipe up
        aside.classList.remove("active");
    } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
        // Swipe down
    }

    aside.style.right = ''; // Reset right style after swipe ends
}

document.addEventListener('touchstart', touchStart);
document.addEventListener('touchmove', touchMove);
document.addEventListener('touchend', touchEnd);

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


try {
    const containersColunms = document.querySelectorAll(".team-span__number-gol");

    containersColunms.forEach(item => {
        const items = item.children.length;
        const columns = Math.ceil(items / 2);
    
        item.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
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


    const linups =  [
        {
            "CompNum": 1,
            "Status": "Confirmed",
            "Formation": "4-3-3",
            "HasFieldPositions": true,
            "HasRankings": true,
            "HasPlayerStats": true,
            "DoubtfulTitle": "Doubtful",
            "players": [
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 100,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 0,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 223,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                }
            ]
        },
        {
            "CompNum": 2,
            "Status": "Confirmed",
            "Formation": "5-4-1",
            "HasFieldPositions": true,
            "HasRankings": true,
            "HasPlayerStats": true,
            "DoubtfulTitle": "Doubtful",
            "players": [
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 150,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 100,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 40,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 0,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                },
                {
                    "CompetitorNum": 1,
                    "JerseyNum": 1,
                    "PlayerName": "Matt Turner",
                    "PlayerSName": "Turner",
                    "PID": 3071680,
                    "AthleteID": 47807,
                    "Position": 1,
                    "FormationPosition": 1,
                    "Line": 1,
                    "FieldPosition": 1,
                    "Y": 223,
                    "X": 0,
                    "Status": 1,
                    "PlayerNum": 10,
                    "PopularityRank": 0,
                    "Nationality": 18,
                    "CompetitorID": 29
                }
            ]
        }
    ]

const contentPole = document.querySelector(".pole__content");

function pushPlayers(playersArray, key, index) {
    
    const div1 = document.createElement("div");
    div1.classList.add("player-block");

    if(index === 0) {
            div1.style.cssText = ` 
            position:absolute;
            top: ${+key + 71}px;    
        `
    } else {
        div1.style.cssText = ` 
        position:absolute;
        bottom: ${+key + 71}px;    
    `
    }
    let color = index === 0 ? "#115E2A" : "#FF4848"
    

    for(let i = 0; i < playersArray.length; i++) {
        const player = playersArray[i];

        
        const div = document.createElement("div");
        div.classList.add("player");

        div.innerHTML = `
            <p class="player__name">${player.PlayerName}</p>
            <div class="player__block">
                <span class="player__number">${player.PlayerNum}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path class="player__bg" d="M1.9481 9.63337L1.51953 2.34766H23.3767V9.2048L19.9481 9.63337V22.0619H4.9481V9.63337H1.9481Z" fill="${color}"/>
                    <path  d="M22.5499 0.950195H2.34581C1.84563 0.950056 1.36563 1.14745 1.01026 1.49943C0.654888 1.85141 0.452899 2.32949 0.448242 2.82964V8.64838C0.448242 9.6844 1.30643 10.5651 2.34581 10.5651H3.95135V21.6339C3.95135 22.6296 4.74461 23.4595 5.73681 23.4595H19.1266C19.6082 23.4532 20.0681 23.2586 20.408 22.9174C20.7479 22.5762 20.9408 22.1155 20.9452 21.6339V10.5651H22.5499C23.5893 10.5651 24.4483 9.68433 24.4483 8.64838V2.82964C24.4435 2.32939 24.2413 1.85129 23.8858 1.49933C23.5302 1.14737 23.0501 0.950015 22.5499 0.950195ZM15.313 2.73902C15.1319 3.3607 14.754 3.90686 14.2361 4.29547C13.7182 4.68408 13.0881 4.89415 12.4406 4.89415C11.7931 4.89415 11.1631 4.68408 10.6452 4.29547C10.1272 3.90686 9.74937 3.3607 9.56831 2.73902H15.313ZM22.6594 8.64838C22.6594 8.68378 22.5883 8.70175 22.5499 8.70175H20.0102C19.7661 8.70516 19.5328 8.80325 19.3596 8.97534C19.1864 9.14743 19.0868 9.38006 19.0818 9.62418V21.6707H5.74017V9.62418C5.7417 9.38296 5.6481 9.15086 5.47965 8.97819C5.31121 8.80552 5.0815 8.70619 4.84032 8.70175H2.34581C2.3075 8.70175 2.23706 8.68378 2.23706 8.64838V2.82964C2.23706 2.79901 2.30332 2.73902 2.34581 2.73902H7.71561C8.11273 5.04957 10.0804 6.70013 12.4411 6.70013C14.8018 6.70013 16.769 5.04957 17.1665 2.73902H22.5506C22.5932 2.73902 22.6602 2.79864 22.6602 2.82964L22.6594 8.64838Z" fill="white"/>
                </svg>
                <span class="player__minute">
                    4
                </span>
            </div>
        `
        if(index === 0 ){
            div.style.flexDirection = 'column-reverse'
        }

        div1.appendChild(div)
    }

    contentPole.appendChild(div1)
    
}

const groupPlayersByY = (players) => {
    return players.reduce((acc, player) => {
        if (!acc[player.Y]) {
            acc[player.Y] = [];
        }
        acc[player.Y].push(player);
        return acc;
    }, {});
};


linups.forEach(({players}, index) => {
    const array = groupPlayersByY(players);

    for(let key in array) {
        pushPlayers(array[key], key, index);
    }

})
