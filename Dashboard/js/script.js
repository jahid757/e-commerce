function toggleClass(id, id2, id3) {
  const element = document.getElementById(id);
  element.classList.toggle("active");
  if (id2) {
    const elementContent = document.getElementById(id2);
    elementContent.classList.toggle("active");
  }
  if (id3) {
    const elementContent = document.getElementById(id3);
    elementContent.classList.toggle("active");
  }
}
function controlLeftMenu() {
  const leftMenu = document.getElementById("left_side");
  leftMenu.classList.toggle("open");
}

// toggle dashboard card
function toggleCard(id) {
  $(document).ready(function () {
    $(`#${id}`).slideToggle();
  });
}
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});



// input validation
function inputValidator(e, warnText, type = "text", length ) {
  const inputValue = e
  const warnTextContent = document.getElementById(warnText);
  if (type === 'text' & inputValue === "" || undefined || null) {
    warnTextContent.classList.add("active");
  }else{
    warnTextContent.classList.remove('active')
  }
  if(type === "password"){
    if(inputValue.length < length){
      if(inputValue.length === 0){
        warnTextContent.classList.add('active');
      }else{
        warnTextContent.classList.add('active');
      warnTextContent.innerText = `Password must be ${length} character`
      }
      
    }
  }else{
    warnTextContent.classList.remove('active')
  }
}
function showPass(id){
  const input = document.getElementById(id);
  if(input.type === 'password'){
    input.type = 'text'
  }else{
    input.type = 'password'
  }
}

function filterOption(){
  const filter_content = document.getElementById("filter_content");
  filter_content.classList.toggle("active");
}


// img preview

function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

  oFReader.onload = function (oFREvent) {
      document.getElementById("uploadPreview").src = oFREvent.target.result;
  };
};

 function cancelPreview(id){
  const img = document.getElementById(id);
  img.src = './images/img_preview.png'
 }

// remove class
document.onclick = function (e) {
  const profile = document.getElementById("profile_content");
  if (
    e.target.parentNode.id !== "profile_pic" &&
    e.target.parentNode.id !== "profile_content" &&
    e.target.parentNode.parentNode.id !== "profile_content"
  ) {
    profile.classList.remove("active");
  }
};
