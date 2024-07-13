// script.js

document.addEventListener('DOMContentLoaded', () => {
    const outfitList = document.querySelector('.outfit-list');
    const paymentOptions = document.querySelector('.payment-options');
    const streakCountElement = document.getElementById('streak-count');
    const checkInButton = document.getElementById('check-in');


    let streakCount = localStorage.getItem('streakCount') || 0;
    streakCountElement.textContent = `Streak: ${streakCount} days`;

    // Display outfits
    outfits.forEach(outfit => {
        const outfitDiv = document.createElement('div');
        outfitDiv.textContent = `${outfit.name} - ${outfit.price}`;
        outfitList.appendChild(outfitDiv);
    });

    // Display payment options
    payments.forEach(payment => {
        const paymentDiv = document.createElement('div');
        paymentDiv.textContent = payment.type;
        paymentOptions.appendChild(paymentDiv);
    });

    // Check-in button functionality
    checkInButton.addEventListener('click', () => {
        streakCount++;
        localStorage.setItem('streakCount', streakCount);
        streakCountElement.textContent = `Streak: ${streakCount} days`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const streakCountElement = document.getElementById('streak-count');
    const checkInButton = document.getElementById('check-in');
    
    let streakCount = 0;

    checkInButton.addEventListener('click', function () {
        streakCount++;
        streakCountElement.textContent = `Streak: ${streakCount} days`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    updateStreaks();

    document.getElementById('purchase-button').addEventListener('click', () => {
        incrementPurchaseStreak();
        updateStreaks();
    });
});

function updateStreaks() {
    const checkin = localStorage.getItem('checkin') || 0;
    const purchaseStreak = localStorage.getItem('purchaseStreak') || 0;

    document.getElementById('checkin').textContent = checkin;
    document.getElementById('purchasestreak').textContent = purchaseStreak;

    incrementcheckin();
}

function incrementcheckin() {
    let checkin = localStorage.getItem('checkin') || 0;
    checkin++;
    localStorage.setItem('checkin', checkin);
}

function incrementPurchaseStreak() {
    let purchaseStreak = localStorage.getItem('purchaseStreak') || 0;
    purchaseStreak++;
    localStorage.setItem('purchaseStreak', purchaseStreak);
}
