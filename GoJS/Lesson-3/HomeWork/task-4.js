/**
 * Created by Authority on 21.06.2015.
 */
for (char = 1; char <= 100; char++){
    if (char % 3 == 0 && char % 5 == 0){
        console.log("fizzbuzz");
    } else {
        console.log(char);
    }
}