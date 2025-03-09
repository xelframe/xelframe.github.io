var text = `
       Expecting device dev-browser-tab.device...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Remote File Systems.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on Delayed Shutdown Socket.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on /dev/initctl Compatibility Named Pipe.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Encrypted Volumes.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on udev Kernel Socket.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on udev Control Socket.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Set up automount Arbitrary Executable File Formats F...utomount Point.
       Expecting device dev-disk-by\x2duuid-6038ea52\ ce4c9.device...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on Journal Socket.
       Starting File System Check on Root Device...
       Starting udev Kernel Device Manager...
       Mounting Debug File System...
       Starting Journal Service...
       Started Journal Service.
       Starting Apply Kernel Variables... Starting udev Coldplug all Devices...
       Mounting Huge Pages File System...
       Mounting POSIX Message Queue File System...
       Starting Setup Virtual Console...
       Starting Set Up Additional Binary Formats...
       Mounting Configuration File System...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Apply Kernel Variables.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started udev Kernel Device Manager.
       Mounting Arbitrary Executable File Formats File System...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started udev Coldplug all Devices.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted POSIX Message Queue File System.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted Debug File System.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted Configuration File System.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted Huge Pages File System.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted Arbitrary Executable File Formats File System.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Set Up Additional Binary Formats.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Setup Virtual Console.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Found device /dev/browser-tab.
       systemd-fsck [53]: semkapc: clean, 319575/983040 files, 2914206/3932160 blocks
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started File System Check on Root Device.
       Starting Remount Root and Kernel File Systems...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Remount Root and Kernel File Systems.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Local File Systems (Pre).
       Mounting Temporary Directory...
       Starting Load Random Seed...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Mounted Temporary Directory.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Local File Systems.
       Starting Recreate Volatile Files and Directories...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Found device browser-storage.
       Activating swap /dev/disk/by-uuid/6038ea52-80a2-42c5...d0a22e1ce4c9...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Load Random Seed.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Activated swap /dev/sda2.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Swap.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Recreate Volatile Files and Directories.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target System Initialization. Starting Restore Sound Card State...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on SSH Socket for Per-Connection Servers.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Listening on D-Bus System Message Bus Socket.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Sockets.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Basic System.
       Starting Network Manager...
       Starting Network Time Service...
       Starting Command Scheduler...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Command Scheduler.
       Starting Login Service...
       Starting Avahi mDNS/DNS-SD Stack...
       Starting Permit User Sessions...
       Starting D-Bus System Message Bus.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Restore Sound Card State.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Network Time Service.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Network Time Protocol.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Permit User Sessions.
       Starting Serial Getty on browser-tab...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Serial Getty on browser-tab.
       Starting Getty on browser-tab...
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Getty on browser-tab.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Login Prompts.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started D-Bus System Message Bus.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Avahi mDNS/DNS-SD Stack.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Login Service.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Started Network Manager.
[ <span style="color: rgb(0, 255, 0);">OK</span> ] Reached target Multi-User.

`.split('\n')

var terminal = document.getElementById('terminal');
var i = 1;

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
    try {
        const script = document.createElement('script');
        script.src = "//counter.websiteout.com/js/3/8/0/1";
        document.getElementById('visit-counter').appendChild(script);
    } catch (e) {}
});

if (!sessionStorage.getItem('animated')){
    sessionStorage.setItem('animated', 'true');
    document.body.classList.add('anim');
    document.getElementById('content').style.display = 'none';
    document.body.style.overflow = 'hidden';
    terminal.style.display = 'block';
    setTimeout(function() {
        var systemd = setInterval(function(){
            if (i != text.length) {
                terminal.insertAdjacentHTML('beforeend', `<p>${text[i - 1]}</p>`);
                terminal.scrollTop = terminal.scrollHeight;
                i++;
            } else {
                clearInterval(systemd);
                setTimeout(function(){
                    terminal.insertAdjacentHTML('beforeend', `<br><p>semkapc Page<br>Kernel html5 on an html5 (tab)</p><br><p>root login: <span style="color: white; background-color: white;">_</span></p><br>`);
                    terminal.scrollTop = terminal.scrollHeight;
                    setTimeout(function(){
                        document.body.style.overflow = 'auto';
                        document.getElementById('content').style.display = 'block';
                        terminal.remove();
                    }, 1000)
                }, 2000);
            }
        }, 10);
    }, 3000)
} else {
    terminal.remove();
}
