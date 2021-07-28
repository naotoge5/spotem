var window_height = window.innerHeight;
var container_height = $(".container").innerHeight();
var margin_top = ((window_height - container_height) / 2) * 0.8;

import { Alert } from './modules.js';

$(".container").css('margin-top', margin_top);

var deferred = Alert.get();
deferred.done(function (data) {
    if (data) {
        $(".container .help").text(data);
    }
});
var params = (new URL(document.location)).searchParams;
var unique = params.get('unique');
$("input[name='unique']").val(unique);
$(function () {

});