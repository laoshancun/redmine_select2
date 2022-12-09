/*
 Select To Select2 Plugin Main.
 */

(function($){

    // For Page Load
    replaceAllSelect2();

    // For Ajax
    $(document).ajaxComplete(function(){
        replaceAllSelect2();
    });

    // For GET,POST Request
    $(window).ready(function() {
        replaceAllSelect2();
    });

    // for all elements
    // $(document).click(function(event){
    //     replaceAllSelect2();
    // });

    // for all elements
    $(document).change(function(){
        replaceAllSelect2();
    });


}(jQuery));

function replaceAllSelect2(){
    $('select').each(function () {
        var $this=$(this);
        if( ~['available_c','selected_c'].indexOf($this.attr('id')) || $this.hasClass("select2-hidden-accessible") )return;
        var w=$this.width();
        var width = w>30?'resolve':'120px';
        $this.select2({
            width: width,
            placeholder: "",
            allowClear: true
        });
    });
}
