"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", function(results) {
        $("#fortune-text").html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, function(results) {
        $('#weather-info').text(results.forecast);
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // create object variable to hold quantity and melon type from customer
    var melonOrder = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val()
    };

    // send post request with melonOrder
    // results: jsonify({'code': result_code, 'msg': result_text})
    $.post("/order-melons.json", melonOrder, function(results) {
        $("#order-status").html(results.code + ": " + results.msg);
    });
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


