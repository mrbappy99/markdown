
// Make Syntax

function makeNav(){
    var title = document.getElementById('title').value;
    var words = title.split(' ');

    var syntax1 = words.join(' ');

    var lowerCase = words.toString().toLowerCase().split(',');

    var syntax2 = lowerCase.join('+');

    document.getElementById('syntax').innerHTML = `[${syntax1}](#${syntax2})`;

};

// Copy the syntax

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }


// Show the copy message

function copyMsg(){
    document.getElementById('copyMsg').style.display = 'block'
}

