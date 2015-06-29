/**
 * Created by Authority on 20.06.2015.
 */
anchor: for(prime = 2; prime < 20; prime++){
    for (check = 2; check < prime; check++) {
        if (prime % check == 0) continue anchor;
    }
    alert(prime);
}