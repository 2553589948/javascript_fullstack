"use strict";
var getUsername = function (user) { return user.name; };
var getUsername1 = function (user) {
    user.say = function (words) {
        return 'hello world';
    };
};
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ width: 5 });
var mySquare1 = CalculateAreas({ widdth: 5 });
var mySquare2 = CalculateAreas({ widdth: 5 });
//# sourceMappingURL=interface.js.map