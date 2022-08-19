// -------------- Java Script --------------------


// let getSel = (sel) => document.querySelector(sel);

// let progressBar = getSel('.circularProgress');
// let valueContainer = getSel('.valueContainer');

// let valueStart = 0;
// let valueEnd = 100;
// let speed = 100;

// let progress = setInterval(() => {
//     valueStart++;
//     console.log(valueStart);
//     progressBar.style.background = `conic-gradient(
//       #4d5bf9 ${valueStart*3.6}deg,
//  #cadcff ${valueStart*3.6}deg

// )`;
//     valueContainer.textContent = `${valueStart}%`;
//     if (valueStart == valueEnd) {
//         clearInterval(progress);
//     }
// }, speed)


// ------------------ JQUERY -------------------


$(document).ready(() => {

    let valueStart = 0;
    let valueEnd = 100;
    let speed = 100;

    let progress = setInterval(() => {
        valueStart++;
        $('.circularProgress').css({'background' : `conic-gradient(#4d5bf9 ${valueStart*3.6}deg, #cadcff ${valueStart*3.6}deg)`});
        $('.valueContainer').text(`${valueStart}%`);
        if (valueStart == valueEnd) {
            clearInterval(progress);
        }
    }, speed)

})