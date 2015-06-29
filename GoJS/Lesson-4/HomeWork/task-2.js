/**
 * Created by Authority on 18.06.2015.
 */
var a = prompt('Enter smth', '');
function checkSpam(n) {
    n.toLowerCase();
    if (n.indexOf('spam') == -1) {
        alert(n)
    } else if (n.indexOf('sex') == -1) {
        alert(n)
    }
    else {
        alert('Spam detected!!!')
    }
}
alert(checkSpam(a));