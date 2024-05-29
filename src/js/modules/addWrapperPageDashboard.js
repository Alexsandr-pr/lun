function addWrapperPageDashboard() {
    const contentWrapper = document.querySelector(".dashboard__body-content");
    const dashboardTable = document.querySelectorAll(".dashboard__table");


    function changeWidthWrapper() {
        try {
            const width = dashboardTable[0].clientWidth * dashboardTable.length;
            contentWrapper.style.width = `${width}px`;
            console.log(contentWrapper.style.width)
        } catch(e) {

        }
    }

    window.addEventListener("resize", changeWidthWrapper);

    changeWidthWrapper()

    
    $(function(){
        $(".wrapper1").scroll(function(){
            $(".wrapper2")
                .scrollLeft($(".wrapper1").scrollLeft());
        });
        $(".wrapper2").scroll(function(){
            $(".wrapper1")
                .scrollLeft($(".wrapper2").scrollLeft());
        });
    });
}

export default addWrapperPageDashboard