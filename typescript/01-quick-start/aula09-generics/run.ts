import { Animal } from "../aula07-classes/animal";
import { Dao } from "./dao";
import { Cavalo } from "../aula07-classes/cavalo";

let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Florzinha');
dao.insert(animal);

let cavalo: Cavalo = new Cavalo('Cavalo');
dao.insert(cavalo);