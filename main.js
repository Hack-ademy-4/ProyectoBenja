/// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API

//https://unpkg.com/lit@2.0.0-rc.2

import {html, LitElement} from 'https://unpkg.com/lit@2.0.0-rc.2?module';

const $ = selector => document.querySelector(selector),
			$$ = selector => document.querySelectorAll(selector),
			addClass = (e, c) => {
				const classList = $(e).classList;
				if (!classList.contains(c))
					classList.add(c);
				return classList;
			};


//window.addEventListener("load", main);

class mercaTitle extends LitElement {
	_calcOffset = (el) => {
		//if (!this._calcOffsetHandle)
			setTimeout(() => {		// Esperamos 100 milisegundos hasta que el usuario acabe de hacer scroll para ejecutar
				const clientH = Math.floor(window.innerHeight / 2);

				if ((window.pageYOffset + clientH) > el.offsetTop && (window.pageYOffset + clientH) < el.offsetTop + el.clientHeight)
				{
					//console.log("->", el.id);
					//console.log(window.pageYOffset + clientH, el.offsetTop, el.offsetTop + el.clientHeight);
					el.suLink.classList.add("active");
				}
				else
					el.suLink.classList.remove("active");

				this._calcOffsetHandle = null;
			}, 100);
	};

	_onScroll = () => {
		if (window.pageYOffset > 100 && $("nav").classList.contains("bg-transparent"))
			addClass("nav", "ele").remove("bg-transparent");

		if (window.pageYOffset < 100 && !$("nav").classList.contains("bg-transparent"))
			addClass("nav", "bg-transparent").remove("ele");
	
		this._calcOffset(this._about);
		this._calcOffset(this._services);
		this._calcOffset(this._portfolio);
		this._calcOffset(this._contact);
	};

	acceso = () => {
		this.modal.show();
	};

	static get properties() {
		return {
			menu: { type: Boolean }
		};
	}

	constructor() {
		super();
		this._calcOffsetHandle = null;
		this.menu = false;
		this.modal = new bootstrap.Modal($('#loginModal'));
		window.TT = this;
	}

	createRenderRoot() {
    return this;
  }

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('scroll', this._onScroll);

		this._about = $("#about");
		this._services = $("#services");
		this._portfolio = $("#portfolio");
		this._contact = $("#contact");
	}

	firstUpdated() {
		this._about.suLink = $("a[href='#about']");
		this._services.suLink = $("a[href='#services']");
		this._portfolio.suLink = $("a[href='#portfolio']");
		this._contact.suLink = $("a[href='#contact']");
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener('scroll', this._onScroll);
	}

  render() {
		//return html`<slot></slot>`;
     return html`
		 	<style>
				.acceso {
					background: aliceblue;
					border: none;
					border-radius: 5%;
				}
			</style>
			<nav class="navbar bg-transparent fixed-top">
			<div class="container">
				<a class="navbar-brand" href="#">
					<i><img src="./img/market-basket-svgrepo-com.svg" intrinsicsize="512 x 512" srcset="https://www.svgrepo.com/show/72416/market-basket.svg 4x" alt="Market Basket SVG Vector" title="Market Basket SVG Vector" width="40" height="40"></i>
					Mercausado
				</a>
				${this.menu?
					html`
						<ul class="me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#about">Quienes somos</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#services">Servicios</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#portfolio">Categorias</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#contact">Contacto</a>
							</li>
							<li class="nav-item">
								<a class="nav-link acceso" href="#" @click="${this.acceso}">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
									<path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
									<path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
								</svg>
									Acceso
								</a>
							</li>
						</ul>` : ``}
			</div>
		</nav>
		`;
  }
}
customElements.define('merca-title', mercaTitle);
/* 
function main()
{
	const about = $("#about"),
				services = $("#services"),
				portfolio = $("#portfolio"),
				contact = $("#contact");
	
	let calcOffsetHandle = null;

	about.suLink = $("a[href='#about']");
	services.suLink = $("a[href='#services']");
	portfolio.suLink = $("a[href='#portfolio']");
	contact.suLink = $("a[href='#contact']");


	function calcOffset(el) {
		if (!calcOffsetHandle)
			setTimeout(() => {		// Esperamos 100 milisegundos hasta que el usuario acabe de hacer scroll para ejecutar
				const clientH = Math.floor(window.innerHeight / 2);

				if ((window.pageYOffset + clientH) > el.offsetTop && (window.pageYOffset + clientH) < el.offsetTop + el.clientHeight)
				{
					//console.log("->", el.id);
					//console.log(window.pageYOffset + clientH, el.offsetTop, el.offsetTop + el.clientHeight);
					el.suLink.classList.add("active");
				}
				else
					el.suLink.classList.remove("active");

				calcOffsetHandle = null;
			}, 100);

		
		/* if (window.pageYOffset > el.offsetTop - clientH && window.pageYOffset < el.offsetTop +clientH)
		{
			el.suLink.classList.add("active");
		}
		else
			el.suLink.classList.remove("active"); *//*
	}
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100 && $("nav").classList.contains("bg-transparent"))
			addClass("nav", "ele").remove("bg-transparent");

		if (window.pageYOffset < 100 && !$("nav").classList.contains("bg-transparent"))
			addClass("nav", "bg-transparent").remove("ele");
	
		calcOffset(about);
		calcOffset(services);
		calcOffset(portfolio);
		calcOffset(contact);
	});

	$$(".btn").forEach(btn => {
		btn.addEventListener("click", allBtns);
	});
}
 */
function allBtns(ev) {
	ev.preventDefault();
	console.log("Evento disparado por addEventListener. El evento es", ev, "Y el boton", this);
}

function btnClick(btn) {
	console.log("Boton 1 clickado", btn);
}