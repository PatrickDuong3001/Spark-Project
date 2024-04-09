document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('country_code').addEventListener('change', function() {
        var countryCode = this.value;
        if (countryCode) {
            document.getElementById('ageGroupContainer').style.display = 'block';
            document.getElementById('genderContainer').style.display = 'block';
        } else {
            document.getElementById('ageGroupContainer').style.display = 'none';
            document.getElementById('genderContainer').style.display = 'none';
        }
    });
    
    document.getElementById('analysisForm').addEventListener('change', function() {
        var countryCode = document.getElementById('country_code').value;
        var ageGroup = document.getElementById('age_group').value;
        var gender = document.getElementById('gender').value;
    
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
            downLink.download = 'oneAnalysis.png'; 
            document.body.appendChild(downLink);
            downLink.click();
            document.body.removeChild(downLink);
        });
    });
});