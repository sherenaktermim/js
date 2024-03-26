const presidents = [
    {
Name:"Joe Biden",
Age:74,
InAlive:true,
Salary:30.5,
Wife:undefined,
Car:["Marcedez"," BMW","Rangr Rover"],
Children:
[{
    ID:1,
    Name:"Kim jhon un",
    Gender:"MAle",
    Married:true,
},

{
    ID:2,
    Name:"Putin",
    Gender:"MAle",
    Married:true,
}


]

    },



    {
Name:"Sheik Hasina",
Age:60,
InAlive:true,
Salary:20.5,
Wife:null,
Car:["Marcedez"," BMW","Rangr Rover"],
Children:
[{
    ID:1,
    Name:"Sajib Wazwd Joy",
    Gender:"Male",
    Married:true,
},

{
    ID:2,
    Name:"Putul",
    Gender:"Female",
    Married:true,
}


]

    }

]


for(var president of presidents){
    console.log(president.Children[1].Name)
}
    

const makecolourgreen= document.getElementById('make-colour-green')
function handlebgcolour (){document.body.style.backgroundColor='green'}
makecolourgreen addEventListener ('click', handlebgcolour)
