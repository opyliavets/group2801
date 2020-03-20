function test() {
    let nameValue = document.querySelector('.name').value;
    let commentValue = document.querySelector('.text').value;  
    let wrapper = document.querySelector('.wrapper');
    let name = document.querySelector('.name');
    let comment =document.querySelector('.text');

    if (nameValue != '' && commentValue != '') {
        name.classList.remove('text_error');
        comment.classList.remove('text_error');
        wrapper.innerHTML += '<div class="added-block"><p class="added-block__comment">' + commentValue + '</p><h4 class="added-block__author">' + nameValue + '</h4></div>';    
    } else {
        name.classList.add('text_error');
        comment.classList.add('text_error');
        throw "Name or Comment is empty!";

    }
  
}


