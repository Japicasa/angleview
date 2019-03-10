var gauge

printGauge()
printGauge2()
getalfaRA()

setInterval(getalfaRA, 600);

function getalfaRA()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var str = this.responseText;
            var myarr = str.split(":");
            document.getElementById("alfaRA").innerHTML = myarr[0];
            document.getElementById("alfaRB").innerHTML = myarr[1];
            document.getElementById("alfadiff").innerHTML = myarr[2];
            // console.log(myarr[0].slice(10,-4))
            setValue(myarr[0].slice(10, -4))
        }
    };
    xmlhttp.open("GET", "alfaRArq", true);
    xmlhttp.setRequestHeader('Cache-Control', 'no-cache');
    xmlhttp.send();
}

function printGauge() {
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 0.5, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.042, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
    };
    var target = document.getElementById('sensor1'); // your canvas element
    this.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    this.gauge.maxValue = 90; // set max gauge value
    this.gauge.setMinValue(-90);  // Prefer setter over gauge.minValue = 0
    this.gauge.animationSpeed = 128; // set animation speed (32 is default value)
    this.gauge.set(0);
}

function printGauge2() {
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 0.5, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.042, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
    };
    var target = document.getElementById('sensor2'); // your canvas element
    this.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    this.gauge.maxValue = 90; // set max gauge value
    this.gauge.setMinValue(-90);  // Prefer setter over gauge.minValue = 0
    this.gauge.animationSpeed = 128; // set animation speed (32 is default value)
    this.gauge.set(0);
}

function setValue(stringAngle) {
    if (this.gauge) {
        var floatAngle = parseFloat(stringAngle)
        this.gauge.set(floatAngle); // set actual value
    }
}