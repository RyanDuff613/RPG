import { Player } from "./../src/businessLogic.js";

describe('Player', () => {

  test('should create a new instance of Player', () => {
    var player = new Player('andy');
    expect(player.name).toEqual('andy');
    expect(player.health).toEqual(50);
    expect(player.strenght).toEqual(50);
  });

});