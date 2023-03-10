function toggleClass(id,id2) {
  const element = document.getElementById(id);
  element.classList.toggle("active");
  if(id2){
    const elementContent = document.getElementById(id2);
    elementContent.classList.toggle('active')
  }
}
function controlLeftMenu(){
    const leftMenu = document.getElementById('left_side');
    leftMenu.classList.toggle("open");
}

// toggle dashboard card
function toggleCard(id) {
  $(document).ready(function () {
    $(`#${id}`).slideToggle();
  });
}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })













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


