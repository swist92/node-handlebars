// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#change-eaten").on("click", function(event) {
    const id = $(this).data("id");

    console.log(id);
    const justAteBurger = {
      eaten: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: justAteBurger
    }).then(function() {
        console.log("changed not eaten to eaten");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
      eaten: 0
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

