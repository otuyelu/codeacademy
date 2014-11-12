// Introduction to Objects II 27/30
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var lang in languages){
    if(typeof(languages[lang]) === "string" ){
        console.log(languages[lang]);
    }
};
