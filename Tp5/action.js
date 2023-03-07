const notificatoin = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");
const remove = document.querySelector(".fa-solid .fa-xmark");


const toastDetails = {
    Timer: 5000,
    seccuss:{
        icon:"fa-circle-check",
        text:"Success : This is a success toast.",
    },
    error:{
        icon:"fa-circle-xmark",
        text:"Error : This is a error toast.",
    },
    warning:{
        icon:"fa-triangle-exclamation",
        text:"Warning : This is a warning toast.",
    },
    info:{
        icon:"fa-circle-exclamation",
        text:"Info : This is a info toast."
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500);
    if(toast.timeoutId){
        clearTimeout(toast.timeoutId);
    }
}

const creayteToast = (id) => {
    const { icon , text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i> `;
    notificatoin.appendChild(toast);
    toast.timeoutId =  setTimeout(() => removeToast(toast), toastDetails.Timer);          
}
buttons.forEach(btn => {
    btn.addEventListener("click" , () => creayteToast(btn.id));
});