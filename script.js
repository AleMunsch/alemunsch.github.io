document.addEventListener("DOMContentLoaded", function() {
    // Animation automatique au chargement de la page
    autoFillGauge(90, 'gauge1');
    autoFillGauge(65, 'gauge2');
    autoFillGauge(45, 'gauge3');
    autoFillGauge(60, 'gauge4');
    autoFillGauge(60, 'gauge5');
    autoFillGauge(40, 'gauge6');
    autoFillGauge(30, 'gauge7');
});

function autoFillGauge(targetPercentage, gaugeId) {
    var gauge = document.getElementById(gaugeId);
    var percentageElement = gauge.querySelector('.percentage');

    var currentPercentage = 0;

    function animate() {
        currentPercentage += 1;
        var targetWidth = gauge.parentElement.clientWidth * (currentPercentage / 100);
        gauge.style.width = targetWidth + 'px';
        percentageElement.textContent = `${Math.round(currentPercentage)}%`;

        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
            setTimeout(function() {
                gauge.style.transition = "width 0.3s ease-in-out";
            }, 10);
        }
    }

    var interval = setInterval(animate, 10);

    gauge.addEventListener('click', function() {
        currentPercentage = 0;
        clearInterval(interval);
        gauge.style.transition = "none";
        interval = setInterval(animate, 10);
    });
}

function resetGauge(gaugeId) {
    autoFillGauge(targetPercentage, gaugeId);
}


function toggleVisibility(elementId, arrowId) {
    var element = document.getElementById(elementId);
    var arrow = document.getElementById(arrowId);
    element.classList.toggle("show");
    
    if (element.classList.contains("show")) {
        arrow.classList.add("rotated");
        arrow.classList.remove("rotated-reverse");
    } else {
        arrow.classList.remove("rotated");
        arrow.classList.add("rotated-reverse");
    }
}