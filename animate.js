function reveal(Evt, name = null) {
	var reveals = document.querySelectorAll(name);
	const fadeFrom = 'fadeIn' + getName(name);
	for (var i = 0; i < reveals.length; i++) {
		var revealPoint = reveals[i].getBoundingClientRect().top;
		if (revealPoint < window.innerHeight - 150) {
			reveals[i].classList.add('animate__animated', 'animate__' + fadeFrom);
		}
	}
}

function startCase(string) {
	const newString = string[1].toUpperCase() + string.substr(2);
	if (newString.indexOf('-') !== -1) {
		const stringSplit = newString.split(/\W+/),
			string1 = stringSplit[0],
			string2 = stringSplit[1];

		return string1 + string2[0].toUpperCase() + string2.substr(1);
	}
	return newString;
}

function getName(name) {
	return startCase(name.replace('.reveal', ''));
}

/**
 *
 * @param {{String}} className HTML class of the element to be animated
 */
function anime(action, className) {
	window.addEventListener(action, (Evt) => reveal(Evt, className));
}

const fadeInAnimations = [
	'.reveal',
	'.reveal-up',
	'.reveal-left',
	'.reveal-left-big',
	'.reveal-right',
	'.reveal-right-big',
	'.reveal-bottom-right',
	'.reveal-top-right',
	'.reveal-top-left',
	'.reveal-bottom-left',
];

function fadeIn(action = 'scroll') {
	fadeInAnimations.forEach((element) => anime(action, element));
}

fadeIn();
