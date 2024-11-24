let player = {
    name: '',
    money: 1000,
    job: null,
    properties: [],
    vehicles: [],
    food: []
};

function createPlayer(name) {
    player.name = name;
    console.log(`Персонаж ${player.name} создан!`);
}
