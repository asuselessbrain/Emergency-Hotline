function getNavValue(id) {
    const NavValue = document.getElementById(id);
    const NavValueNumber = parseInt(NavValue.innerText); 
    return NavValueNumber;
}

// Hurt Increment

document.querySelectorAll('.hurt-btn').forEach(function(btn){
    btn.addEventListener('click', function () {
        let hurtValue = getNavValue('hurt');
        document.getElementById('hurt').innerText = hurtValue + 1; 
    });
});

// Copy functionality

document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', function() {
        const phoneNumber = this.closest('.bg-white')
            .querySelector('.phone-number')
            .textContent.trim();

        navigator.clipboard.writeText(phoneNumber).then(() => {
          
            alert(`Copied: ${phoneNumber}`);

            // Increment copy counter
            let copyUpdation = parseInt(document.getElementById('copy-update').innerText, 10);
            document.getElementById('copy-update').innerText = copyUpdation + 1;

        }).catch(err => {
            
            alert('Failed to copy number: ' + err);
        });
    });
});



