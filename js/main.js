'use strict';
//esconder el menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (currentScrollPos > 1) {
		if (prevScrollpos > currentScrollPos) {
			$('nav').removeClass('esconder');
		} else {
			$('nav').addClass('esconder');
		}
		prevScrollpos = currentScrollPos;
	};
};

document.getElementById('pie').innerHTML = `
	<footer>

		<!-- CLIENTES -->
		<div id="clientes">
			<h3>Our clients</h3>

			<div class="clientesCarrusel">

				<img src="/img/cliente_AMZK_care.png" alt="CARE">

				<img src="/img/cliente_AMZK_fes.png" alt="Friedich Ebert Stiftung-Fescol">

				<img src="/img/cliente_AMZK_GIZ.png" alt="Agencia de cooperación alemana, GIZ">

				<img src="/img/cliente_AMZK_OEA.png" alt="Organización de estados americanos">

				<img src="/img/cliente_AMZK_OnuMujeres.png" alt="ONU mujeres">

				<img src="/img/cliente_AMZK_canada.png" alt="Embajada de Canadá">

				<img src="/img/cliente_AMZK_PNUD.png" alt="Programa de las Naciones Unidas para el Desarrollo">

				<img src="/img/cliente_AMZK_BID.png" alt="Banco Interamericano de Desarrollo">

				<img src="/img/cliente_AMZK_Unicef.png" alt="Unicef">

				<img src="/img/cliente_AMZK_IPPF.png" alt="Federación Internacional de Planificación Familiar">

				<img src="/img/cliente_AMZK_SED.png" alt="Secretaría de Educación, Bogotá">

				<img src="/img/cliente_AMZK_ForoMundialRural.png" alt="Foro Rural Mundial">

				<img src="/img/cliente_AMZK_Humboldt.png" alt="Instituto Humboldt">

				<img src="/img/cliente_AMZK_parlamericas.png" alt="Parlaméricas">

				<img src="/img/cliente_AMZK_usaid.png" alt="USAID">
			</div>
		</div>

		<!-- CONTACTO -->
		<div id="contacto">
			<div id="redes">
				<section>
					<h3>Follow us</h3>

					<a href="https://www.linkedin.com/company/amazink-co/" target="_blank" rel="noopener" class="iconos">
						<svg class="iconos_SVG" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
						<span class="sr-only">Linkedin</span>
					</a>

					<a href="https://www.behance.net/amz_co" target="_blank" rel="noopener" class="iconos">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z"/>
						</svg>
						<span class="sr-only">Behance</span>
					</a>


					<a href="http://www.instagram.com/amazinkstudio" target="_blank" rel="noopener" class="iconos">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
						</svg>
						<span class="sr-only">Instagram</span>
					</a>

					<a href="https://www.youtube.com/@amazink-co/videos" target="_blank" rel="noopener" class="iconos">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
						<span class="sr-only">YouTube</span>
					</a>
				</section>

				<section>
					<h3>Contact us</h3>
					<p class="enlaceContacto"><a href="mailto:juliserrano@amazink.co">juliserrano@amazink.co</a></p>
					<p class="enlaceContacto"><a href="tel:573108732238">(+57) 310 873 2238</a></p>
					<div class="animFooter"></div>
				</section>
			</div>
		
			<!-- FORMULARIO DE CONTACTO -->
			<div id="contacto_form">
				<h3>Get in touch</h3>

				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					id="form"
					class="needs-validation"
					novalidate>

					<input 
						type="hidden"
						name="access_key"
						value="e17a110c-d994-4465-8596-4fb10f2336de" />

					<input
						type="hidden"
						name="subject"
						value="Nuevo mensaje de Amazink.co" />

					<input 
						type="checkbox"
						name="botcheck"
						id=""
						style="display: none;" />

					<div>
						<div>
							<label for="Nombre">Name</label>
							<input
								type="Nombre"
								name="Nombre"
								id="Nombre"
								required />
							<div class="empty-feedback invalid-feedback">
								* Please enter your name
							</div>
						</div>

						<div>
							<label for="organizacion">Organization</label>
							<input
								type="text"
								name="organizacion"
								id="organizacion"
								required />
							<div class="empty-feedback invalid-feedback">
								* Please write the name of the organization, institution or company you belong to
							</div>
						</div>
					</div>

					<div>
						<label for="email">E-mail</label>
						<input
							type="email"
							name="email"
							id="email"
							required />
						<div class="empty-feedback">
							* Please enter your contact e-mail 
						</div>
						<div class="invalid-feedback">
							* Please enter a valid e-mail address
						</div>
					</div>

					<div>
						<label for="Mensaje">What can we do for you?</label>
						<textarea
							name="Mensaje"
							id="Mensaje"
							required
						></textarea>
						<div class="empty-feedback invalid-feedback">
							* Please write your request
						</div>
					</div>

					<div>
						<label 
							for="habeas"
							class="preguntaHabeas">
							<input 
								type="checkbox"
								name="habeas"
								id="habeas"
								required> 
								I authorize Amazink Studio to contact me
							<div class="empty-feedback invalid-feedback">
								* You must check this box to be able to send the message
							</div>
						</label>
					</div>

					<div>
						<button type="submit">
							Send
						</button>
					</div>
					<p id="result"></p>
				</form>
			</div>
		</div>

		<div id="legal">
			<p>All rights reserved. Amazink, 2023.</p>
		</div>

	</footer>
`;

// CORREO
(function () {
	/*
	 * Form Validation
	 */

	// Fetch all the forms we want to apply custom validation styles to
	const forms = document.querySelectorAll(".needs-validation");
	const result = document.getElementById("result");
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();

					form.querySelectorAll(":invalid")[0].focus();
				} else {
					/*
					 * Form Submission using fetch()
					 */
					event.preventDefault();
					event.stopPropagation();
					
					const formData = new FormData(form);
					const object = Object.fromEntries(formData);
					const json = JSON.stringify(object);
					result.innerHTML = "Enviando...";

					fetch("https://api.web3forms.com/submit", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: json,
					})
						.then(async (response) => {
							let json = await response.json();
							if (response.status == 200) {
								result.innerHTML = json.message;
							} else {
								console.log(response);
								result.innerHTML = json.message;
							}
						})
						.catch((error) => {
							console.log(error);
							result.innerHTML = "Algo salió mal, inténtalo de nuevo más tarde o contáctanos directamente.";
						})
						.then(function () {
							form.reset();
							form.classList.remove("was-validated");
							result.innerHTML = "Gracias por escribirnos, pronto nos estaremos poniendo en contacto :)";
							setTimeout(() => {
								result.classList.add("hidden")
							}, 4000);
						});
				}
				form.classList.add("was-validated");
			},
			false
		);
	});
})();
