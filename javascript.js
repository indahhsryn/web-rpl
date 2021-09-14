const fristName = prompt("siapa nama depanmu?");
const lastName  = prompt("siapa nama belakangmu ?");
const langguage = prompt("bisa bahasa apa?");

const user ={
    name:{
        first : fristName,
        last : lastName,
    },
    langguage : langguage
};

if (user.langguage === "Indonesia"){
    alert("Senang Bertemu Denganmu " + user.name.first + " " + user.name.last+ "!");
} else if(user.langguage === "french"){
    alert("Ravi de vous recontrer " +user.name.first + " " + user.name.last + "!");
}else if(user.langguage === "jawa"){
    alert("Seneng Rasane Ketemu Koe " + user.name.first + " " + user.name.last + "!");
}else{
    alert("Nice To Meet You " + user.name.first + " "  + user.name.last + "!");
}
    