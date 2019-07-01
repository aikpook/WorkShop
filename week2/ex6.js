function sumall(...num) { 
    var total = 0; 
    for (var i=0;i<num.length; i++) {
    total+=num[i];
    }
}
    console.log(sumall(1,2,3,4,5,6)); 
    console.log(sumall(1,2,3,4,5,6));
    function power({base = 1, power = 2} = {}){
    return Math.pow(base, power);
    }
    console.log(power()); 
    console.log(power({}));
     console.log(power({base: 3, power: 10}));
    