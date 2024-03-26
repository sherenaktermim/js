// function sample (a,b){
//     var c=a+b
//     var d=a-b
//     var result= c+d
//     return result
// }
// console.log(sample(10,5))



function sample (a,b,cb){
    var c=a+b
    var d=a-b
    var result= cb(c,d)

    return result
}




var result = sample(16,8,
    function sum (a,b){
    return a+b})
console.log(result)


var result2 =sample(16,8,
    function sub (a,b){
        return a-b})
console.log(result2)


var result3=sample(16,8,
    function mul (c,d){
        return c*d})
console.log(result3)





