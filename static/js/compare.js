document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('compareForm').addEventListener('change', function() {
        var country1 = document.getElementById('country1').value;
        var country2 = document.getElementById('country2').value;
        var metric = document.getElementById('metric').value;

        if (country1 && country2 && metric) {
            document.getElementById('compareButton').disabled = false;
        } else {
            document.getElementById('compareButton').disabled = true;
        }
    });

    // Download plot
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const plotImg = document.querySelector('img');
        const imgSrc = plotImg.src;
        const downLink = document.createElement('a');
        downLink.href = imgSrc;
        downLink.download = '2_countries_comparison.png';
        document.body.appendChild(downLink);
        downLink.click();
        document.body.removeChild(downLink);
    });
});
