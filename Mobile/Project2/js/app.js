function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

$(document).ready(function(){
	$("#roomDiscriptionInfo").hide();
    $(".viewMore1").click(function(){
        $("#roomDiscriptionInfo").toggle();
    });

    $(".toHide").hide();
    $(".viewMore2").click(function(){
        $(".toHide").toggle();
    });

});

var index = 1;
fadeIn();
function fadeIn() {
    var i;
    var x = document.getElementsByClassName("setRunning");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

    if (index > x.length) {
        index = 1;
    };
    x[index - 1].style.display = "block";
    index++;
    setTimeout(fadeIn, 4000);
};


