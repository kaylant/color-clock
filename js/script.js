// clock

var startClock = function() {
    var today = new Date()
    var h = today.getHours()
    // converts current hours into hex value, base 16
    var hours = h.toString(16)
    var m = today.getMinutes()
    // converts current minutes into hex value, base 16
    var minutes = m.toString(16)
    console.log(minutes)
    var s = today.getSeconds()
    // converts current seconds into hex value, base 16
    var seconds = s.toString(16)
    // runs helper function checkTime to add 0 to hours if needed
    m = checkTime(m)
    s = checkTime(s)
    // 
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s
    setTimeout(startClock, 500)
    //select overlay
    var overlayEl = document.querySelector("#overlay")
    // stores current converted values as hexcode string
    var backgroundHex = '#' + hours + minutes + seconds
    // inserts the hex value as overlay's background color
	overlayEl.style.background = backgroundHex
	// inserts the hex string into the span
	var hexContainer = document.querySelector("#hex-value")
	hexContainer.innerHTML = backgroundHex
}

// add zero in front of numbers < 10
var checkTime = function(i) {
    if (i < 10) {
    i = "0" + i
    }  
    return i
}


