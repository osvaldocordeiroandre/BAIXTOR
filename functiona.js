$(document).ready(function(){
    $(".eps a").click(function(e) {
        e.preventDefault();

        $("#AllEp").attr("src", $(this).attr("href"));
    })
});