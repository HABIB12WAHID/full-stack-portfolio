// Handle CV download button
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    // Simulate CV download using JavaScript
    const link = document.createElement('a');
    link.href = 'Habib_Wahid_CV.pdf'; // Replace with your actual CV path
    link.download = 'Habib_Wahid_CV.pdf';
    link.click();
});

// Handle Hire Me button
document.getElementById('hireMeBtn').addEventListener('click', function () {
    // Open email client
    window.location.href = 'mailto:habibwahid199183@gmail.com?subject=Hire Me&body=I am interested in your services.';
});
