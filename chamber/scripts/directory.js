document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mainNav = document.getElementById('main-nav');
    
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // View toggle
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');
    const businessContainer = document.getElementById('business-container');
    
    if (gridBtn && listBtn && businessContainer) {
        gridBtn.addEventListener('click', () => {
            businessContainer.className = '';
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        });
        
        listBtn.addEventListener('click', () => {
            businessContainer.className = 'list-view';
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        });
    }

    // Load business data
    async function loadBusinesses() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            displayBusinesses(data.members);
        } catch (error) {
            console.error('Error loading businesses:', error);
        }
    }

    function displayBusinesses(businesses) {
        const container = document.getElementById('business-container');
        if (!container) return;
        
        container.innerHTML = businesses.map(business => `
            <div class="business-card">
                <img src="images/${business.image}" alt="${business.name}" loading="lazy">
                <h3>${business.name}</h3>
                <p>${business.address}</p>
                <p>${business.phone}</p>
                <p>Membership: ${business.membership}</p>
            </div>
        `).join('');
    }

    loadBusinesses();
});