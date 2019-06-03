
document.addEventListener('DOMContentLoaded', function () {  
     var handler = function () {
    // Searching for all boxes with class .top
    nodes = document.querySelectorAll('.top');
    nodes.forEach(function (node) {
        // removing the class .top from each node
        node.classList.remove('top');
        
    })   
    // console.log(this)       
    this.classList.add('top');
}   
boxes = document.querySelectorAll('.box');
boxes.forEach(function (box) {
    // console.log('box', box)
    box.addEventListener('click', handler);
})
});


// var upkey = document.querySelector('up');

// upkey.addEventListener('click',function(){
//     var target = this.parentNode;
//     var curTop = getComputedStyle(target).margin-left; // "123px"
//     var newTop = parseInt(curTop) + 10 + 'px';
//     target.style.top = newTop;
// });