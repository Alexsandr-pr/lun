


function addBorderToScrollTable(selector) {
    const blockAddActiveObserver = document.querySelectorAll(".table-block")
    const tableBorders = document.querySelectorAll(selector);
    
    function observerLeftTarget() {
        try {
            let state = false;
            let left = 0;
            tableBorders.forEach((border, i) => {
                const target = border.querySelector('.comand__text'); 

                border.addEventListener("scroll", () => {
                    const rect = target.getBoundingClientRect();
                    if(!state) {
                        left = rect.left
                        state = true;
                    }
                    if(rect.left < left) {
                        blockAddActiveObserver[i].classList.add("_active")
                    } else {
                        blockAddActiveObserver[i].classList.remove("_active")
                    }
                })
            });
        } catch(e) {

        }
    }
    observerLeftTarget();
}

export default addBorderToScrollTable;