
const my_object={
    js:"java script",
    cpp:"c++",
    rb:"rubby",
    swift:"swift by apple"
}

for (const key in my_object) {
    console.log(`${key} shortcut is for ${my_object[key]}`);
   
}


let student_information={
    name:"sahil",
    age:22,
    qualification:"complete degree in  bachelors of science in chemistry",
    hobby:"playing a cricket "

}

for (const key in student_information) {
    console.log(`${key} is the ${student_information[key]}`);
}


let player_information={
    sanket:"all rounder player",
    sahil:"left hand batsman",
    vaibhav:"right hand batsman & baller",
    harshal:"right hand batsman & baller",
    gaffar:"right arm baller",
    vikas:"right arm baller"

}

for (const key in player_information) {
    console.log(`${key} is the ${player_information[key]}`);

}


const coding=["js","ruby","java","python","cpp"]
coding.forEach (function (val){
    console.log(val);
}

)


const coding=["js","ruby","java","python","cpp"]

coding.forEach((item) =>{
    console.log(item);
})



let my_team=["sahil","sanket","vaibhav","harshal"]
my_team.forEach((item,index) =>{
    console.log(index+':'+item);

})

let my_team=["sahil","sanket","vaibhav","harshal"]
my_team.forEach((item,index) =>{
    console.log(index +':'+item);
})


let my_team=["sahil","sanket","vaibhav","harshal"]
my_team.forEach((value,index)=>{
    console.log();
})