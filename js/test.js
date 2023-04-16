      const form = document.getElementById('qa-form');
      const platformSelect = document.getElementById('platform');
      const otherPlatformDiv = document.getElementById('other-platform-div');
      const otherPlatformInput = document.getElementById('other-platform');
      const emailInput = document.getElementById('email');
      const discordInput = document.getElementById('discord');

      platformSelect.addEventListener('change', () => {
        if (platformSelect.value === 'other') {
          otherPlatformDiv.style.display = 'block';
          otherPlatformInput.required = true;
        } else {
          otherPlatformDiv.style.display = 'none';
          otherPlatformInput.required = false;
        }
      });

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const favGame = document.getElementById('fav-game').value;
        const platform = document.getElementById('platform').value;
        const question = document.getElementById('question').value;
        const email = emailInput.value;
        const discord = discordInput.value;

        if (!email && !discord) {
          alert('Please provide at least one contact method (email or Discord).');
          return;
        }

        if (discord) {
          emailInput.required = false;
        } else {
          emailInput.required = true;
        }

        if (email) {
          discordInput.required = false;
        } else {
          discordInput.required = true;
        }

        let payloadContent = `New question from ${name} (${age} years old):\n\nFavorite game: ${favGame}\nPlatform: ${platform}\nQuestion: ${question}`;

        if (email) {
          payloadContent += `\nEmail: ${email}`;
        }

        if (discord) {
          payloadContent += `\nDiscord username: ${discord}`;
    }

    const payload = {
      content: payloadContent
    };

    const webhookUrl = 'https://discord.com/api/webhooks/867782270000693259/cPvSV8WfnsBloKeYzp9HzADN6wKgXkKOQqfOIEiJn7RxVIf3Oh4bgMA13ZeMe5jIic8G';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Your question has been submitted!');
      form.reset();
    })
    .catch(error => {
      alert('There was an error submitting your question. Please try again later.');
      console.error('Error:', error);
    });
  });
