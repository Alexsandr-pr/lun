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


const data = [
    {
        "Players": [
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
            "X": 50,
            "Status": 1,
            "PlayerNum": 10,
            "PopularityRank": 0,
            "ImgVer": 56,
            "Ranking": 5.9,
            "HasStats": true,
            "Nationality": 18,
            "CompetitorID": 29
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 15,
            "PlayerName": "DeJuan Jones",
            "PlayerSName": "D. Jones",
            "PID": 13529580,
            "AthleteID": 65712,
            "Position": 2,
            "FormationPosition": 3,
            "Line": 2,
            "FieldPosition": 2,
            "Y": 33,
            "X": 0,
            "Status": 1,
            "PlayerNum": 18,
            "PopularityRank": 0,
            "ImgVer": 14,
            "Ranking": 7.6,
            "HasStats": true,
            "Nationality": 18,
            "CompetitorID": 1337
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 20,
            "PlayerName": "Jalen Neal",
            "PlayerSName": "Neal",
            "PID": 57337687,
            "AthleteID": 91020,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 2,
            "FieldPosition": 3,
            "Y": 33,
            "X": 33,
            "Status": 1,
            "SubstitutedPlayer": 4,
            "SubstituteTime": 73.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 21,
            "PopularityRank": 0,
            "ImgVer": 9,
            "Ranking": 6.5,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_20_73",
            "CompetitorID": 1342
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 12,
            "PlayerName": "Miles Robinson",
            "PlayerSName": "Robinson",
            "PID": 3130521,
            "AthleteID": 47895,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 2,
            "FieldPosition": 4,
            "Y": 33,
            "X": 66,
            "Status": 1,
            "SubstitutedPlayer": 3,
            "SubstituteTime": 90.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 11,
            "PopularityRank": 0,
            "ImgVer": 20,
            "Ranking": 5.7,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_12_90",
            "CompetitorID": 25287
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 5,
            "PlayerName": "Bryan Reynolds",
            "PlayerSName": "Reynolds",
            "PID": 2810327,
            "AthleteID": 68383,
            "Position": 2,
            "FormationPosition": 6,
            "Line": 2,
            "FieldPosition": 5,
            "Y": 33,
            "X": 100,
            "Status": 1,
            "SubstitutedPlayer": 10,
            "SubstituteTime": 113.0,
            "SubstituteType": 2,
            "SubstituteStatus": 10,
            "PlayerNum": 9,
            "PopularityRank": 0,
            "ImgVer": 40,
            "Ranking": 6.5,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_5_113",
            "CompetitorID": 1176
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 14,
            "PlayerName": "Djordje Mihailovic",
            "PlayerSName": "Mihailovic",
            "PID": 3246166,
            "AthleteID": 47931,
            "Position": 3,
            "FormationPosition": 9,
            "Line": 3,
            "FieldPosition": 6,
            "Y": 66,
            "X": 0,
            "Status": 1,
            "SubstitutedPlayer": 19,
            "SubstituteTime": 73.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 14,
            "PopularityRank": 0,
            "ImgVer": 19,
            "Ranking": 6.4,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_14_73",
            "CompetitorID": 1340
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 8,
            "PlayerName": "James Sands",
            "PlayerSName": "Sands",
            "PID": 4126945,
            "AthleteID": 51280,
            "Position": 3,
            "FormationPosition": 8,
            "Line": 3,
            "FieldPosition": 7,
            "Y": 66,
            "X": 50,
            "Status": 1,
            "PlayerNum": 16,
            "PopularityRank": 0,
            "ImgVer": 28,
            "Ranking": 6.6,
            "HasStats": true,
            "Nationality": 18,
            "CompetitorID": 20622
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 6,
            "PlayerName": "Gianluca Busio",
            "PlayerSName": "Busio",
            "PID": 5920603,
            "AthleteID": 58797,
            "Position": 3,
            "FormationPosition": 8,
            "Line": 3,
            "FieldPosition": 8,
            "Y": 66,
            "X": 100,
            "Status": 1,
            "PlayerNum": 17,
            "PopularityRank": 0,
            "ImgVer": 24,
            "Ranking": 7.6,
            "HasStats": true,
            "Nationality": 18,
            "CompetitorID": 308
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 17,
            "PlayerName": "Alejandro Zendejas",
            "PlayerSName": "Zendejas",
            "PID": 641598,
            "AthleteID": 15858,
            "Position": 4,
            "FormationPosition": 12,
            "Line": 4,
            "FieldPosition": 11,
            "Y": 99,
            "X": 100,
            "Status": 1,
            "SubstitutedPlayer": 11,
            "SubstituteTime": 63.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 6,
            "PopularityRank": 12,
            "ImgVer": 9,
            "Ranking": 6.6,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_17_63",
            "CompetitorID": 1255
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 9,
            "PlayerName": "Jesus Ferreira",
            "PlayerSName": "Ferreira",
            "PID": 3373086,
            "AthleteID": 59405,
            "Position": 4,
            "FormationPosition": 12,
            "Line": 4,
            "FieldPosition": 10,
            "Y": 99,
            "X": 50,
            "Status": 1,
            "PlayerNum": 15,
            "PopularityRank": 0,
            "ImgVer": 6,
            "Ranking": 7.3,
            "HasStats": true,
            "Nationality": 18,
            "CompetitorID": 1341
          },
          {
            "CompetitorNum": 1,
            "JerseyNum": 22,
            "PlayerName": "Julian Gressel",
            "PlayerSName": "Gressel",
            "PID": 3242883,
            "AthleteID": 47900,
            "Position": 3,
            "FormationPosition": 8,
            "Line": 4,
            "FieldPosition": 9,
            "Y": 99,
            "X": 0,
            "Status": 1,
            "SubstitutedPlayer": 13,
            "SubstituteTime": 90.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 12,
            "PopularityRank": 0,
            "ImgVer": 26,
            "Ranking": 6.2,
            "HasStats": true,
            "Nationality": 18,
            "PBPEventKey": "subs_1_22_90",
            "CompetitorID": 54729
          }
        ],
        "CompNum": 1,
        "Status": "Confirmed",
        "Formation": "4-3-3",
        "HasFieldPositions": true,
        "HasRankings": true,
        "HasPlayerStats": true,
        "DoubtfulTitle": "Doubtful"
    },
    {
        "Players": [
          {
            "CompetitorNum": 2,
            "JerseyNum": 1,
            "PlayerName": "Dayne St Clair",
            "PlayerSName": "Dayne",
            "PID": 14984045,
            "AthleteID": 65727,
            "Position": 1,
            "FormationPosition": 1,
            "Line": 1,
            "FieldPosition": 1,
            "Y": 0,
            "X": 50,
            "Status": 1,
            "PlayerNum": 15,
            "PopularityRank": 0,
            "ImgVer": 16,
            "Ranking": 7.5,
            "HasStats": true,
            "Nationality": 66,
            "CompetitorID": 12208
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 4,
            "PlayerName": "Kamal Miller",
            "PlayerSName": "Miller",
            "PID": 14514289,
            "AthleteID": 65631,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 2,
            "FieldPosition": 3,
            "Y": 33,
            "X": 25,
            "Status": 1,
            "PlayerNum": 13,
            "PopularityRank": 0,
            "ImgVer": 13,
            "Ranking": 6.8,
            "HasStats": true,
            "Nationality": 66,
            "CompetitorID": 5916
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 5,
            "PlayerName": "Steven Vitoria",
            "PlayerSName": "Vitoria",
            "PID": 279404,
            "AthleteID": 7750,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 2,
            "FieldPosition": 4,
            "Y": 33,
            "X": 50,
            "Status": 1,
            "PlayerNum": 2,
            "PopularityRank": 0,
            "ImgVer": 3,
            "Ranking": 8.1,
            "HasStats": true,
            "Nationality": 66,
            "CompetitorID": 922
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 15,
            "PlayerName": "Zac McGraw",
            "PlayerSName": "McGraw",
            "PID": 50175620,
            "AthleteID": 78895,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 2,
            "FieldPosition": 5,
            "Y": 33,
            "X": 75,
            "Status": 1,
            "SubstitutedPlayer": 23,
            "SubstituteTime": 90.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 19,
            "PopularityRank": 0,
            "ImgVer": 14,
            "Ranking": 6.6,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_15_90",
            "CompetitorID": 5916
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 22,
            "PlayerName": "Richie Laryea",
            "PlayerSName": "Laryea",
            "PID": 2992754,
            "AthleteID": 47835,
            "Position": 2,
            "FormationPosition": 6,
            "Line": 2,
            "FieldPosition": 6,
            "Y": 33,
            "X": 100,
            "Status": 1,
            "PlayerNum": 8,
            "PopularityRank": 0,
            "ImgVer": 17,
            "Ranking": 6.1,
            "HasStats": true,
            "Nationality": 66,
            "CompetitorID": 1336
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 14,
            "PlayerName": "Moise Bombito",
            "PlayerSName": "Bombito",
            "PID": 67772811,
            "AthleteID": 127464,
            "Position": 2,
            "FormationPosition": 5,
            "Line": 3,
            "FieldPosition": 8,
            "Y": 66,
            "X": 50,
            "Status": 1,
            "SubstitutedPlayer": 3,
            "SubstituteTime": 60.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 26,
            "PopularityRank": 0,
            "ImgVer": 8,
            "Ranking": 6.3,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_14_60",
            "CompetitorID": 1340
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 21,
            "PlayerName": "Jonathan Osorio",
            "PlayerSName": "Osorio",
            "PID": 502405,
            "AthleteID": 16289,
            "Position": 3,
            "FormationPosition": 7,
            "Line": 3,
            "FieldPosition": 9,
            "Y": 66,
            "X": 80,
            "Status": 1,
            "PlayerNum": 5,
            "PopularityRank": 0,
            "ImgVer": 9,
            "Ranking": 6.1,
            "HasStats": true,
            "Nationality": 66,
            "CompetitorID": 1336
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 11,
            "PlayerName": "Liam Millar",
            "PlayerSName": "Millar",
            "PID": 4289559,
            "AthleteID": 65181,
            "Position": 4,
            "FormationPosition": 11,
            "Line": 3,
            "FieldPosition": 7,
            "Y": 66,
            "X": 20,
            "Status": 1,
            "SubstitutedPlayer": 19,
            "SubstituteTime": 86.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 10,
            "PopularityRank": 0,
            "ImgVer": 17,
            "Ranking": 6.3,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_11_86",
            "CompetitorID": 23
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 10,
            "PlayerName": "Junior Hoilett",
            "PlayerSName": "Hoilett",
            "PID": 472411,
            "AthleteID": 4350,
            "Position": 4,
            "FormationPosition": 11,
            "Line": 4,
            "FieldPosition": 10,
            "Y": 99,
            "X": 25,
            "Status": 1,
            "SubstitutedPlayer": 13,
            "SubstituteTime": 86.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 4,
            "PopularityRank": 1,
            "ImgVer": 20,
            "Ranking": 6.4,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_10_86",
            "CompetitorID": 761
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 20,
            "PlayerName": "Ali Ahmed",
            "PlayerSName": "Ahmed",
            "PID": 67640085,
            "AthleteID": 127270,
            "Position": 2,
            "FormationPosition": 3,
            "Line": 2,
            "FieldPosition": 2,
            "Y": 33,
            "X": 0,
            "Status": 1,
            "SubstitutedPlayer": 8,
            "SubstituteTime": 73.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 25,
            "PopularityRank": 0,
            "ImgVer": 9,
            "Ranking": 6.8,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_20_73",
            "CompetitorID": 8389
          },
          {
            "CompetitorNum": 2,
            "JerseyNum": 9,
            "PlayerName": "Lucas Cavallini",
            "PlayerSName": "Cavallini",
            "PID": 541741,
            "AthleteID": 46894,
            "Position": 4,
            "FormationPosition": 12,
            "Line": 4,
            "FieldPosition": 11,
            "Y": 99,
            "X": 75,
            "Status": 1,
            "SubstitutedPlayer": 17,
            "SubstituteTime": 72.0,
            "SubstituteType": 2,
            "SubstituteStatus": 8,
            "PlayerNum": 7,
            "PopularityRank": 0,
            "ImgVer": 11,
            "Ranking": 6.3,
            "HasStats": true,
            "Nationality": 66,
            "PBPEventKey": "subs_2_9_72",
            "CompetitorID": 1252
          }
        ],
        "CompNum": 2,
        "Status": "Confirmed",
        "Formation": "5-3-2",
        "HasFieldPositions": true,
        "HasRankings": true,
        "HasPlayerStats": true,
        "DoubtfulTitle": "Doubtful"
    }
]

