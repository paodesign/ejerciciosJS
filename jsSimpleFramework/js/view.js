export class View {

    constructor(content, header = null, footer = null) {
        this.header = header;
        this.content = content;
        this.footer = footer;
    }

    createView() {
        this.header?.showTitle();
        this.footer?.showFooter();
        this.content.render();
    }
}

export class Header {
    constructor(title) {
        this.title = title;
        this.element = document.querySelector("#header");
    }

    showTitle() {
        const h1 = document.createElement("h1");
        h1.innerText = this.title;
        this.element.appendChild(h1);
    }


}

export class Footer {
    constructor(description) {
        this.description = description;
        this.element = document.querySelector("#footer");
    }

    showFooter() {
        const h6 = document.createElement("h6");
        h6.innerText = this.description;
        h6.style.textAlign = "center";
        this.element.appendChild(h6);
    }
}

class Content {
    constructor() {
        this.element = document.querySelector("#content");
    }

    render() {
        throw new Error("Not yet implemented");
    }
}

export class TableContent extends Content {
    constructor(items) {
        super();
        this.items = items;
    }

    render() {
        console.log(this.items);
        //aca mostramos la tabla
        const ul = document.createElement('ul');
        ul.innerHTML = this.items.map((item) => {
            return `<li>${item.toRow()}</li>`
        }).join("");
        this.element.appendChild(ul);  
    }
}

export class FormContent extends Content {
    constructor() {
        super();
        this.inputs = [];
    }

    addInput(tipo, text) {
        let field;

        switch (tipo) {
            case "text":
                field = new InputText(text);
                break;
            case "email":
                field = new InputEmail(text);
                break;
            case "button":
                field = new Button(text);
                break;
            default:
                throw new Error("Tipo no valido" + tipo);
        }
        this.inputs.push(field);
    }

    render() {
        let form = document.createElement('form');

        this.inputs.forEach((input) => {
            form.appendChild(input.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        })
        this.element.appendChild(form);
    }
}

class Input {
    constructor(text) {
        this.text = text;
    }
}

class InputText extends Input {
    constructor(text) {
        super(text);
    }
    crearElemento() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.text);
        return inputText;
    }
}

class InputEmail extends Input {
    constructor(texto) {
        super(texto);
    }
    crearElemento() {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.text);
        return inputEmail;
    }
}

class Button extends Input {
    constructor(texto) {
        super(texto);
    }
    crearElemento() {
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.textContent = this.text;
        return button;
    }
}
