document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Modal Popup for Project Details
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('h3').textContent;
        const projectDesc = card.querySelector('p').textContent;
        showModal(projectTitle, projectDesc);
    });
});

function showModal(title, desc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
}

// 3. Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "↑ Scroll to Top";
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.classList.add('dark-mode-btn');
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});