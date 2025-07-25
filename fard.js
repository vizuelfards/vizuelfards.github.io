let fard = document.getElementById("fard");

console.log(window.location.pathname.slice(1))

fard.src = `fards/vf_${window.location.pathname.slice(1)}.jpg`