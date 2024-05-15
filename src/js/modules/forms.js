


const forms = (state) => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("form > button");
    //checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    const postData = async (url, data)=> {
        button.setAttribute("disabled", true);
        document.querySelector(".block-loading").style.display = "block";
        
        let res = await fetch(url, {
        
            method: "POST",
            
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
    
        inputs.forEach(item => {
        
            item.value = "";
        });
    };

    form.forEach(item => {
    
        item.addEventListener("submit", (e) => {
            

            e.preventDefault();
        
            let statusMessage = document.createElement('div');

            statusMessage.classList.add("status");
            
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            /*
            if(item.getAttribute("data-calc") === "end") {
                
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }
            */
            postData("files/mail.php", formData)
        
                .then(res => {
                    console.log(res);
                    document.querySelector(".block-loading").style.display = "none";
                    statusMessage.textContent = message.success;
                    
                    button.removeAttribute("disabled");
                })

                .catch(() => statusMessage.textContent = message.failure)
            
                .finally(()=> {
                
                    clearInputs();
                
                    setTimeout(() => {
                        statusMessage.remove();
                    
                    }, 2000);
                });
        });
    });
};

export default forms;

//const form = document.querySelector("form")


/*
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
    const userEmail = "exampleexample.com";



/*
form.addEventListener("submit" , (e)=> {
    e.preventDefault();

    const data = new FormData(form);
    
    async function postResource(data) {
        let response = await fetch("files/mail.php", {
            method: "POST",
            body:  data
        });
        const button = document.querySelector("form > button");
        button.setAttribute("disabled", "disabled");
        
        if(response.status === 200) {
            console.log("true")
            
            form.reset();
            button.removeAttribute("disabled");
        }
    }
    postResource(data);

});
*/
/*
const forms = document.querySelectorAll("form");
            forms.forEach(item => {
                postData(item);
            });
        const message = {
            loading : "Загрузка", 
            success: "Спасибо! Мы скоро с вами свяжемся свяжемся",
            failure: "  Что-то пошло не так"
        };
function postData(form) {
    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        const statusMessage = document.createElement("div");
        statusMessage.classList.add("status");
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const formData = new FormData(form);

        fetch("files/mail.php", {
            method: "POST",
            body:  formData
        })
        .then(data => data.text())
        .then(data => {
            console.log(data)
            
            statusMessage.textContent = message.success;
            form.reset();
            setTimeout(()=> {
                statusMessage.remove();
            }, 2000);
        }).catch(()=> {
            statusMessage.textContent = message.failure;
        }).finally(() => {
            form.reset();
        });
    });
}
*/
/*
async function formSend(e) {
    e.preventDefault();

    let response = await fetch("" , {

        method: "POST",

        body: formData
    });
    if(response.ok) {

        let result = await response.json();

        alert(result.message);

        form.reset();

    }
}
*/