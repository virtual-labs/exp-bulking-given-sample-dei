
// starting step  button JS
function startingstep() {
    document.getElementById("arrx").style.visibility = "hidden";

    document.getElementById("Startingstep").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("Step1").style.visibility = "visible";

}

// starting step  ends here


// step 1 starts here


// step 1 button JS
function step1() {
    document.getElementById("arrx1").style.visibility = "hidden";

    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("Step2").style.visibility = "visible";
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";                    // to be changed to hidden
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("arrx2").style.visibility = "hidden";




    myTimeout = setTimeout(myGreeting3, 1);


}

function myGreeting3() {


    document.getElementById("arr1").style.visibility = "visible";


    myStopFunction3();
}
function myStopFunction3() {
    clearTimeout(myTimeout);

}






// step 1 ends here


// step 2 starts here
// on clicking then cylinder animation
function movecylinder() {
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";


    myTimeout = setTimeout(myGreeting, 3000);

}

function myGreeting() {
    // document.getElementById("gif2").style.visibility = "hidden";

    document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility = "visible";
    // document.getElementById("gif3").style.visibility = "visible";



    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function movefunnel() {
    //document.getElementById("gif1").style.visibility = "visible";
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting1, 2500);

}

function myGreeting1() {


    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";
    // document.getElementById("png3").style.visibility = "hidden";


    myStopFunction1();
}






function myStopFunction1() {
    clearTimeout(myTimeout1);

}

function clicktofill() {
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "visible";

    myTimeout2 = setTimeout(myGreeting2, 10000);

}

function myGreeting2() {

      document.getElementById("next2").style.visibility = "visible";                     // to be changed to visible
    document.getElementById("arrx2").style.visibility = "visible";                         // to be changed to visible


    myStopFunction2();
}

function myStopFunction2() {
    clearTimeout(myTimeout2);

}

function step2() {

    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("Step2").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("arr5").style.visibility = "hidden";
    document.getElementById("trans5").style.visibility = "hidden";
    document.getElementById("arrx3").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";                            // to be changed to hidden
}

// step 2 ends here

// step 3 starts from here


function liftscale() {

    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("trans4").style.visibility = "hidden";
    document.getElementById("arr4").style.visibility = "hidden";
    document.getElementById("gif5").style.visibility = "visible";


    myTimeout4 = setTimeout(myGreeting4, 5000);

}

function myGreeting4() {

    document.getElementById("arr5").style.visibility = "visible";
    document.getElementById("trans5").style.visibility = "visible";


    myStopFunction4();
}

function myStopFunction4() {
    clearTimeout(myTimeout4);

}

function leveloff() {


    document.getElementById("trans5").style.visibility = "hidden";
    document.getElementById("arr5").style.visibility = "hidden";
    document.getElementById("gif6").style.visibility = "visible";

    myTimeout5 = setTimeout(myGreeting5, 3000);

}

function myGreeting5() {
    document.getElementById("arrx3").style.visibility = "visible";

      document.getElementById("next3").style.visibility = "visible";                           // to be changed to visible



    myStopFunction5();
}

function myStopFunction5() {
    clearTimeout(myTimeout5);

}

function step3() {

    document.getElementById("Step3").style.visibility = "hidden";
    document.getElementById("Step3").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step4").style.visibility = "visible";
    

}

// completed step 3


//step 4 starts here

function step4() {

    document.getElementById("Step4").style.visibility = "hidden";
    document.getElementById("Step4").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";

        

        document.getElementById("Step5").style.visibility = "visible";

        document.getElementById("trans6").style.visibility = "visible";
        document.getElementById("arr6").style.visibility = "visible";
        document.getElementById("png5").style.visibility = "visible";
        document.getElementById("arrx5").style.visibility = "hidden";
        document.getElementById("next5").style.visibility = "hidden";                              // to be changed to hidden





    });
}

// step 4 ends here

// step 5 starts here

function fillthecontainer() {
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("gif7").style.visibility = "visible";

    myTimeout6 = setTimeout(myGreeting6, 15000);



}

function myGreeting6() {

      document.getElementById("next5").style.visibility = "visible";    
    document.getElementById("arrx5").style.visibility = "visible";                      



    myStopFunction6();
}

function myStopFunction6() {
    clearTimeout(myTimeout6);

}

function step5() {

    document.getElementById("Step5").style.visibility = "hidden";
    document.getElementById("Step5").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";

        document.getElementById("Step6").style.visibility = "visible";

        document.getElementById("trans7").style.visibility = "visible";
        document.getElementById("arr7").style.visibility = "visible";
        document.getElementById("png6").style.visibility = "visible";
        document.getElementById("arrx6").style.visibility = "hidden";



        document.getElementById("next6").style.visibility = "hidden";                           // to be changed to hidden





    });
}

// step 5 ends here

// step 6 starts here


function fillwater() {
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("trans7").style.visibility = "hidden";
    document.getElementById("arr7").style.visibility = "hidden";
    document.getElementById("gif8").style.visibility = "visible";

    myTimeout7 = setTimeout(myGreeting7, 6000);



}

function myGreeting7() {

      document.getElementById("next6").style.visibility = "visible";   
    document.getElementById("arrx6").style.visibility = "visible";                



    myStopFunction7();
}

function myStopFunction7() {
    clearTimeout(myTimeout7);

}

function step6() {

    document.getElementById("Step6").style.visibility = "hidden";
    document.getElementById("Step6").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";

        document.getElementById("Step7").style.visibility = "visible";

        document.getElementById("trans8").style.visibility = "visible";
    document.getElementById("arr8").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "visible";
    document.getElementById("arrx7").style.visibility = "hidden";
   // document.getElementById("gif9").style.visibility = "hidden";

    




        document.getElementById("liftbeaker").style.visibility = "hidden";     //to be changed to hidden
       
        
        
        

    });
}
// step 6 ends here

