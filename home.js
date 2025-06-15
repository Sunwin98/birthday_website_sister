function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "150644"; // รหัสผ่านที่ถูกต้อง
    
    if (password !== correctPassword) {
        Swal.fire({
            icon: 'error',
            title: '🚫 รหัสผ่านไม่ถูกต้อง!',
            text: 'กรุณาลองใหม่อีกครั้ง',
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#e74c3c',
            heightAuto: false,
            showClass: {
                popup: 'animate__animated animate__shakeX animate__faster',
                backdrop: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut animate__faster',
                backdrop: 'animate__animated animate__fadeOut'
            },
            customClass: {
                popup: 'swal2-error-popup',
                title: 'swal2-error-title',
                content: 'swal2-error-content'
            }
        });
        return false;
    }
    
    // Success Alert with Animation
    Swal.fire({
        icon: 'success',
        title: '🎉 ยินดีต้อนรับ!',
        text: 'เข้าสู่งานวันเกิดสำเร็จ!',
        confirmButtonText: '🎂 เริ่มงานเลย!',
        confirmButtonColor: '#00b894',
        heightAuto: false,
        timer: 3000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__bounceIn animate__faster',
            backdrop: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOut animate__faster',
            backdrop: 'animate__animated animate__fadeOut'
        },
        customClass: {
            popup: 'swal2-success-popup',
            title: 'swal2-success-title',
            content: 'swal2-success-content'
        },
        didOpen: () => {
            // แก้ปัญหา body height
            document.body.classList.remove('swal2-height-auto');
            document.body.style.setProperty('height', '100vh', 'important');
            
            // เพิ่ม confetti effect
            createConfettiEffect();
        },
        willClose: () => {
            document.body.classList.remove('swal2-height-auto');
            document.body.style.setProperty('height', '100vh', 'important');
        }
    }).then(() => {
        setTimeout(() => {
            window.location.href = 'swp.html';
        }, 500);
    });
    
    return true;
}
// เพิ่มใน DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // สร้าง Observer เพื่อเฝ้าดู body class changes
    const bodyObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                // ถ้าเจอ swal2-height-auto ให้แก้ทันที
                if (document.body.classList.contains('swal2-height-auto')) {
                    console.log('Detected swal2-height-auto, fixing...');
                    
                    // บังคับแก้ style
                    document.body.style.setProperty('height', '100vh', 'important');
                    document.body.style.setProperty('overflow', 'hidden', 'important');
                    document.body.style.setProperty('background', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'important');
                    document.body.style.setProperty('background-attachment', 'fixed', 'important');
                }
            }
        });
    });
    
    // เริ่ม observe
    bodyObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['class', 'style']
    });
    
    // ... rest of your existing code
});

