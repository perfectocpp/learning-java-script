function fuct(num){
    if( num === 1 ){
        return 1
    } else {
        return num * fuct(num - 1)
    }
}

console.log(fuct(5))