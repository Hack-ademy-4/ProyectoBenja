// el producto. Esqueleto:
/*
product {
	id,
	categoria,
	titulo,
	descripcion,
	precio,
	autor,
  pago, //[transferencia, paypal, otros]
	seguidores: [autor, autor, ...]
}

categorias [
	electrodomesticos,
	electronica,
	herramientas,
	vehiculos,
	ropa // y complementos
	inmuebles,
]

autor {
	nombre,
	apellidos,
	tel,
	email,
	calle, // y numero
	localidad,
	cp // codigo postal
	provincia,
	pais
}

*/

import {html, LitElement} from 'https://unpkg.com/lit@2.0.0-rc.2?module';

import { LitElement, html } from 'lit-element';

export class Product extends LitElement {
	// Propiedades
	static get properties() {
		return {
			last: { type: Number }, // Mostrar los ultimos...
			categoria: {type: String} // categoria a mostrar, nada = todas
		};
	}


	static styles = css`
		:host {
			display: block;
		}
	`;

	constructor() {
		super();
		this.last = 10;
		this.categoria = null;
	}

	createRenderRoot() {
    return this;
  }

	render() {
		return html``;
	}
}
customElements.define('productos-show', Product);