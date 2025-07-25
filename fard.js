let fard = document.getElementById("fard");

console.log(window.location.pathname)

fard.src = `fards/vf_${window.location.pathname.shift(1)}.jpg`