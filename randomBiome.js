adjectives = ["Snowy ", "Grassy ", "", "Redleaf ", "Midnight ", "Iron ", "Deadly ", "Red ", "White ", "Blue ", "Tall ", "Solenoid ", "Jack ", "4D ", "Klein ", "Health ", "Green "];
nouns = ["Tundra", "Taiga", "Hills", "Midnight", "Desert", "Air", "Grass", "Dirt", "Stone", "Wood", "Leaf", "Lava", "Ore", "Chest", "Soil", "Bush", "Flower", "Sand", "Sandstone", "Cactus", "Snow", "Ice", "Glass", "Pumpkin", "o'Lantern", "Stick", "Hammer", "Pick", "Axe", "Ultrahammer", "Collector", "Rock", "Hypersilk", "Bars", "Compass", "Glasses", "Bottle", "Potion", "Lens", "Alidade", "Handle", "Spider", "Butterfly"];
blocks = ["Air", "Grass", "Dirt", "Stone", "Wood", "Leaf", "Lava", "Iron Ore", "Deadly Ore", "Chest", "Midnight Grass", "Midnight Soil", "Midnight Stone", "Midnight Wood", "Midnight Leaf", "Bush", "Midnight Bush", "Red Flower", "White Flower", "Blue Flower", "Tall Grass", "Sand", "Sandstone", "Cactus", "Snow", "Ice", "Snowy Bush", "Glass", "Solenoid Ore", "Snowy Leaf", "Pumpkin", "Jack o'Lantern"];
trees = ["Snowy", "Redleaf", "Midnight"];
function random(array) {
    return array[randInt(0,array.length)];
}
function randInt(a,b) {
    return Math.floor(Math.random() * (b + 1 - a)) + a;
}
function newBiome(biome,biomeString) {
    biome = {};
    biome.name = random(adjectives) + random(nouns);
    biome.weight = randInt(0,100);
    biome.temperature = randInt(0,100);
    biome.moisture = randInt(0,100);
    biome.hMultiplier = randInt(10,15) / 10;
    biome.vMultiplier = randInt(5,40) / 100;
    biome.layers = [];
    for (i=0;i<randInt(0,3);i++){
        biome.layers[i] = {};
        biome.layers[i].block = random(blocks);
        biome.layers[i].depth = randInt(1,6);
    }
    biome.trees = [];
    for (i=0;i<randInt(0,3);i++){
        biome.trees[i] = {};
        biome.trees[i].type = random(trees);
        biome.trees[i].abundance = randInt(1,30);
    }
    biome.treeAbundance = randInt(0,100);
    biome.decorations = [];
    for (i=0;i<randInt(0,6);i++){
        biome.decorations[i] = {};
        biome.decorations[i].type = random(blocks);
        biome.decorations[i].abundance = randInt(1,30);
    }
    biome.decorationAbundance = randInt(0,100);
    biomeString = JSON.stringify(biome);
    return biomeString;
}