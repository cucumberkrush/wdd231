// Add these enhancements:
const displayBusinesses = (businesses) => {
  const container = document.getElementById('business-container');
  if (!container) return;
  
  // Add error handling for missing image
  container.innerHTML = businesses.map(business => `
    <div class="business-card">
      <img src="images/${business.image || 'default.jpg'}" 
           alt="${business.name}" 
           loading="lazy"
           onerror="this.src='images/default.jpg'">
      <!-- Rest of your template -->
    </div>
  `).join('');
};

// Initialize default view on load
if (gridBtn && listBtn) {
  gridBtn.classList.add('active'); 
}