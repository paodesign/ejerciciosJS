import { Header, Footer, View, FormContent, TableContent } from "./view.js";
import { People } from "./model.js";

const header = new Header("Mi titulo bb");
const footer = new Footer("Chau churry");

const form = new FormContent();
form.addInput('text','Nombre completo');
form.addInput('email','Correo electronico');
form.addInput('button','Enviar');

const persona1 = new People(1, "Bruno", "Diaz");
const persona2 = new People(2, "Juan", "Perez");
const persona3 = new People(3, "María", "Rosa");
const arreglo = [persona1,persona2,persona3];
const lista = new TableContent(arreglo);

const view = new View(lista, header, footer);
view.createView();
