console.log('Loaded!');

// Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    madi.style.marginLeft = marginLeft + 'px';
}
madi.onclick = function () {
    var interval = setInterval(moveRight, 100);
    madi.style.marginLeft = '100px';
};