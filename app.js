function toast({
    title = '',
    message = '',
    type = '',
    duration = '' }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //auto remove toast
        const autoRemove=setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        //remove toast on click
        toast.onclick = function (e) {
            if (e.target.closest('.toast-close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: "fa-solid fa-circle-check",
            warning: "fa-solid fa-circle-exclamation",
            danger: "fa-solid fa-circle-radiation"
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideRtoL ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            `;
        main.appendChild(toast);
    }
}

function successToast() {
    toast({
        title: 'Success',
        message: 'abc',
        type: 'success',
        duration: 1000
    })
}

function warningToast() {
    toast({
        title: 'Warning',
        message: 'abc',
        type: 'warning',
        duration: 3000
    })
}

function dangerToast() {
    toast({
        title: 'Danger',
        message: 'abc',
        type: 'danger',
        duration: 3000
    })
}

const btnSuccess = document.querySelector(".btn--success");
const btnWarning = document.querySelector(".btn--warning");
const btnDanger = document.querySelector(".btn--danger");
btnSuccess.addEventListener('click', successToast);
btnWarning.addEventListener('click', warningToast);
btnDanger.addEventListener('click', dangerToast);