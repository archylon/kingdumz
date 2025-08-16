// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
const searchInput = document.getElementById('location-search');
const searchBtn = document.querySelector('.search-btn');

// Search suggestions
const locations = [
    { name: 'Los Angeles', url: 'https://fredonia.kingdumz.com', description: 'The Kingdom of Fredonia' },
    { name: 'New Zealand', url: 'https://karaka.kingdumz.com', description: 'Karaka Retreat' }
];

// Create search suggestions dropdown
let suggestionsContainer = null;

function createSuggestionsContainer() {
    if (suggestionsContainer) {
        suggestionsContainer.remove();
    }
    
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-top: none;
        border-radius: 0 0 15px 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        max-height: 200px;
        overflow-y: auto;
    `;
    
    return suggestionsContainer;
}

function showSuggestions(query) {
    if (!query.trim()) {
        if (suggestionsContainer) {
            suggestionsContainer.remove();
            suggestionsContainer = null;
        }
        return;
    }
    
    const filteredLocations = locations.filter(location => 
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.description.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filteredLocations.length === 0) {
        if (suggestionsContainer) {
            suggestionsContainer.remove();
            suggestionsContainer = null;
        }
        return;
    }
    
    const container = createSuggestionsContainer();
    
    filteredLocations.forEach(location => {
        const suggestion = document.createElement('div');
        suggestion.className = 'search-suggestion';
        suggestion.style.cssText = `
            padding: 1rem;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: background 0.2s ease;
        `;
        
        suggestion.innerHTML = `
            <div style="font-weight: 600; color: #1e3c72;">${location.name}</div>
            <div style="font-size: 0.9rem; color: #666;">${location.description}</div>
        `;
        
        suggestion.addEventListener('mouseenter', () => {
            suggestion.style.background = '#f8f9fa';
        });
        
        suggestion.addEventListener('mouseleave', () => {
            suggestion.style.background = 'white';
        });
        
        suggestion.addEventListener('click', () => {
            window.location.href = location.url;
        });
        
        container.appendChild(suggestion);
    });
    
    // Remove border-bottom from last suggestion
    const lastSuggestion = container.lastElementChild;
    if (lastSuggestion) {
        lastSuggestion.style.borderBottom = 'none';
    }
    
    const searchBox = document.querySelector('.search-box');
    searchBox.style.position = 'relative';
    searchBox.appendChild(container);
}

// Search input event listeners
searchInput.addEventListener('input', (e) => {
    showSuggestions(e.target.value);
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
        showSuggestions(searchInput.value);
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        if (suggestionsContainer) {
            suggestionsContainer.remove();
            suggestionsContainer = null;
        }
    }
});

// Search button click
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        const location = locations.find(loc => 
            loc.name.toLowerCase().includes(query.toLowerCase()) ||
            loc.description.toLowerCase().includes(query.toLowerCase())
        );
        
        if (location) {
            window.location.href = location.url;
        }
    }
});

// Enter key in search input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Add CSS for search suggestions
const style = document.createElement('style');
style.textContent = `
    .search-suggestion:hover {
        background: #f8f9fa !important;
    }
    
    .search-suggestion:last-child {
        border-radius: 0 0 15px 15px;
    }
`;
document.head.appendChild(style);

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .location-detail, .location-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to location cards
    const locationCards = document.querySelectorAll('.location-card, .location-detail');
    
    locationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.book-now-btn, .search-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    });
});
