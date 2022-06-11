let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');



//submit event listener for the form so
//that it can prevent the default behaviour of our App.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked');

    formValidation();

});


//This will help us prevent users from submitting blank input fields
let formValidation = () => {

  if (input.value === "") {
    msg.innerHTML = 'Post can not be blank!';
    console.log('Failure!');
  } else {
    console.log('Success');
    msg.innerHTML = '';
    acceptData();
  }

}

//object is dictionary in javascript to store our input.value
let data = {};

//storing input to object

let acceptData = () => {
  data['text'] = input.value;
  createPost();
};


let createPost = () => {
  posts.innerHTML +=
  `<div class='post'>
    <p>${data.text}</p>
    <span id="options">
    <i onclick='editPost(this)' class="fas fa-edit"></i>
    <i onclick='deletePost(this)' class="fas fa-trash-alt"></i>
    </span>
  </div>
  `,input.value;
}


let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};


let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}
