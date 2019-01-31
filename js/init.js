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
               $(this).parent().append("<div class='error'>ERROR</div>")

            }
        })
        if (error > 0){
            return false;
        } else{
            return true
        }
    })
})