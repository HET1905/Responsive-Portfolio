

function displayImage(url) {
    var div = document.querySelector("#imgOpenDiv");
    var imgDiv = document.querySelector("#divImg");
  
    // alert(url);
    div.style.display = 'block';
    imgDiv.src = url;
   

}

function closeImg(){
    // alert("clicked");
    var div = document.querySelector("#imgOpenDiv");
    div.style.display = 'none';
}