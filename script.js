function digitalClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    document.getElementById("id_clock").textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(digitalClock, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    digitalClock();
    
    // Загрузка счетчика посещений
    const script = document.createElement('script');
    script.src = "//counter.websiteout.com/js/3/8/0/1";
    document.getElementById('visit-counter').appendChild(script);
});