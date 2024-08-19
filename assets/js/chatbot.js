document.getElementById('closeChatBot').addEventListener('click', function () {
    document.getElementById('chatBotButton').click();
});

// Auto close on scroll
window.addEventListener('scroll', function () {
    const chatBotButton = document.getElementById('chatBotButton');
    const chatBotDropdown = document.getElementById('chatBotDropdown');

    if (chatBotDropdown.classList.contains('show')) {
        chatBotButton.click();
    }
});
