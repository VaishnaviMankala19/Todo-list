module.exports=

function(){
let date = new Date();
let options = {
    weekday : "long",
    day : "numeric",
    month : "long",
};
var day = date.toLocaleDateString("en-US" , options);
return day;
}