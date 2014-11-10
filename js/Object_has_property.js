// Introduction to Objects II 8/30
var suitcase = {
    shirt: "Hawaiian"
};
hasShorts = suitcase.hasOwnProperty('shorts');
if (hasShorts){
    console.log(suitcase.shorts);
}else{
    suitcase.shorts = "Bermuda";
    console.log(suitcase.shorts);
}
