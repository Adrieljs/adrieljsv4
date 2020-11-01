function copyDiscordLink() {
    copyer("discordlink");
    var c = document.getElementById("copybutton");
    c.classList = "far fa-check animated bounce";
    c.style = "color: #13eba2";
    setTimeout(function() {
        var c = document.getElementById("copybutton");
        c.classList = "fad fa-clone mouse-pointer animated bounce";
        c.style = '';
    }, 5000);
}