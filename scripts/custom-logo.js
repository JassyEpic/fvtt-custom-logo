function setLogoSrc() {
    const logoElement = document.getElementById("logo");
    const logoPath = game.settings.get("custom-logo", "logoPath");

    if (logoElement) {
        logoElement.src = logoPath;
        // logoElement.setAttribute("src", path);
    }
}

Hooks.on("init", function () {
    game.settings.register("custom-logo", "logoPath", {
        name: game.i18n.localize("custom-logo.settings.logoPath"),
        // hint: game.i18n.localize("custom-logo.settings.logoPath.hint"),
        scope: "world",
        config: true,
        type: String,
        default: "modules/custom-logo/ui/fvtt.png",
        filePicker: true,
        onChange: (path) => {
            setLogoSrc();
            location.reload();
        }
    });
});

Hooks.on("ready", function () {
    setLogoSrc();
});
