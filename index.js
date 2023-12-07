const input = document.querySelector('.input');

function inputHandler (event) {
  console.log( event.target.value)
}
// debounce function return's a function
function debounce (callback,delay) {
    let timerid;
    return function (...args) {
        clearTimeout(timerid)
        timerid = setTimeout( ()=>{
            callback(...args);
          },delay)
    }
}


const debounceInputHandler = debounce( inputHandler,1000)
input.addEventListener('keyup',debounceInputHandler);