$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagaration();
});

$("input[type ='text']").keypress(function (e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
    $(this).val(" ");
  }
});
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
