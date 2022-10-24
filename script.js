//1
function school() {
    let schoolInput = +prompt('Сколько вы набрали баллов от 1-100?');
    if (schoolInput >= 90 && schoolInput <= 100) {
        console.log('A');
    } else if(schoolInput >= 80 && schoolInput<=89) {
        console.log('B');
    } else if(schoolInput >= 70 && schoolInput<=79) {
        console.log('C');
    } else if(schoolInput >= 60 && schoolInput<=69) {
        console.log('D');
    } else if(schoolInput <=59 && schoolInput >= 0){
        console.log('F');
    }
}
/* school(); */
//2
function reg(){
    let regInput = prompt('Введите слово большими буквами');
    console.log(regInput.toLocaleLowerCase())   
}
/* reg(); */
//3