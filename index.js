async function copyDiscordLink() {
    this.x;
    if (this.x === 0 || !this.x) {
        copyer("discordlink");
        var c = document.getElementById("copybutton");
        c.classList = "far fa-check animated bounce";
        c.style = "color: #13eba2";
        this.x = 1;
        document.getElementById("copypopuptext").attributes[1].value = "Copied!"
        setTimeout(function() {
        var c = document.getElementById("copybutton");
        c.classList = "fad fa-clone mouse-pointer animated bounce";
        this.x = 0;
        document.getElementById("copypopuptext").attributes[1].value = "Copy"
        c.style = '';
        }, 5000);
    }
}