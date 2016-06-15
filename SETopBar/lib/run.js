;(function() {
	/**	myB64 : Raw JS
	 *	;(function($) {
		function z(unDock) {
			var a = $(window).scrollTop(),
				b = $(".topbar").height();
			a > b && !unDock ? ($(".topbar").css({ position: "fixed", top: 0, "z-index": 999 }), $("body > .container").css({ "margin-top": b })) : ($(".topbar").css({ position: "", top: "", "z-index": "" }), $("body > .container").css({ "margin-top": "" }))
		}
		if (document.readyState == "complete") z();
		else window.onload = z;
		$(window).on("scroll", function(a) { this.tmr && clearTimeout(this.tmr); this.tmr = setTimeout(z, 10); }).trigger("scroll");
		$(document).on("click", ".popout, .popin", function(e) { z($(this).hasClass("popout")); });
	})(jQuery);
	 *	*/
	var myB64 = "OyhmdW5jdGlvbigkKXtmdW5jdGlvbiBhKGEpe3ZhciBkPSQod2luZG93KS5zY3JvbGxUb3AoKSxiPSQoIi50b3BiYXIiKS5oZWlnaHQoKTtkPmImJiFhPygkKCIudG9wYmFyIikuY3NzKHtwb3NpdGlvbjoiZml4ZWQiLHRvcDowLCJ6LWluZGV4Ijo5OTl9KSwkKCJib2R5ID4gLmNvbnRhaW5lciIpLmNzcyh7Im1hcmdpbi10b3AiOmJ9KSk6KCQoIi50b3BiYXIiKS5jc3Moe3Bvc2l0aW9uOiIiLHRvcDoiIiwiei1pbmRleCI6IiJ9KSwkKCJib2R5ID4gLmNvbnRhaW5lciIpLmNzcyh7Im1hcmdpbi10b3AiOiIifSkpfSJjb21wbGV0ZSI9PWRvY3VtZW50LnJlYWR5U3RhdGU/c2V0VGltZW91dChhLDEwMCk6d2luZG93Lm9ubG9hZD1zZXRUaW1lb3V0KGEsMTAwKTskKHdpbmRvdykub24oInNjcm9sbCIsZnVuY3Rpb24oYyl7dGhpcy50bXImJmNsZWFyVGltZW91dCh0aGlzLnRtcik7dGhpcy50bXI9c2V0VGltZW91dChhLDEwKX0pOyQoZG9jdW1lbnQpLm9uKCJjbGljayIsIi5wb3BvdXQsIC5wb3BpbiIsZnVuY3Rpb24oYyl7YSgkKHRoaXMpLmhhc0NsYXNzKCJwb3BvdXQiKSl9KX0pKGpRdWVyeSk7",
		myStacksB64 = "data:text/javascript;base64,"+myB64,
		stackSites = ["meta.stackoverflow.com","stackoverflow.com","serverfault.com","superuser.com","meta.stackexchange.com","webapps.stackexchange.com","gaming.stackexchange.com","webmasters.stackexchange.com","cooking.stackexchange.com","gamedev.stackexchange.com","photo.stackexchange.com","stats.stackexchange.com","math.stackexchange.com","diy.stackexchange.com","gis.stackexchange.com","tex.stackexchange.com","askubuntu.com","money.stackexchange.com","english.stackexchange.com","stackapps.com","ux.stackexchange.com","unix.stackexchange.com","wordpress.stackexchange.com","cstheory.stackexchange.com","apple.stackexchange.com","rpg.stackexchange.com","bicycles.stackexchange.com","programmers.stackexchange.com","electronics.stackexchange.com","android.stackexchange.com","boardgames.stackexchange.com","physics.stackexchange.com","homebrew.stackexchange.com","security.stackexchange.com","writers.stackexchange.com","video.stackexchange.com","graphicdesign.stackexchange.com","dba.stackexchange.com","scifi.stackexchange.com","codereview.stackexchange.com","codegolf.stackexchange.com","quant.stackexchange.com","pm.stackexchange.com","skeptics.stackexchange.com","fitness.stackexchange.com","drupal.stackexchange.com","mechanics.stackexchange.com","parenting.stackexchange.com","sharepoint.stackexchange.com","music.stackexchange.com","sqa.stackexchange.com","judaism.stackexchange.com","german.stackexchange.com","japanese.stackexchange.com","philosophy.stackexchange.com","gardening.stackexchange.com","travel.stackexchange.com","productivity.stackexchange.com","crypto.stackexchange.com","dsp.stackexchange.com","french.stackexchange.com","christianity.stackexchange.com","bitcoin.stackexchange.com","linguistics.stackexchange.com","hermeneutics.stackexchange.com","history.stackexchange.com","bricks.stackexchange.com","spanish.stackexchange.com","scicomp.stackexchange.com","movies.stackexchange.com","chinese.stackexchange.com","biology.stackexchange.com","poker.stackexchange.com","mathematica.stackexchange.com","cogsci.stackexchange.com","outdoors.stackexchange.com","martialarts.stackexchange.com","sports.stackexchange.com","academia.stackexchange.com","cs.stackexchange.com","workplace.stackexchange.com","windowsphone.stackexchange.com","chemistry.stackexchange.com","chess.stackexchange.com","raspberrypi.stackexchange.com","russian.stackexchange.com","islam.stackexchange.com","salesforce.stackexchange.com","patents.stackexchange.com","genealogy.stackexchange.com","robotics.stackexchange.com","expressionengine.stackexchange.com","politics.stackexchange.com","anime.stackexchange.com","magento.stackexchange.com","ell.stackexchange.com","sustainability.stackexchange.com","tridion.stackexchange.com","reverseengineering.stackexchange.com","networkengineering.stackexchange.com","opendata.stackexchange.com","freelancing.stackexchange.com","blender.stackexchange.com","mathoverflow.net","space.stackexchange.com","sound.stackexchange.com","astronomy.stackexchange.com","tor.stackexchange.com","pets.stackexchange.com","ham.stackexchange.com","italian.stackexchange.com","pt.stackoverflow.com","aviation.stackexchange.com","ebooks.stackexchange.com","alcohol.stackexchange.com","softwarerecs.stackexchange.com","arduino.stackexchange.com","expatriates.stackexchange.com","matheducators.stackexchange.com","earthscience.stackexchange.com","joomla.stackexchange.com","datascience.stackexchange.com","puzzling.stackexchange.com","craftcms.stackexchange.com","buddhism.stackexchange.com","hinduism.stackexchange.com","communitybuilding.stackexchange.com","startups.stackexchange.com","worldbuilding.stackexchange.com","ja.stackoverflow.com","emacs.stackexchange.com","hsm.stackexchange.com","economics.stackexchange.com","lifehacks.stackexchange.com","engineering.stackexchange.com","coffee.stackexchange.com","vi.stackexchange.com","musicfans.stackexchange.com","woodworking.stackexchange.com","civicrm.stackexchange.com","health.stackexchange.com","ru.stackoverflow.com","rus.stackexchange.com","mythology.stackexchange.com","law.stackexchange.com","opensource.stackexchange.com","elementaryos.stackexchange.com","portuguese.stackexchange.com","computergraphics.stackexchange.com","hardwarerecs.stackexchange.com","es.stackoverflow.com","3dprinting.stackexchange.com","ethereum.stackexchange.com","latin.stackexchange.com","languagelearning.stackexchange.com","retrocomputing.stackexchange.com"];
	function injectScript(src, where) {
		var elm = document.createElement('script');
		elm.src = src;
		document[where || 'head'].appendChild(elm);
	}
	if (stackSites.indexOf(location.host) > -1) injectScript(myStacksB64);
})();
