// DISPLAYING CURRENT DATE
$('#currentDay').append(moment().format('MMM Do YYYY'));

// The current hour
var currentHour = moment().format('h');

// So the time blocks recognize themselves as specific hours of the day... utilizing moment.js as much as possible
var nineAM = moment('9:00 am', 'hh:mm a').format('h');
$('#9am').data('hour', nineAM);
var tenAM = moment('10:00 am', 'hh:mm a').format('h');
$('#10am').data('hour', tenAM);
var elevenAM = moment('11:00 am', 'hh:mm a').format('h');
$('#11am').data('hour', elevenAM);
var twelvePM = moment('12:00 pm', 'hh:mm a').format('h');
$('#12pm').data('hour', twelvePM);
var onePM = moment('1:00 pm', 'hh:mm a').format('h');
$('#1pm').data('hour', onePM);
var twoPM = moment('2:00 pm', 'hh:mm a').format('h');
$('#2pm').data('hour', twoPM);
var threePM = moment('3:00 pm', 'hh:mm a').format('h');
$('#3pm').data('hour', threePM);
var fourPM = moment('4:00 pm', 'hh:mm a').format('h');
$('#4pm').data('hour', fourPM);
var fivePM = moment('5:00 pm', 'hh:mm a').format('h');
$('#5pm').data('hour', fivePM);



var $9am = $('#9am');
var $10am = $('#10am');
var $11am = $('#11am');
var $12pm = $('#12pm');
var $1pm = $('#1pm');
var $2pm = $('#2pm');
var $3pm = $('#3pm');
var $4pm = $('#4pm');
var $5pm = $('#5pm');



console.log($9am.data == currentHour);





// Work hour IDs... to identify which hours each time block represents
// $9am.value = moment('9:00 am', 'hh:mm a').format('h');
// $('#9am').value = nineAM;
// $('#10am') = tenAM;
// $('#11am') = elevenAM;
// $('#12pm') = twelvePM;
// $('#1pm') = onePM;
// $('#2pm') = twoPM;
// $('#3pm') = threePM;
// $('#4pm') = fourPM;
// $('#5pm') = fivePM;

// Color Coordinator
function colorCoordinator($h) {

        if ($h < currentHour) 
        $h.addClass('.past');
        return $h;
      

        // else if (timeID == currentHour)
        // {$('.time-block').replaceWith('.present');}

        // else if (timeID > currentHour)
        // {$('.time-block').replaceWith('.future')};

    }

// Color Coordination

    colorCoordinator($9am);


    // colorCoordinator(tenAM);
    // colorCoordinator(elevenAM);
    // colorCoordinator(twelvePM);
    // colorCoordinator(onePM);
    // colorCoordinator(twoPM);
    // colorCoordinator(threePM);
    // colorCoordinator(fourPM);
    // colorCoordinator(fivePM);

    // $(".saveBtn").click(function() {
    //     var toDo = ;
    //     var hour = ;
    //     localStorage.setItem()
    // })




























