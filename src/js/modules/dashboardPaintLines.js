

function dashboardCreateLine(element) {
        
        const arrayChildren = element.querySelectorAll(".dashboard__table");
        let number ;
        if(arrayChildren.length === 3) {
            number = 33;
        }
        if(arrayChildren.length === 2) {
            number = 50;
        }
        arrayChildren.forEach(item => {
            
                item.style.cssText = `
                flex: 0 1 ${number}%;
            `
            
        })

        const createDiv = (clazz) => {
            const div = document.createElement("div");
            div.innerHTML = `<div  class="${clazz}"></div>`; 
            return div;
        }

        const createTopSvg = (height, clazz) => {
            const div = document.createElement("div");
            div.innerHTML = `<div style="height: ${height}px;" class="${clazz}"></div>`;
            return div;
        }
        
        function createLeftSvg(block, i, dasnboardTable){
            if(!(i === dasnboardTable.length - 1)) {
                if(i === dasnboardTable.length - 2) {
                    block.appendChild(createDiv("element-setka-last"))
                } else {
                    block.appendChild(createDiv("element-setka"))
                }
            }
        }

        function createOffsets(dasboardTable) {
            const offsets = [];
        
            dasboardTable.forEach((table) => {
                const blocksTable = table.querySelectorAll(".dashboard-block");
                let arrayHeight = [];
    
                if (blocksTable.length >= 2) {
                    arrayHeight.push(blocksTable[0].offsetTop);
                    arrayHeight.push(blocksTable[1].offsetTop);
                    const offset = (arrayHeight[1] - arrayHeight[0]) / 2;
                    offsets.push(offset);
                }
            });
            return offsets;
        }
    
        function addBorder() {
            const dasnboardTable = element.querySelectorAll(".dashboard-table__items");
            const offsets =  createOffsets(dasnboardTable)
            
            for(let i = 0; i < dasnboardTable.length; i++){
    
                const table = dasnboardTable[i];
    
                const blocksTable = table.querySelectorAll(".dashboard-block"); 
                
                blocksTable.forEach(block => {
                    if(dasnboardTable.length === i + 1) {
                        block.appendChild(createDiv("svg-dashboard-last"))
                    }
                })

                const nextTable = dasnboardTable[i + 1];
                if(i !== dasnboardTable.length - 2) {
                    if (nextTable) {
                        
                        const nextBlocks = nextTable.querySelectorAll(".dashboard-block");
                        
                        const nextOffset = offsets[i];
                        
                        nextBlocks.forEach((block, index) => {
                            block.appendChild(createTopSvg(nextOffset + 3, "svg-dashboard-bottom"));
                            block.appendChild(createTopSvg(nextOffset + 2, "svg-dashboard-top"));
                        });
                    }
                }
                
                blocksTable.forEach(block => {
                    createLeftSvg(block, i, dasnboardTable)
                })
            }
        }
        addBorder()
    
}

export default dashboardCreateLine