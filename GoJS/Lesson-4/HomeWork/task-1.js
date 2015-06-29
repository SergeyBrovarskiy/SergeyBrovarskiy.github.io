/**
 * Created by Authority on 17.06.2015.
 */
function fib(n) {
    var present = 1, previous = 0, future = 0;
    for (count = 1; count <= n-1; count++) {
        future = present + previous;
        previous = present;
        present = future;
    }
    return future;
}
console.log(fib(7));
