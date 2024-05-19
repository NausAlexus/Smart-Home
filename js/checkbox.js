document.querySelector('.check').addEventListener('change', function() {
    document.querySelector(".on-off-text").innerHTML = (`${this.checked ? 'On' : 'Off'}`);
    document.querySelector(".ico").style.stroke = (`${this.checked ? '#ebd834' : '#59637A'}`);
});

document.querySelector('.check2').addEventListener('change', function() {
    document.querySelector(".on-off-text2").innerHTML = (`${this.checked ? 'On' : 'Off'}`);
    document.querySelector(".ico2").style.stroke = (`${this.checked ? '#345beb' : '#59637A'}`);
});