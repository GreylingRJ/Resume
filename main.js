function contentAnimation() {
	var tl = gsap.timeline();
	tl.from(".animate-first", {
		duration: 1,
		y: 30,
		opacity: 0,
		stagger: 0.4,
		delay: 0.5
	});
}

$(function () {
	barba.init({
		sync: true,

		transitions: [{
			async leave(data) {
				const done = this.async();
			},
			async enter(data) {
				contentAnimation();
			},
			async once(data) {
				contentAnimation();
			},
		}, ],
	});
});

function contentAnimation2() {
	var tl = gsap.timeline();
	tl.from(".animate-second", {
		duration: 1,
		y: 30,
		opacity: 0,
		stagger: 0.4,
		delay: 1
	});
}

$(function () {
	barba.init({
		sync: true,

		transitions: [{
			async leave(data) {
				const done = this.async();
			},
			async enter(data) {
				contentAnimation2();
			},
			async once(data) {
				contentAnimation2();
			},
		}, ],
	});
});

