


//    breakfast script
    var i=2;
$(".additembutton").click(function () {
    $(".container1").append('<div class="card card-nav-tabs" style="padding-top: 20px"><div class="card-header card-header-primary">Item - \n'+i+'<a style="color: white" class="close1" >×</a></div><div class="card-body"><input type="text" class="form-control text-center"  placeholder="Item Name"></div></div>');
    i++;
});
$('.container1').on('click','a',function(){
    var $target = $(this).closest('.card');
    $target.hide('slow', function(){ $target.remove(); });
    i--;
});
//lunch script
var j=2;
$(".additembutton2").click(function () {
    $(".container2").append('<div class="card card-nav-tabs" style="padding-top: 20px"><div class="card-header card-header-primary">Item - \n'+j+'<a style="color: white" class="close1" >×</a></div><div class="card-body"><input type="text" class="form-control text-center"  placeholder="Item Name"></div></div>');
    j++;
});
$('.container2').on('click','a',function(){
    var $target = $(this).closest('.card');
    $target.hide('slow', function(){ $target.remove(); });
    j--;
});
//dinner script
var k=2;
$(".additembutton3").click(function () {
    $(".container3").append('<div class="card card-nav-tabs" style="padding-top: 20px"><div class="card-header card-header-primary">Item - \n'+k+'<a style="color: white" class="close1" >×</a></div><div class="card-body"><input type="text" class="form-control text-center"  placeholder="Item Name"></div></div>');
    k++;
});
$('.container3').on('click','a',function(){
    var $target = $(this).closest('.card');
    $target.hide('slow', function(){ $target.remove(); });
    k--;
});
//plans script

$(".additembutton4").click(function () {
    $(".container4").append('<div class="card card-nav-tabs " style="padding-top: 10px;"><div class="card-header card-header-primary"><div class="form-row" ><div class="form-group col-md-4 ml-5 mr-auto " style="margin: 0; padding: 0"><input type="date" class="form-control  text-center " style="height: 41px; color: white" placeholder="Date"></div><div class="form-group col-md-4 ml-5" style="margin: 0; padding: 0"><select class="form-control  selectpicker " style=" text-align-last: center; text-align: center" data-style="btn btn-link" ><option>Choose...</option><option>Breakfast</option><option>Lunch</option><option>Dinner</option></select></div><a style="color: white; height: 5px" class="close1 col-md-1 ml-auto " >×</a></div></div><div class="card-body"><button class="btn btn-primary btn-link additembutton5" ><i class="fa fa-plus" aria-hidden="true"></i>  Add Item</button><div class="container5"><div class="input-group" style="margin-left: 12px"><input type="text" class="form-control text-center"  placeholder="Item Name"><a style="color: black" class="close2" >×</a></div></div></div></div>');

});
$('.container4').on('click','.close1',function(){
    var $target = $(this).closest('.card');
    $target.hide('slow', function(){ $target.remove(); });

});
//plans items script

$(".container4").on('click','button',function () {
    $(this).siblings(".container5").append('<div class="input-group" style="margin-left: 12px"><input type="text" class="form-control text-center"  placeholder="Item Name"><a style="color: black" class="close2" >×</a></div>');

});
$('.container4').on('click','.close2',function(){
    var $target = $(this).closest('.input-group');
    $target.hide('slow', function(){ $target.remove(); });

});