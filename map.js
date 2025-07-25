// map.js

// Big map size (way bigger than canvas)
const map = {
  width: 3000,
  height: 3000,
  tileSize: 60,
  backgroundColor: "#228B22" // Fortnite grass vibes
};

// Tile objects (simple terrain for now)
const tileMap = []; // 2D array

for (let y = 0; y < map.height / map.tileSize; y++) {
  tileMap[y] = [];
  for (let x = 0; x < map.width / map.tileSize; x++) {
    tileMap[y][x] = {
      type: "grass", // placeholder for other types later
      color: "#228B22"
    };
  }
}

function drawMap(ctx, cameraX, cameraY) {
  const tilesX = Math.ceil(canvas.width / map.tileSize) + 1;
  const tilesY = Math.ceil(canvas.height / map.tileSize) + 1;

  const startX = Math.floor(cameraX / map.tileSize);
  const startY = Math.floor(cameraY / map.tileSize);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      const tile = tileMap[startY + y]?.[startX + x];
      if (!tile) continue;

      ctx.fillStyle = tile.color;
      ctx.fillRect(
        x * map.tileSize - (cameraX % map.tileSize),
        y * map.tileSize - (cameraY % map.tileSize),
        map.tileSize,
        map.tileSize
      );
    }
  }
}
