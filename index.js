function copyDiscordLink() {
    this.x;
    if (this.x === 0 || !this.x) {
        copyer("discordlink");
        var c = document.getElementById("copybutton");
        c.classList = "far fa-check animated bounce";
        c.style = "color: #13eba2";
        this.x = 1;
        setTimeout(function() {
        var c = document.getElementById("copybutton");
        c.classList = "fad fa-clone mouse-pointer animated bounce";
        this.x = 0;
        c.style = '';
        }, 5000);
    }
}