'use-strict';
//add your code here

function h1Selector(){
  return $('h1');
}

function liInOlSelector(){
  return $('ol li');

}

function linkSelector(){
  return $('.box5#box4 a');
  //order doesnt matter '#box4.box5 a' also works

}

function imageSelector(){
  return $('img[alt="cat sleeping"]');
}

function checkboxInputSelector(){
  return $('input[type="checkbox"]');
}