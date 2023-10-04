$(document).ready(function() {
    var likeCount1 = 184;
    var likeCount2 = 257;
    var likeCount3 = 207;
    // Add a click event to the thumbs-up icon
    $('#thumbs-up-icon1').click(function() {
        // Increment the like count and update the span
        likeCount1++;
        $('#like-count1').text(likeCount1);
      });
    $('#thumbs-up-icon2').click(function() {
      // Increment the like count and update the span
      likeCount2++;
      $('#like-count2').text(likeCount2);
    });
    $('#thumbs-up-icon3').click(function() {
        // Increment the like count and update the span
        likeCount3++;
        $('#like-count3').text(likeCount3);
      });
  });