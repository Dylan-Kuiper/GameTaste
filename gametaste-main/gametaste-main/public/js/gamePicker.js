$("input[type=radio]").on("change", function () {
  $(this).closest("form").submit();
});
