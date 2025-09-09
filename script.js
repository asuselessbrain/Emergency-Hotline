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


