const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


let allSpans = document.querySelectorAll('span')

for (i = 0; i < colors.length; i++) {
    allSpans[i].style.color = colors[i]
}
// let i = 0
// for (let span of allSpans) {
//     span.style.color = colors[i]
//     i++
// }
