// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type; // e.g. click, mouseover etc...

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY; // no# pixel from the top to that event
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY; // from the event target itself
  val = e.offsetX;

  console.log(val);
}