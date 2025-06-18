document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = '<div class="loading-spinner"></div>';

    fetch('data/members.json')
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
        })
        .then(data => {
            // Filter gold/silver members only
            const premiumMembers = data.members.filter(member => 
                ['gold', 'silver'].includes(member.membershipLevel.toLowerCase())
            );

            // Randomly select 2-3 members
            const shuffled = [...premiumMembers].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 2 + Math.floor(Math.random() * 2)); // 2 or 3

            // Generate HTML
            container.innerHTML = selected.map(member => `
                <div class="spotlight-card ${member.membershipLevel}">
                    <img src="images/logos/${member.image}" 
                         alt="${member.name}" 
                         loading="lazy"