// step 7 starts here

function movebeaker() {
    document.getElementById("arr8").style.visibility = "hidden";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("trans8").style.visibility = "hidden";
    document.getElementById("gif9").style.visibility = "visible";


    myTimeout8 = setTimeout(myGreeting8, 3000);

}

function myGreeting8() {
    document.getElementById("arrx7").style.visibility = "visible";
      document.getElementById("liftbeaker").style.visibility = "visible";

    myStopFunction8();
}

function myStopFunction8() {
    clearTimeout(myTimeout8);

}

function step7() {
    document.getElementById("Step7").style.visibility = "hidden";


    document.getElementById("Step7").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });
    
    document.getElementById("Step7a").style.visibility = "visible";

    document.getElementById("bringrod1").style.visibility = "hidden";     //to be changed to hidden
    document.getElementById("liftbeaker1").style.visibility = "hidden";
    document.getElementById("arr8b").style.visibility = "hidden";
    document.getElementById("arrx7a").style.visibility = "hidden";


    
}
// step 7 ends here

// step 7a starts here
function movingrod() {
    document.getElementById("arr8a").style.visibility = "hidden";
    document.getElementById("pngrod").style.visibility = "hidden";
    document.getElementById("transrod").style.visibility = "hidden";
    document.getElementById("rodgif").style.visibility = "visible";


    myTimeout8 = setTimeout(myGreeting8a, 6000);

}

function myGreeting8a() {
   
    //  document.getElementById("next7").style.visibility = "visible";
    document.getElementById("arr8b").style.visibility = "visible";
    document.getElementById("liftbeaker1").style.visibility = "visible";

    myStopFunction8a();
}

function myStopFunction8a() {
    clearTimeout(myTimeout8a);

}

function liftbeaker1() {
    document.getElementById("arr8b").style.visibility = "hidden";
    document.getElementById("rodgif").style.visibility = "hidden";
    document.getElementById("liftbeaker1").style.visibility = "hidden";
    document.getElementById("beakergif").style.visibility = "visible"; 

    myTimeout8 = setTimeout(myGreeting8b, 3000);


}
function myGreeting8b() {
     document.getElementById("arrx7a").style.visibility = "visible";
       document.getElementById("bringrod1").style.visibility = "visible";
   
     myStopFunction8b();
 }
 
 function myStopFunction8b() {
     clearTimeout(myTimeout8b);
 
 }

 function step7a() {
    document.getElementById("Step7a").style.visibility = "hidden";


    document.getElementById("Step7a").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });
    
    document.getElementById("Step7b").style.visibility = "visible";

    document.getElementById("bringrod2").style.visibility = "hidden";     //to be changed to hidden
    document.getElementById("arrx7b").style.visibility = "hidden"; 
   
}



 // step 7a ends here


 // step 7b starts here
 function movingrod1() {
    document.getElementById("arr8c").style.visibility = "hidden";
    document.getElementById("pngrod1").style.visibility = "hidden";
    document.getElementById("transrod1").style.visibility = "hidden";
    document.getElementById("rodgif1").style.visibility = "visible";


    myTimeout8c = setTimeout(myGreeting8c, 15000);

}

function myGreeting8c() {
   
      document.getElementById("bringrod2").style.visibility = "visible";
   
    document.getElementById("liftbeaker1").style.visibility = "visible";
    document.getElementById("arrx7b").style.visibility = "visible";

    myStopFunction8c();
}

function myStopFunction8c() {
    clearTimeout(myTimeout8c);

}


function step7b() {
    document.getElementById("Step7b").style.visibility = "hidden";


    document.getElementById("Step7b").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });
    
    document.getElementById("Step8a").style.visibility = "visible";

    
   
}


 
 

//step 8a starts here


function step8a() {
    document.getElementById("Step8a").style.visibility = "hidden";

    document.getElementById("Step8a").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step8b").style.visibility = "visible";

    
    

}

// step 8a ends here

// step 8b starts here

function step8b() {
    document.getElementById("Step8b").style.visibility = "hidden";

    document.getElementById("Step8b").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step8c").style.visibility = "visible";

    
    
}

// step 8b ends here

// step 8c starts here

function step8c() {
    document.getElementById("Step8c").style.visibility = "hidden";

    document.getElementById("Step8c").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step9a").style.visibility = "visible";

    
    
}

// step 8c ends here

// step 9a starts here

function step9a() {
    document.getElementById("Step9a").style.visibility = "hidden";

    document.getElementById("Step9a").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step9b").style.visibility = "visible";

    
    
}

// step 9a ends here

// step 9b starts here

function step9b() {
    document.getElementById("Step9b").style.visibility = "hidden";

    document.getElementById("Step9b").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step9c").style.visibility = "visible";

    
    
}

// step 9b ends here

// step 9c starts here

function step9c() {
    document.getElementById("Step9c").style.visibility = "hidden";

    document.getElementById("Step9c").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step9d").style.visibility = "visible";

    
    
}

// step 9c ends here

// step 9d starts here

function step9d() {
    document.getElementById("Step9d").style.visibility = "hidden";

    document.getElementById("Step9d").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("Step10").style.visibility = "visible";

    
    
}

// step 9d ends here

// last step starts here

function step10() {
    document.getElementById("Step10").style.visibility = "hidden";

    document.getElementById("Step10").querySelectorAll("*").forEach(function (element) {
        element.style.visibility = "hidden";
    });

    document.getElementById("laststep").style.visibility = "visible";

    
    
}

function redirectToNewLink() {
    // Replace 'https://www.example.com' with your desired URL
    window.location.href = 'https://virtual-labs.github.io/exp-bulking-given-sample-dei/posttest.html';
  }