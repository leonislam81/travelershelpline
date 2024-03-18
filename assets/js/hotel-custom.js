$(document).ready(function () {
  // Fetch JSON data from file
  $.getJSON('hotel.json', function (jsonData) {
    // Event listener for input in the text field
    $('#locationhot').on('input', function () {
      var inputValue = $(this).val().trim().toLowerCase();
      // Clear previous suggestions
      $('#suggestions-list').empty();

      // Only show suggestions if input value is not empty
      if (inputValue.length > 0) {
        // Filter suggestions based on user input
        $.each(jsonData, function (index, item) {
          var destination = item.Destination.toLowerCase();
          if (destination.startsWith(inputValue)) {
            var suggestion = $(
              '<li class="ui-menu-item"><div tabindex="-1" class="ui-menu-item-wrapper">' +
                item.Destination +
                ' - ' +
                item.country +
                '</div></li>'
            );
            suggestion.click(function () {
              // Update text field with clicked suggestion
              $('#locationhot').val(item.Destination + ' - ' + item.country);
              // Remove the clicked suggestion
              $('#suggestions-list').empty();
            });
            $('#suggestions-list').append(suggestion);
          }
        });
        // Display suggestions list
        $('#suggestions-list').show();
      } else {
        // Hide suggestions list if input value is empty
        $('#suggestions-list').hide();
      }
    });
  });
});
