const wrapper = document.querySelector(".search_wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
options = wrapper.querySelector(".options"),
searchInput=wrapper.querySelector("input");


let countries = ["Admin",'User'];

function addCountry() {
    options.innerHTML="";
    countries.forEach(country => {
       let li = `<li onclick="updateName(this)">${country}</li>`;
       options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function updateName(selectedLi){
    // console.log(selectedLi.innerText);
    searchInput.value="";
    addCountry();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInput.addEventListener("keyup",()=>{
    let arr = [];
    let searchedValue = searchInput.value.toLowerCase();
    arr = countries.filter(data =>{
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr: `<p style="color: red">Wrong Input</p>`; 
});


selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});