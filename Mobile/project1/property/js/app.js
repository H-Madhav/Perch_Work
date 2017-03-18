var minusText = '&#8722;';
var plusText = '&#43;';
var node = document.getElementById("main");

function openNav() {
   node.style.width = "250px";
};
function closeNav() {
    node.style.width = "0";
};

function initMap() {
    var india = {lat: 28.4456, lng: 77.0592};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: india
    });
    var marker = new google.maps.Marker({
      position: india,
      map: map
    });
};




$(document).ready(function(){

$('.franchising').hide();
    $('.jobOpenings').hide()

    $('.partner').click(function(){
      $(".guestInquiry, .jobOpenings").hide();
      $('.franchising').show();
    });

    $('.job').click(function(){
      $(".guestInquiry, .franchising").hide();
      $(".jobOpenings").show();
    });

    $(".guest").click(function(){
      $(".guestInquiry").show();
      $(".jobOpenings, .franchising").hide();
    });
  

$(".cancellationPolicy, .standardInclusions, .faqs, .complaintsAndSuggestions").hide();

$(".refund").click(function(){
  $(".privacyPolicy, .standardInclusions, .faqs, .complaintsAndSuggestions").hide();
  $(".cancellationPolicy").show();
});

$(".standard").click(function(){
  $(".privacyPolicy, .cancellationPolicy, .faqs, .complaintsAndSuggestions").hide();
  $(".standardInclusions").show();
});

$(".questionAns").click(function(){
  $(".privacyPolicy, .cancellationPolicy, .standardInclusions, .complaintsAndSuggestions").hide();
  $(".faqs").show();
});

$(".complaints").click(function(){
   $(".privacyPolicy, .cancellationPolicy, .standardInclusions, .faqs").hide();
   $(".complaintsAndSuggestions").show();
});

$(".privacy").click(function(){
  $(".cancellationPolicy, .standardInclusions, .faqs, .complaintsAndSuggestions").hide();
  $(".privacyPolicy").show();
});



$(".viewMore1, .viewMore2, .viewMore3, .viewMore4, .viewMore5").html(plusText);
var c = 0;
$(".definetion").click(function(){
    $(".list1").toggleClass("show");
    c++;
    if(c % 2 != 0){
      $(".viewMore1").html(minusText);
    }else{
      c % 2 == 0;
      $(".viewMore1").html(plusText);
    };
});
$(".process").click(function(){
    $(".list2").toggleClass("show");
    c++;
    if(c % 2 != 0){
      $(".viewMore2").html(minusText);
    }else{
      c % 2 == 0;
      $(".viewMore2").html(plusText);
    };
});
$(".validity").click(function(){
    $(".list3").toggleClass("show");
    c++;
    if(c % 2 != 0){
      $(".viewMore3").html(minusText);
    }else{
      c % 2 == 0;
      $(".viewMore3").html(plusText);
    };
});
$(".claim").click(function(){
    $(".list4").toggleClass("show");
    c++;
    if(c % 2 != 0){
      $(".viewMore4").html(minusText);
    }else{
      c % 2 == 0;
      $(".viewMore4").html(plusText);
    };
});

$(".dispute").click(function(){
    $(".list5").toggleClass("show");
    c++;
    if(c % 2 != 0){
      $(".viewMore5").html(minusText);
    }else{
      c % 2 == 0;
      $(".viewMore5").html(plusText);
    };
});

$('.policiesLink ul > a').on('click', function(e) {
    $('.policiesLink ul > a').removeClass('activeonClick');
    $(this).addClass('activeonClick');
}); 

$('.contactNav ul > a').on('click', function(e) {
    $('.contactNav ul > a').removeClass('activeonClick');
    $(this).addClass('activeonClick');
}); 





















  
	$("#more").hide();
    $("#addMore").click(function(){
        $("#more").toggle(1000);
    });

    $("#more1").hide();
    $("#addMore1").click(function(){
        $("#more1").toggle(1000);
    });

    $(".reviewGroup").hide();
    $("#addMore2").click(function(){
        $(".reviewGroup").toggle(1000);
    });

    var minusText = '&#8722;';
    var plusText = '&#43;';
    var c = 0;
    $('.button1, .button2, .button3, .button4').html(plusText);
    $('.internationalDesigns p, .infra p, .employeeDevelopment p, .multipleProperty p').hide();
    
    $('.button1').click(function(){
        $(".internationalDesigns p").toggle(500);
        c++;
        if(c % 2 != 0){
          $(".button1").html(minusText);
        }else{
          c % 2 == 0;
          $(".button1").html(plusText);
        };
    });

   $('.button2').click(function(){
        $(".infra p").toggle(500);
        c++;
        if(c % 2 != 0){
          $(".button2").html(minusText);
        }else{
          c % 2 == 0;
          $(".button2").html(plusText);
        };
    });

    $('.button3').click(function(){
        $(".employeeDevelopment p").toggle(500);
        c++;
        if(c % 2 != 0){
          $(".button3").html(minusText);
        }else{
          c % 2 == 0;
          $(".button3").html(plusText);
        };
    });

    $('.button4').click(function(){
        $(".multipleProperty p").toggle(500);
        c++;
        if(c % 2 != 0){
          $(".button4").html(minusText);
        }else{
          c % 2 == 0;
          $(".button4").html(plusText);
        };
    });

});


// js by abinsh for form overley

function openNav2() {
    document.getElementById("myNav2").style.height = "100%";
}

function closeNav2() {
    document.getElementById("myNav2").style.height = "0%";
}

// ji by abinash for award 
function openawrd1() {
    document.getElementById("award1").style.width = "100%";
}

function closeawrd1() {
    document.getElementById("award1").style.width = "0%";
}


// js by abinsh for form overley

function OpnUserModal(modal) {
    $("#"+modal).show();
}

function closemodal() {
	$(".overlayUserModal").hide();
}