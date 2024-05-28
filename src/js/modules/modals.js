function modal () {
    const dasnboardBlock = document.querySelectorAll(".dashboard-block__list");
    const modalDashboard = document.querySelector(".modals__wrapper");
    const modalsCloseButton = document.querySelector(".modals__close");

    dasnboardBlock.forEach(item => {
        item.addEventListener("click", () => {
            console.log("click")
            modalDashboard.classList.add("active")
        })
    })
    modalDashboard.addEventListener("click", (e) => {
        if(e.target.classList.contains("modals__wrapper")) {
            modalDashboard.classList.remove("active")
        }
    })
    modalsCloseButton.addEventListener("click", (e) => {
        modalDashboard.classList.remove("active")
    })
}

export default modal