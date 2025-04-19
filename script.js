


// FAQ Section Script

const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.faq-toggle').textContent = '+';
            }
        });
        const isActive = item.classList.contains('active');
        item.classList.toggle('active');
        item.querySelector('.faq-toggle').textContent = isActive ? '+' : '−';
    });
});
