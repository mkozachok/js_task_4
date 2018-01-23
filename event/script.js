// 1. При кліку на кнопку - сховати текст.
// 2. При кліку на кнопку ховати/показувати текст.
// Створити кнопку, яка сама себе ховає при кліку.
function hide_text(){
	var textField = document.getElementById("text");
	textField.hidden =  !textField.hidden;
}

function hide_self(elem){
	elem.hidden = true;

}

//При клыку на кнопку - видаляти рядок.
//Зробити універсальний спочіб, який не залежить від кількості рядків
function remove(elem){
	elem.parentElement.remove();
}