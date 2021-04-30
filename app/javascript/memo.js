const { formDisableSelector } = require("@rails/ujs");

function post (){
  //リクエストを送信する処理
  const submit = document.getElementById("submit");
  // console.log(submit)
  submit.addEventListener("click", (e) => {
    console.log(e)
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    // console.log(formData)
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 }
 
 window.addEventListener('load', post);