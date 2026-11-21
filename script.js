const tiles = document.querySelectorAll(".level-tile");
const info = document.getElementById("level-info");
const defaultText = info.textContent;
tiles.forEach(function (tile) {
    tile.addEventListener("mouseenter", function () {
		info.textContent = tile.dataset.info;
	});

    tile.addEventListener("mouseleave", function () {
		info.textContent = defaultText;
	});
});