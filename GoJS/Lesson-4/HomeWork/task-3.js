/**
 * Created by Authority on 01.07.2015.
 */
var someString = prompt('Type here something stupid', '');
function truncate (a) {
    if (a.length <= 20) {
        return a;
    } else {
        return a.slice(0, 21) + '...'
    }
}
alert(truncate(someString));