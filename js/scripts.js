
$(document).ready(function () {

let list = ["vanila", "chocolate", "rasberry"]
var str = '<ul>'
list.forEach(function(item) {
  str += '<li>' + item + '</li>';
  });

str += '</ul>';
document.getElementById("items").innerHTML = str;
// $("#items").text(str);
});




