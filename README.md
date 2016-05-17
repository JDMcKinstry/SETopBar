# SETopBar
Freeze Top Bar on Stack Exchange Sites

---

To use:
--

Download zip and open "SETopBar-master" so you can see the directory "SETopBar". <br />
Copy that directory somewhere local, like in your Documents folder. <br />
In Chrome, go to [`chrome://extensions/`](chrome://extensions/) and ensure the checkbox for "Developer Mode" is checked. <br />
Click the button "Load Unpacked Extensions" and go to wherever you saved the "SETopBar" directory and select it. </br >

Enjoy!
---

Oh, and in case you're wondering, the Base64 encoded code that's injected on Stack Exchange sites is the following ( <sub> you can reverse the b64 text nd see for yourself if you still don't trust me. I wouldn't :P </sub> )

	;(function($) {
		function z() {
			var a = $(window).scrollTop(),
			b = $(".topbar").height();
			a > b ? ($(".topbar").css({ position: "fixed", top: 0, "z-index": 999 }), $("body > .container").css({ "margin-top": b })) 
				: ($(".topbar").css({ position: "", top: "", "z-index": "" }), $("body > .container").css({ "margin-top": "" }))
		}
		if (document.readyState == "complete") z();
		else window.onload = z;
		$(window).on("scroll", function(a) {
			this.tmr && clearTimeout(this.tmr);
			this.tmr = setTimeout(z, 10)
		});
	})(jQuery);
