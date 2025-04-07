var terminal = document.getElementById('terminal');

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
    
    try {
        const script = document.createElement('script');
        script.src = "//counter.websiteout.com/js/3/8/0/1";
        document.getElementById('visit-counter').appendChild(script);
    } catch (e) {}
});

if (!sessionStorage.getItem('animated')) {
       sessionStorage.setItem('animated', 'true');
       document.body.classList.add('anim');
       document.getElementById('content').style.display = 'none';
       document.body.style.overflow = 'hidden';
       terminal.style.display = 'block';
   
       setTimeout(function() {
           terminal.insertAdjacentHTML('beforeend', `<h2>Loading page...</h2>`);
           terminal.scrollTop = terminal.scrollHeight;
           
           setTimeout(function() {
               document.body.style.overflow = 'auto';
               document.getElementById('content').style.display = 'block';
               terminal.remove();
           }, 1500);
       }, 300);
   } else {
       terminal.remove();
   }

var arr = [
       'https://my-wallpapers.github.io/my-wallpapers/Dark_forest.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Dark_park.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Ducks_in_the_sea.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Flower.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Flowers.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Grass.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Hill.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Insects.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Keys.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Leaf.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Leaves_in_the_rock.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Mountain.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Plank.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Sky.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Stairs.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Stones.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Stop.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Sun.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Sunset.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/Trees.jpg',
       'https://my-wallpapers.github.io/my-wallpapers/lamp_dark.png',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Light%20Auras/img27.jpg',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Widescreen/img35.jpg',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Textures/img6.jpg',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Vistas/img20.jpg',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Vistas/img18.jpg',
       'https://my-wallpapers.github.io/windows/original/windows-vista/Widescreen/img31.jpg'

     ];
     
     function rand(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
     }
     
     var savedWallpaper = sessionStorage.getItem('backgroundWallpaper');
     
     if (savedWallpaper) {
       document.body.style.backgroundImage = 'url(' + savedWallpaper + ')';
     } else {
       var selectedWallpaper = arr[rand(0, arr.length)];
       document.body.style.backgroundImage = 'url(' + selectedWallpaper + ')';
       sessionStorage.setItem('backgroundWallpaper', selectedWallpaper);
     }