// WHEN I open the planner, THEN the current day is displayed at the top of the calendar

var currentDay = moment().format("dddd, MMMM Do YYYY")
var currentHour = moment().hour();
var hourArr = [];

$("#currentDay").text(currentDay);

// WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future

hourArr = $('.description');

$.each(hourArr, function(i, current){
    if (currentHour == $(current).attr('id')){
        $(current).addClass('present');
    } else if (currentHour < $(current).attr('id')){
        $(current).addClass('future');
    } else {
        $(current).addClass('past');
    } 
})

// WHEN I click into a timeblock, THEN I can enter an event
// WHEN I click the save button for that timeblock, THEN the text for that event is saved in local 

$('.saveBtn').on('click', function(){
    var userText = $(this).siblings(".description").val();
    console.log(userText);
    var timeBlock = $(this).siblings(".description").attr('id'); 
    console.log(timeBlock); 
    localStorage.setItem(timeBlock, userText);
});

function renderLocalStorage(){
    $('#9').val(localStorage.getItem(9));
    $('#10').val(localStorage.getItem(10));
    $('#11').val(localStorage.getItem(11));
    $('#12').val(localStorage.getItem(12));
    $('#13').val(localStorage.getItem(13));
    $('#14').val(localStorage.getItem(14));
    $('#15').val(localStorage.getItem(15));
    $('#16').val(localStorage.getItem(16));
    $('#17').val(localStorage.getItem(17));
}

// WHEN I refresh the page, THEN the saved events persist
renderLocalStorage();
