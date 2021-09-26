function categorize(numarr){

    var even = []
    var odd = []
    var unit = []
    var tens = []
    var hundreds = []
    var other = []

    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 == 0) {
            even.push(numarr[i])
        }
        else if(numarr[i] % 2 != 0){
            odd.push(numarr[i])
        }
        else if (numarr[i] >= 1 && numarr[i] <= 9){
            unit.push(numarr[i])
        }
        else if (numarr[i] >= 10 && numarr[i] <= 99){
            unit.push(numarr[i])
        }
        else if (numarr[i] >= 100 && numarr[i] <= 999){
            unit.push(numarr[i])
        }
        else if (numarr[i] == 0 || numarr[i] >= 1000){
            unit.push(numarr[i])
        }
    } 

    var result = {
        even: even,
        odd: odd,
        unit: unit,
        tens: tens,
        hundreds: hundreds,
        other: other
    }
    return result
}
var numbers = [1,4,5,6,9,10,13,16,18,19,1001]
console.log(categorize(numbers))