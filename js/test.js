$(document).ready(function() {
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    
    var name = $("#name").val();
    var email = $("#email").val();
    var discord = $("#discord").val();
    var platform = [];
    var platformOtherText = "";
    $('input[name="platform"]:checked').each(function() {
      platform.push($(this).val());
    });
    if (platform.includes("Other")) {
      platformOtherText = $("#platform_other_text").val();
    }
    var feature = $("input[name='feature']:checked").val();
    var featureOtherText = "";
    if (feature == "Other") {
      featureOtherText = $("#feature_other_text").val();
    }
    var rating = $("input[name='rating']:checked").val();
    var liked = $("#liked").val();
    var disliked = $("#disliked").val();
    var improvements = $("#improvements").val();
    var elements = [];
    var elementOtherText = "";
    $('input[name="elements[]"]:checked').each(function() {
      elements.push($(this).val());
    });
    if (elements.includes("Other")) {
      elementOtherText = $("#element_other_text").val();
    }
    
    var payload = {
      "username": "Game Feedback",
      "avatar_url": "https://example.com/avatar.jpg",
      "embeds": [{
        "title": "New feedback received",
        "color": 16711680,
        "fields": [
          {
            "name": "Name",
            "value": name
          },
          {
            "name": "Email",
            "value": email
          },
          {
            "name": "Discord",
            "value": discord
          },
          {
            "name": "Platform",
            "value": platform.join(", ") + (platformOtherText ? " (" + platformOtherText + ")" : "")
          },
          {
            "name": "Favorite Feature",
            "value": feature + (featureOtherText ? " (" + featureOtherText + ")" : "")
          },
          {
            "name": "Overall Rating",
            "value": rating
          },
          {
            "name": "Liked",
            "value": liked
          },
          {
            "name": "Disliked",
            "value": disliked
          },
          {
            "name": "Improvements",
            "value": improvements
          },
          {
            "name": "Elements Noticed",
            "value": elements.join(", ") + (elementOtherText ? " (" + elementOtherText + ")" : "")
          }
        ]
      }]
    };
    
    $.ajax({
      url: "https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz",
      type: "POST",
      data: JSON.stringify(payload),
      contentType: "application/json",
      success: function() {
        alert("Thank you for your feedback!");
        $("form")[0].reset();
      },
      error: function() {
        alert("Oops! Something went wrong. Please try again later.");
      }
    });
  }
});
