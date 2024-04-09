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
        const plotImage = document.querySelector('img');
        const imageSrc = plotImage.src;
        const downloadLink = document.createElement('a');
        downloadLink.href = imageSrc;
        downloadLink.download = '2_countries_comparison.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
