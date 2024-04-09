document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('analysisForm').addEventListener('change', function() {
        var countryCode = document.getElementById('age_group').value;
        var ageGroup = document.getElementById('gender').value;
        var gender = document.getElementById('year').value;
    
        if (countryCode && ageGroup && gender) {
            document.getElementById('submitButton').disabled = false;
        } else {
            document.getElementById('submitButton').disabled = true;
        }
    });

    // Download plots
    document.querySelectorAll('.download-btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const pData = this.getAttribute('data-plot');
            const downLink = document.createElement('a');
            downLink.href = 'data:image/png;base64,' + pData;
            downLink.download = 'allAnalysis.png'; 
            document.body.appendChild(downLink);
            downLink.click();
            document.body.removeChild(downLink);
        });
    });
});
