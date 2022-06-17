function beautifulDays(i, j, k) {
    // Write your code here
    let bDays=0
    
    for(let y=i;y<=j;y++){
        let item2=y.toString().split('').reverse().join('')
       if((y-item2)%k===0){
           bDays++
       }
    }
return bDays
}

console.log(beautifulDays(12,23,4))
