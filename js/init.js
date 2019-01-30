$(document).ready(function () {
    $(".popup").click(function () {
        $(".popupalert").fadeToggle(".popupalert");
    })
    $("form").submit(function (e) {
        var form = $(this);
        var error = 0;
        console.log($(this).find(".req"));

        $(this).find(".req").each(function () {
            console.log($(this).val()== "");
            if ($(this).val() == ""){
                console.log("bar is empty")
                e.preventDefault();
            }
        })
    })
})