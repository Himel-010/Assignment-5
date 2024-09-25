// DOnate er kaam kaaaj
document.addEventListener('DOMContentLoaded', function () {
    let donateButtons = document.querySelectorAll('#noakhali-donate-btn');

    donateButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('donationModal').checked = true;
        });
    });
});


// 2nd

document.addEventListener('DOMContentLoaded', function () {
    let donateButtons = document.querySelectorAll('#feni-button');

    donateButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('donationModal').checked = true;
        });
    });
});

// 3rd

document.addEventListener('DOMContentLoaded', function () {
    let donateButtons = document.querySelectorAll('#quota-button');

    donateButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('donationModal').checked = true;
        });
    });
});
