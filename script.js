document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const customSelect = document.getElementById('customSelect');

    const closeMenu = () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    };

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('#')) return;

        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.getElementById(href.slice(1));
            if (!target) return;

            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: 'smooth'
            });

            closeMenu();
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    if (customSelect) {
        initCustomSelect(customSelect);
    }

    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const position = window.scrollY + 100;
        let activeId = '';

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (position >= top && position < bottom) {
                activeId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    };

    updateActiveNavLink();
    window.addEventListener('scroll', debounce(updateActiveNavLink, 80), { passive: true });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});

async function handleContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const status = document.getElementById('status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent || 'Send Message';
    const actionPath = form.getAttribute('action') || 'contact_handler.php';
    const actionUrl = window.location.port === '5500'
        ? 'http://localhost/HPF.WORLD/contact_handler.php'
        : new URL(actionPath, window.location.href).href;

    if (status) {
        status.textContent = 'Sending message...';
        status.style.backgroundColor = '#f3f4f6';
        status.style.color = '#374151';
    }

    if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    }

    try {
        const response = await fetch(actionUrl, {
            method: (form.getAttribute('method') || 'POST').toUpperCase(),
            headers: { Accept: 'application/json' },
            body: formData
        });

        const responseText = await response.text();
        let data = {};

        if (responseText.trim()) {
            data = JSON.parse(responseText);
        }

        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Message could not be sent.');
        }

        if (status) {
            status.textContent = 'Message sent successfully.';
            status.style.backgroundColor = '#10b981';
            status.style.color = '#ffffff';
        }

        form.reset();
        const selected = document.querySelector('#customSelect .select-selected');
        const hiddenInput = document.getElementById('interest');
        if (selected) selected.textContent = 'Select an area';
        if (hiddenInput) hiddenInput.value = '';
    } catch (error) {
        if (status) {
            status.textContent = error.message || 'Message could not be sent. Please try again later.';
            status.style.backgroundColor = '#ef4444';
            status.style.color = '#ffffff';
        }
    } finally {
        if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

function initCustomSelect(customSelect) {
    const selected = customSelect.querySelector('.select-selected');
    const items = customSelect.querySelector('.select-items');
    const hiddenInput = document.getElementById('interest');

    if (!selected || !items || !hiddenInput) return;

    selected.addEventListener('click', event => {
        event.stopPropagation();
        items.classList.toggle('select-hide');
        selected.classList.toggle('select-arrow-active');
    });

    items.querySelectorAll('[data-value]').forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            hiddenInput.value = option.getAttribute('data-value') || '';
            items.classList.add('select-hide');
            selected.classList.remove('select-arrow-active');
            items.querySelectorAll('[data-value]').forEach(item => {
                item.classList.toggle('selected', item === option);
            });
        });
    });

    document.addEventListener('click', event => {
        if (!customSelect.contains(event.target)) {
            items.classList.add('select-hide');
            selected.classList.remove('select-arrow-active');
        }
    });
}

function debounce(func, wait) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), wait);
    };
}
