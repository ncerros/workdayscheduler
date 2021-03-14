//This function will search the HTML and CSS 
$(document).ready(function() {
    //Added a click to the save button
    $(".saveBtn").on("click", function() {
      //To get values
      var valueEl = $(this).siblings(".description").val();
      var timeEl = $(this).parent().attr("id");
  
      //Local storage will save information for the function
      localStorage.setItem(timeEl, valueEl);
    });

  
    //Date and time will be display 
   $("#actualDay").text(moment().format("dddd, MMMM DD, hh:mm:ss a"));


    //The interval will keep updating time
    var checkEl = setInterval(hourCheck, 10000);
  
    //Information will be stored in the local storage and ready to be retrieved
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

//This function will keep updating the hours
    function hourCheck() {
    var actualHour = moment().hours();
    
        //This function will loop over each row time-block
        $(".time-block").each(function() {
          var rowBlockHour = parseInt($(this).attr("id").split("-")[1]);
    
          //This will update the row-blocks when time has past
          
          if (rowBlockHour < actualHour) {
            $(this).addClass("gone");
          } 
          else if (rowBlockHour === actualHour) {
            $(this).removeClass("gone");
            $(this).addClass("now");
          } 
          else {
            $(this).removeClass("gone");
            $(this).removeClass("now");
            $(this).addClass("next");
          }
        });
      }
      hourCheck();
  
});    
