const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation(); // to stop the event bubbling
}); //in case of event bubbling - Button was clicked, Div was clicked, Form was clicked, Body was clicked

div.addEventListener('click', () => {
  alert('Div was clicked');
}); //Div was clicked, Form was clicked, Body was clicked

form.addEventListener('click', () => {
  alert('Form was clicked');
}); //Form was clicked, Body was clicked

document.body.addEventListener('click', () => {
  alert('Body was clicked');
}); //Body was clicked
