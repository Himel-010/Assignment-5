// DOnate er kaam kaaaj
document.addEventListener('DOMContentLoaded', function () {
    let donateButtons = document.querySelectorAll('#donate-btn');

    donateButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('donationModal').checked = true;
        });
    });
});
