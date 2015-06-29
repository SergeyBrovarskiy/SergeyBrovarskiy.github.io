/**
 * Created by Authority on 21.06.2015.
 */
function pow(x, y) {
    var blabla = x;
    for (i = 1; i < y; i++){
        blabla = blabla * x;
    }
    return blabla
}
var x = +prompt('Enter a number', ''),
    y = +prompt('Enter a degree', '');

if (x == 0) {
    alert('Wrong number!')
} else if (y == 1) {
    alert (x)
} else if(y == 0) {
    alert(1)
} else {
    alert (pow(x, y))
}
