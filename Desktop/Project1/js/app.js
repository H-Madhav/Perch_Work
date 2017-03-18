
/*var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var count = 0;

function plus(){
   count = content1.innerHTML;
   count++;
   content1.innerHTML = count;
};

function minus(){
    count= content1.innerHTML;
	count--;
	if(count > 0){
       content1.innerHTML = count;
	};
};

function addChild(){
   count = content2.innerHTML;
   count++;
   content2.innerHTML = count;
};

function removeMyChild(){
	count = content2.innerHTML;
	if(count > 0){
	   count--;
       content2.innerHTML = count;
	};
};
*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=450) {
        $(".cus_nav").addClass("add_on_scrol_to_nav");
		$(".add_on_scrol_to_nav").animate({top: '0px'},'slow');
		$("#flexnavb").addClass("dcrWidth");
		$("#stFnt").addClass("dcrFntSiz");
		
    }else{
        $(".cus_nav").removeClass("add_on_scrol_to_nav");
		$("#flexnavb").removeClass("dcrWidth");
		$("#stFnt").removeClass("dcrFntSiz");
    }
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=50) {
      $(".navFix").addClass("navhead");     
       
    }else{
       $(".navFix").removeClass("navhead");      
    }
});




$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=2400) {
		init('image_slider','image_sliderWdth','prev','next');
        $(".cus_nav").removeClass("add_on_scrol_to_nav");
    }else{
        $(".cus_nav").addClass("cus_nav");
    }
});


// js for on top property image slider starts here  
function opnPropSlidr(){
document.getElementById("propSliderOvrley").style.height = "100%";
}

function closPropSlidr() {
    document.getElementById("propSliderOvrley").style.height = "0%";
}



// new page code here 



var minusText = '&#8722;';
var plusText = '&#43;';
$(document).ready(function(){
   $(".internationalDesigns p, .infra p, .employeeDevelopment p, .multipleProperty p").hide();
   $(".button1, .button2, .button3, .button4").html( plusText);

    $(".button1").click(function(){
        $(".internationalDesigns p").show(500);
         $(this).html(minusText);
        $(".infra p, .employeeDevelopment p, .multipleProperty p").hide();
        $(".button2, .button3, .button4").html( plusText);
    });

    $(".button2").click(function(){
        $(".infra p").show(500);
        $(this).html(minusText);
        $(".internationalDesigns p, .employeeDevelopment p, .multipleProperty p").hide();
         $(".button1, .button3, .button4").html( plusText);
    });
    $(".button3").click(function(){
        $(".employeeDevelopment p").show(500);
        $(this).html(minusText);
        $(".internationalDesigns p, .multipleProperty p, .infra p").hide();
         $(".button1, .button2, .button4").html( plusText);
    });
    $(".button4").click(function(){
        $(".multipleProperty p").show(500);
        $(this).html(minusText);
        $(".internationalDesigns p, .infra p, .employeeDevelopment p").hide();
        $(".button1, .button2, .button3").html( plusText);
    });



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

	
	

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=2400) {
        $(".cus_nav").removeClass("add_on_scrol_to_nav");
    }else{
        $(".cus_nav").addClass("cus_nav");
    }
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
    
});
$(".process").click(function(){
    $(".list2").toggleClass("show");
    
});
$(".validity").click(function(){
    $(".list3").toggleClass("show");
});
$(".claim").click(function(){
    $(".list4").toggleClass("show");
});

$(".dispute").click(function(){
    $(".list5").toggleClass("show");
});



$('.policiesLink ul > a').on('click', function(e) {
    $('.policiesLink ul > a').removeClass('activeonClick');
    $(this).addClass('activeonClick');
}); 

$('.contactNav ul > a').on('click', function(e) {
    $('.contactNav ul > a').removeClass('activeonClick');
    $(this).addClass('activeonClick');
}); 



});