function pushPlayersPole(data){
    data.forEach((item, index) => {
        const players = item.Players;
        players.forEach((player, i) => {
            cteatePlayer(player, index);
        })
    })
}

class PlayerCreate {
    constructor(playerName, color, playerNumber, playerMinute, positionX, positionY, positionComand) {
        this.playerName = playerName;
        this.color = color;
        this.playerNumber = playerNumber;
        this.playerMinute = playerMinute;
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionComand = positionComand;
    }

    createPlayer(){
        const div = document.createElement("div");
        div.classList.add("player");
        
        if(this.positionComand === 0){
            div.style.cssText = `
                left: calc(${this.positionX}% - 39px);
                top: calc(${this.positionY}% - ${this.positionY === 0 ? "20px" : "50px"});
            `
        }else {
            div.style.cssText = `
                left: calc(${this.positionX}% - 39px);
                bottom: calc(${this.positionY}% - ${this.positionY === 0 ? "20px" : "50px"});
            `
        }

        div.innerHTML = `
                <p class="player__name">${this.playerName}</p>
                <div class="player__block">
                    <span class="player__number">${this.playerNumber}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path class="player__bg" d="M1.9481 9.63337L1.51953 2.34766H23.3767V9.2048L19.9481 9.63337V22.0619H4.9481V9.63337H1.9481Z" fill="${this.color}"/>
                        <path d="M22.5499 0.950195H2.34581C1.84563 0.950056 1.36563 1.14745 1.01026 1.49943C0.654888 1.85141 0.452899 2.32949 0.448242 2.82964V8.64838C0.448242 9.6844 1.30643 10.5651 2.34581 10.5651H3.95135V21.6339C3.95135 22.6296 4.74461 23.4595 5.73681 23.4595H19.1266C19.6082 23.4532 20.0681 23.2586 20.408 22.9174C20.7479 22.5762 20.9408 22.1155 20.9452 21.6339V10.5651H22.5499C23.5893 10.5651 24.4483 9.68433 24.4483 8.64838V2.82964C24.4435 2.32939 24.2413 1.85129 23.8858 1.49933C23.5302 1.14737 23.0501 0.950015 22.5499 0.950195ZM15.313 2.73902C15.1319 3.3607 14.754 3.90686 14.2361 4.29547C13.7182 4.68408 13.0881 4.89415 12.4406 4.89415C11.7931 4.89415 11.1631 4.68408 10.6452 4.29547C10.1272 3.90686 9.74937 3.3607 9.56831 2.73902H15.313ZM22.6594 8.64838C22.6594 8.68378 22.5883 8.70175 22.5499 8.70175H20.0102C19.7661 8.70516 19.5328 8.80325 19.3596 8.97534C19.1864 9.14743 19.0868 9.38006 19.0818 9.62418V21.6707H5.74017V9.62418C5.7417 9.38296 5.6481 9.15086 5.47965 8.97819C5.31121 8.80552 5.0815 8.70619 4.84032 8.70175H2.34581C2.3075 8.70175 2.23706 8.68378 2.23706 8.64838V2.82964C2.23706 2.79901 2.30332 2.73902 2.34581 2.73902H7.71561C8.11273 5.04957 10.0804 6.70013 12.4411 6.70013C14.8018 6.70013 16.769 5.04957 17.1665 2.73902H22.5506C22.5932 2.73902 22.6602 2.79864 22.6602 2.82964L22.6594 8.64838Z" fill="white"/>
                    </svg>
                    <span class="player__minute">
                        ${this.playerMinute}
                    </span>
                </div>
            `
        return div;
    }
}

const bodyRectangle = document.querySelectorAll("[data-pole]");

function cteatePlayer(player, indexComand) {
    let color = indexComand === 0 ? "#115E2A" : "#FF4848"
    
    const playerDiv = new PlayerCreate(
        player.PlayerName,
        color,
        player.Position,
        3,
        player.X,
        player.Y,
        indexComand
    ).createPlayer();

    playerDiv.style.flexDirection = "column-reverse";
    bodyRectangle[indexComand].appendChild(playerDiv);
}


pushPlayersPole(data)

