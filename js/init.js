$(document).ready(function () {
    $(".popup").click(function () {
        $(".error-wrap").fadeToggle(".error-wrap");
    })
    $("form").submit(function () {
        var form = $(this);
        var error = 0;


       form.find(".req").each(function () {
           $(this).parent().find(".error").remove()
            if ($(this).val() == ""){
                error = 1;
               $(this).parent().append("<div class='error'>Error: Fill this bar to continue</div>")

            }
        })
        var input = $("form input:radio")
        if (error > 0){
            return false;
        } else{
            return true
        }
        /*$("input").on("click", function () {
            $("#log").html( $("input:checked").val() + "asd")
        })*/
    })
})