var imagePaths = [
  "images/Venom ~ Goku.png",
  "images/Egyptian bunny ~ Beerus & Whis.png",
  "images/Tiger.png",
  "images/DBZ ~ MCU Infinity Gauntlet.png",
  "images/Donalnd Duck.png",
  "images/Naruto ~ Kakashi.png",
  "images/Rat.png",
  "images/Flaming Mouse.png",
  "images/Joker.png",
  "images/Pokemon.png"
];
generateImages(imagePaths.length);
var numberOfShirts = 4;
generateShirts(numberOfShirts);
var dropdown = document.getElementsByClassName("dropdown")[0];
document.getElementsByClassName("radio-button")[1].checked = true;
for (var i = 0; i < imagePaths.length; i++) {
  var name = imagePaths[i].slice(7, imagePaths[i].length - 4);
  dropdown.innerHTML += "<option value='" + name + "'>" + name + "</option>";
}

//Image Display
function generateImages(imgCount) {
  // var selctedImagePath = "";
  var name = "";
  for (var i = 0; i < imgCount; i++) {
    // selctedImagePath = getImages();
    // chooseImageCount++;
    name = imagePaths[i % imagePaths.length].slice(7, imagePaths[i % imagePaths.length].length - 4);
    var inlineStyle = "";
    if (name === "egiptian-loony") {
      inlineStyle = "style='position:relative; bottom: 42px;'";
    }
    $("#image-display").children().last().append(
      "<div class = 'col-lg-2 col-md-4 col-sm-6'>" +
      "<img src = '" + imagePaths[i % imagePaths.length] + "' alt = 'img' onclick='imageClick()'>" +
      "<p " + inlineStyle + ">" + name + "</p>" +
      "</div>");
    // document.getElementById("image-display").lastElementChild.innerHTML +=
    //   "<div class = 'col-lg-2 col-md-4 col-sm-6'>" +
    //   "<img src = '" + imagePaths[i % imagePaths.length] + "' alt = 'img' onclick='imageClick()'>" +
    //   "<p " + inlineStyle + ">" + name + "</p>" +
    //   "</div>";
  }
}
function imageClick() {
  var container = $(".selected-image")[0];
  // var container = document.getElementsByClassName("selected-image")[0];
  $(".selected-image")[0].innerHTML =
    "<img src='" + event.target.getAttribute("src") + "' atl='selected img' onclick='selectedImageClick()'>" +
    "<p style=' position:absolute; top:4px; right:4px;'><span onclick='selectedImageClick()'><i class='far fa-times-circle fa-3x' style='color:#c7c7c7;';'></i></span></p>";
  $(".selected-image")[0].style = "display:block; height:500px;";
  $(".selected-image").parent().children().last().css("display","none");
  // container.parentElement.lastElementChild.style = "display:none";
  var selectedImageHeight = container.firstElementChild.height;
  container.style = "display:block; height:" + selectedImageHeight + "px; border: 1px solid; border-color: grey;";
}
function selectedImageClick() {
  document.getElementsByClassName("selected-image")[0].style = "display:none;";
  document.getElementsByClassName("selected-image")[0].parentElement.lastElementChild.style = "display:static";
}

//shirts
function generateShirts(count) {
  var inlineStyle;
  var colors = ["filter: brightness(25%)", "filter: brightness(50%)", "brightness(75%)"];
  for (var i = 0; i < count; i++) {
    inlineStyle = "style= '" + colors[i] + ";'";
    var container = document.getElementById("shirts").lastElementChild.innerHTML +=
      "<div class = 'col-lg-3 col-md-6'>" +
      "<img src = 'images/blank-shirt.png' alt = 'img' onclick='somefunction()' " + inlineStyle + ">" +
      "<img class='overlay-image' src='' alt=''>" +
      "</div>";
  }
}
function selectionChanged() {
  var dropdownBox = event.target;
  var container = document.getElementById("shirts").lastElementChild;
  if (dropdownBox.selectedIndex === 0) {
    for (var i = 0; i < container.children.length; i++) {
      container.children[i].children[1].setAttribute("src", "");
    }
  } else {
    for (var j = 0; j < container.children.length; j++) {
      container.children[j].children[1].setAttribute("src", imagePaths[dropdownBox.selectedIndex - 1]);
    }
  }
}
function radioButtonClick() {
  var radioButtons = document.getElementsByClassName("radio-button");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  event.target.checked=true;
}
