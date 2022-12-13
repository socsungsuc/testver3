function ktnt (n) {
    if (n < 2){
        return false;
    }
    else {
        for (var i = 2; i < n-1; i++){
            if (n%i == 0){
                return false;
            }
        }
    }
    return true;
}

console.log(ktnt(8))