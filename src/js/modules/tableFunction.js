function tableActivation() {
    const tableRow = document.querySelectorAll(".table-block__row");

    tableRow.forEach(item => {
        item.addEventListener("click", () => {

            if(item.classList.contains("_active")) {
                item.classList.remove("_active");
            } else {
                tableRow.forEach(item => {
                    item.classList.remove("_active")
                })
    
                item.classList.add("_active");
            }
            
            
        })
    })
}

export default tableActivation