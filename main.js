const plusSvg = `
		<path class="hover:fill-[#301534] transition-all duration-300" fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
	`;
const minusSvg = `
		<path class="group-hover:fill-LightPurple transition-fill duration-300" fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
	`;
const accordeonWrapper = document.querySelector("[data-accordeon-wrapper]");

accordeonWrapper.addEventListener("click", accordeonClickHandler);
window.addEventListener("keypress", accordeonKeypressHandler);

function accordeonClickHandler(e) {
	let closestDiv = e.target.closest("[data-accordeon-item] > div");

	if (closestDiv) {
		const parentLiElement = closestDiv.closest("li");

		toggleAriaAttribute(parentLiElement);
		tweakAccoredonItem(closestDiv.children[1], closestDiv.parentElement.children[1]);
	}
}

function accordeonKeypressHandler(e) {
	if (e.key === "Enter") {
		const el = e.target.closest("ul > li");
		let closestDiv = el.children[0];

		toggleAriaAttribute(el);
		tweakAccoredonItem(closestDiv.children[1], closestDiv.parentElement.children[1]);
	} else {
		return;
	}
}

// Toggle Aria Label //
const toggleAriaAttribute = (el) => {
	const expanded = el.getAttribute("aria-expanded") === true;
	el.setAttribute("aria-expanded", !expanded);
};

// Toogle accordeon Item //
const tweakAccoredonItem = (svg, p) => {
	if (p.classList.contains("hidden")) {
		svg.innerHTML = minusSvg;
		p.classList.remove("hidden");
	} else {
		svg.innerHTML = plusSvg;
		p.classList.add("hidden");
	}
};
