"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("../aula07-classes/animal");
var dao_1 = require("./dao");
var cavalo_1 = require("../aula07-classes/cavalo");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Florzinha');
dao.insert(animal);
var cavalo = new cavalo_1.Cavalo('Cavalo');
dao.insert(cavalo);
//# sourceMappingURL=run.js.map