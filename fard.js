let fard = document.getElementById("fard");

console.log(window.location.pathname.shift(1))

fard.src = `fards/vf_${window.location.pathname.shift(1)}.jpg`