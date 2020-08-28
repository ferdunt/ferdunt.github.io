// *** JS Interactivity #1 ***

// Alert
const myAlert = document.querySelector('#myAlert');

myAlert.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> I actually have <strong>8</strong> personal projects but I will add more in the future :)</p>
    <p class="alert-banner-close">x</p>
</div>
`;

myAlert.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        myAlert.style.opacity = '0';
        setTimeout(() => {
            myAlert.style.display = 'none';
        }, 700);
    }
});

// *** JS Interactivity #2 ***

// Modal Window
const link = document.querySelector('.link-resources');
const closeNotification = document.querySelector('.my-close');
const content = document.querySelector('.content');

link.addEventListener('click', () => {
    document.getElementById("box").style.display = 'block';
    content.style.opacity = 0.5;
});

closeNotification.addEventListener('click', () => {
    document.getElementById("box").style.display = 'none';
    content.style.opacity = 1;
});