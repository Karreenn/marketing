const img = document.querySelector('.slide');
const controls = document.querySelectorAll('.slide-control');

for(let i=0; i<controls.length; i++) {
    controls[i].addEventListener('click', function(e) {
        document.querySelector('.controls .active').classList.remove('active');
        controls[i].classList.add('active');
        img.src = e.target.dataset.src;
    })
}