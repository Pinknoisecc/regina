window.onscroll = function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

function scrollToTop() {
    const scrollToTopButton = document.getElementById('scrollTopButton');

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    scrollToTop(); 

    scrollToTopButton.style.backgroundColor = '#333';
}
