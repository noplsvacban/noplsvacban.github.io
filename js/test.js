const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
    function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const discord = document.querySelector('#discord').value;
    const platform = [];
    const platformCheckboxes = document.querySelectorAll('input[name="platform"]:checked');
    platformCheckboxes.forEach((checkbox) => {
      platform.push(checkbox.value);
    });
    const platformOtherText = document.querySelector('#platform_other_text').value;
    if (platformOtherText) {
      platform.push(platformOtherText);
    }
    const favoriteFeature = document.querySelector('input[name="feature"]:checked').value;
    const featureOtherText = document.querySelector('#feature_other_text').value;
    if (featureOtherText) {
      favoriteFeature += ` (${featureOtherText})`;
    }
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const liked = document.querySelector('#liked').value;
    const disliked = document.querySelector('#disliked').value;
    const improvements = document.querySelector('#improvements').value;
const elements = [];
const elementCheckboxes = document.querySelectorAll('input[name="elements[]"]:checked');
elementCheckboxes.forEach((checkbox) => {
elements.push(checkbox.value);
});
const elementOtherText = document.querySelector('#element_other_text').value;
if (elementOtherText) {
elements.push(elementOtherText);
}
const contact = document.querySelector('input[name="contact"]:checked').value;
const comments = document.querySelector('#comments').value;
          const payload = {
      "content": `**New Feedback**\n\n**Name:** ${name}\n**Email:** ${email}\n**Discord:** ${discord}\n**Platform:** ${platform.join(", ")}\n**Favorite Feature:** ${favoriteFeature}\n**Rating:** ${rating}\n**What I Liked:** ${liked}\n**What I Disliked:** ${disliked}\n**Improvements:** ${improvements}\n**Elements Noticed:** ${elements.join(", ")}\n**Preferred Contact Method:** ${contact}\n**Additional Comments:** ${comments}`,
      "username": "Game Feedback Bot",
      "avatar_url": "https://cdn.pixabay.com/photo/2016/07/23/12/08/wolf-1532158_960_720.png",
      "embeds": [
        {
          "title": "New Feedback",
          "description": "A new feedback has been submitted",
          "color": 15258703,
          "footer": {
            "text": `Submitted at ${new Date().toLocaleString()}`
          }
        }
      ]
    }

    const webhookUrl = "https://discord.com/api/webhooks/867782270000693259/cPvSV8WfnsBloKeYzp9HzADN6wKgXkKOQqfOIEiJn7RxVIf3Oh4bgMA13ZeMe5jIic8G";
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(() => {
      alert('Thank you for your feedback!');
      form.reset();
    })
    .catch(() => {
      alert('There was an error submitting your feedback. Please try again later.');
    });
  }
