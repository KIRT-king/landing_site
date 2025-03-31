document.querySelector('.show_requirements').addEventListener('click', function() {
    const requirementsBlock = document.getElementById('requirements_id');
    requirementsBlock.classList.add('show');
    this.style.display = 'none';

    const offset = requirementsBlock.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.2);

    window.scrollTo({ top: offset, behavior: 'smooth' });
});

document.querySelector('.hide_requirements').addEventListener('click', function() {
    const requirementsBlock = document.getElementById('requirements_id');
    
    const blockHeight = requirementsBlock.offsetHeight;

    requirementsBlock.classList.remove('show');
    document.querySelector('.show_requirements').style.display = 'block';

    window.scrollBy({ top: -blockHeight + (window.innerHeight * 0.2), behavior: 'smooth' });
});
