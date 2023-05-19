const percentButton=document.querySelector('.percent');
const screenValue=document.querySelector('.screenf');
console.log(percentButton);
const evalpercent=function(e){
    return eval(e.replaceAll('%','* 0.01'));
}
