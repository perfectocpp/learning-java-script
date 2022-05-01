var year = 100

if (year % 4 == 0){
    if (year % 100 == 0 && year % 400 != 0){
        console.log("year is 3/4")
    } else{
        console.log("year is 1/4")
    }
} else {
    console.log("year is 3/4")
}