document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const player = document.getElementById('player');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const videoId = thumb.dataset.videoId;
            player.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>`;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
