const successMsg = 'Thành Công';
const errorMsg = 'Lỗi'; 
const inforMsg = 'Thông tin'; 
const warningMsg = 'Cảnh báo';


const toastBox = document.getElementById('toast-box');
const duration = 4000;
const fadeTime = 400;

function showToast(message, type = "info") {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: '<i class="fa-solid fa-circle-check"></i>',
        error: '<i class="fa-solid fa-circle-xmark"></i>',
        info: '<i class="fa-solid fa-circle-info"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation"></i>'
    };

    toast.innerHTML = `${icons[type] || ""} ${message}`;

    toastBox.appendChild(toast);

    if (toastBox.children.length >= 5) {
        toastBox.removeChild(toastBox.firstChild);
    }


    setTimeout(() => {
        toast.classList.add('hide');
    }, duration - fadeTime);    

    setTimeout(() => {
        toast.remove();
    }, duration);
}