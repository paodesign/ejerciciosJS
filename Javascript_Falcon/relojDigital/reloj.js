(function(){
    var actualizarHora = function(){
        var date = new Date();
        var hours = date.getHours();
        var am_pm;
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var dayWeek = date.getDay();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        var pHours = document.getElementById("hours");
        var pAmPm = document.getElementById("am_pm" );
        var pMinutes = document.getElementById("minutes");
        var pSeconds = document.getElementById("seconds");
        var pDayWeek = document.getElementById("dayWeek");
        var pDay = document.getElementById("day");
        var pMonth = document.getElementById("month");
        var pYear = document.getElementById("year");

        var week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;

        var months =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMonth.textContent = months[month];

        pYear.textContent = year;

        if(hours >= 12){
            hours = hours - 12;
            am_pm = "PM";
        }else{
            am_pm = "AM";
        }
        if(hours == 0){
            hours = 12;
        }else if(hours < 10) {
            hours = "0" + hours;
        };

        pHours.textContent = hours;
        pAmPm.textContent = am_pm;

        if(minutes < 10){minutes = "0" + minutes};
        if(seconds < 10){seconds = "0" + seconds};

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())