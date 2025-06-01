document.addEventListener("DOMContentLoaded", function () {
    // 1. Aktifkan link navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Checkbox: hanya satu yang bisa dipilih
    const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="c"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxes.forEach(box => {
                    if (box !== this) box.checked = false;
                });
            }
        });
    });

    // 3. Tampilkan/sembunyikan elemen .rightT tergantung checkbox "slide"
    const slideCheckboxes = document.querySelectorAll('input[type="checkbox"][name="slide"]');
    const rightTitle = document.querySelector('.rightT');

    function updateTitleVisibility() {
        const anyChecked = Array.from(slideCheckboxes).some(chk => chk.checked);

        if (rightTitle) {
            rightTitle.style.opacity = anyChecked ? '0' : '1';
            rightTitle.style.pointerEvents = anyChecked ? 'none' : 'auto';
            rightTitle.style.transition = 'opacity 0.3s ease';
        }
    }

    slideCheckboxes.forEach(chk => {
        chk.addEventListener('change', updateTitleVisibility);
    });

    updateTitleVisibility();

    // 4. Carousel next/prev
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if (next && prev) {
        next.addEventListener('click', function () {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function () {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        });
    }
});
