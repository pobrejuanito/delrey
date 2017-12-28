/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function($){

	$(document).ready(function() {

		var config = $('body').data('config') || {};
		
		// Accordion menu
		$('.menu-sidebar').accordionMenu({ mode:'slide' });

		// Dropdown menu
		$('#menu').dropdownMenu({ 
			mode: 'diagonal', 
			dropdownSelector: 'div.dropdown', 
			transition:"easeOutCirc",
			duration:400
		});

		// Smoothscroller
		$('a[href="#page"]').smoothScroller({ duration: 500 });

		// Social buttons
		$('article[data-permalink]').socialButtons(config);

		// style the zoo blog buttons
		$('p.links').each(function() {
		    var $this = $(this);
		    $this.children().eq(0).addClass("button-color");
		    $this.children().eq(1).addClass("button");
		});		


		// add styling to images
		$('.element-image img, .zoo-item-list img, .zoo-comments-list img, .itemAuthorBlock > .gkAvatar > img, .k2Avatar img, .gkAvatar > img, .kwho-admin img, .kavatar').each(function() {
		    var $this = $(this);
		    $this.addClass("pic3d");
		});


		// blog tags
		$('.element-itemtag a, .zoo-tagcloud a, .itemTags a, .k2TagCloudBlock a, .moduleItemTags a, p.taxonomy a').each(function(i, elem) {
		    var $this = $(this);
		    var html = $(elem).html();
		    var final = '<span class="tag">' + html + '</span>';
		    $(this).html(final );
		    $this.addClass("tag-body");	   
		});


		//block-number
		$('.block-number').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span class="digit">' + html + '</span><span class="bottom"></span>';
		    $(this).html(final );
		});


		//event date/time block
		$('.event-time').each(function(i, elem){
		    var html = $(elem).html();
		    var dt =  html.split(":");
		    var final = '<span class="date">' + dt[0] + '</span><span class="month">' + dt[1] + '</span>';
		    $(this).html(final );
		    $(this).parent().addClass('event');
		});
		
		//yoo vertical menu fix
		$('.colored li.level2.active').closest('div').addClass('open-menu');

		//back to top
		if ($("#totop-scroller").length) {
			$().UItoTop({scrollSpeed: 500, easingType: 'easeOutExpo' });
		}

		// titles
		$('#contact-form, form.submission').prev().addClass('module-title');
		
		//li span
		$('#page ul.style li').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span>' + html + '</span>';
		    $(this).html(final );
		});

		// remove empty p tags
		$('p').each(function() {
		    var $this = $(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
		        $this.remove();
		});

		// image auto size exceptions
		$('img').addClass('size-auto');
		$('.mejs-poster img, .slide-image, img.no-size-auto, img.kstats-bar, img.pic-border.caption, .jr-forum-stat-bar').removeClass('size-auto');
		
		// apply reveal sizes
		$('.module.size-medium').each(function() {
		    $(this).closest('.reveal-modal').addClass('medium');
		});			
		$('.module.size-small').each(function() {
		    $(this).closest('.reveal-modal').addClass('small');
		});	
		$('.module.size-large').each(function() {
		    $(this).closest('.reveal-modal').addClass('large');
		});	
		$('.module.size-xlarge').each(function() {
		    $(this).closest('.reveal-modal').addClass('xlarge');
		});	
		

		// badges
		$('.badge.badge-new').parent().addClass('badge-new');
		$('.badge.badge-hot').parent().addClass('badge-hot');
		$('.badge.badge-free').parent().addClass('badge-free');
		$('.badge.badge-top').parent().addClass('badge-top');

		// toggles
		if ($('.showhide li').length > 0) {
			var showhide = $('.showhide li');
				showhide.each(function () {
				var q = $(this);

				if (q.children('div').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				} else if (q.children('div').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				}

				q.children('h4').click(function () {
				q.children('div').slideToggle('normal', function () {
				if (q.children('div').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				q.children('h4').removeClass('expanded');

				} else if (q.children('div').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				q.children('h4').removeClass('collapse');
				}

				});
			});
			});
		}

	});

	$.onMediaQuery('(min-width: 960px)', {
		init: function() {
			if (!this.supported) this.matches = true;
		},
		valid: function() {
			$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
			$.matchHeight('main', '#maininner, #sidebar-a, #sidebar-b').match();
			$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
			$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
			$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-c', '#bottom-c .grid-h', '.deepest').match();
			$.matchHeight('bottom-d', '#bottom-d .grid-h', '.deepest').match();
			$.matchHeight('innertop-a', '#innertop-a .grid-h', '.deepest').match();
			$.matchHeight('innertop-b', '#innertop-b .grid-h', '.deepest').match();
			$.matchHeight('innerbottom-a', '#innerbottom-a .grid-h', '.deepest').match();
			$.matchHeight('innerbottom-b', '#innerbottom-b .grid-h', '.deepest').match();
		},
		invalid: function() {
			$.matchWidth('grid-block').remove();
			$.matchHeight('main').remove();
			$.matchHeight('top-a').remove();
			$.matchHeight('top-b').remove();
			$.matchHeight('bottom-a').remove();
			$.matchHeight('bottom-b').remove();
			$.matchHeight('bottom-c').remove();
			$.matchHeight('bottom-d').remove();
			$.matchHeight('innertop-a').remove();
			$.matchHeight('innertop-b').remove();
			$.matchHeight('innerbottom-a').remove();
			$.matchHeight('innerbottom-b').remove();
		}
	});

	var pairs = [];

	$.onMediaQuery('(min-width: 480px) and (max-width: 959px)', {
		valid: function() {
			$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
			pairs = [];
			$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#innertop .grid-h', '#innerbottom .grid-h', '#bottom-c .grid-h', '#bottom-d .grid-h'], function(i, selector) {
				for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
					var id = 'pair-' + pairs.length;
					$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
					pairs.push(id);
				}
			});
		},
		invalid: function() {
			$.matchHeight('sidebars').remove();
			$.each(pairs, function() { $.matchHeight(this).remove(); });
		}
	});

	$.onMediaQuery('(max-width: 767px)', {
		valid: function() {
			var header = $('#header-responsive');
			if (!header.length) {
				header = $('<div id="header-responsive"/>').prependTo('#header');
				$('#logo').clone().removeAttr('id').addClass('logo').appendTo(header);
				$('#menu').responsiveMenu().next().addClass('menu-responsive').appendTo(header);
			}
		}
	});

})(jQuery);

// css helper
(function($) {
    var data = [
        {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},
        {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},
        {prop:window.opera,ver:'Opera',name:'opera'},
        {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},
        {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];
    for (var n=0;n<data.length;n++)	{
        if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {
            var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};
            $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			
        }
    }
})(jQuery);


/*UITop jquery*/
(function(a){a.fn.UItoTop=function(b){var c={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" title="" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);


/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(e){"use strict";var t=false;e(document).on("click","a[data-reveal-id]",function(t){t.preventDefault();var n=e(this).attr("data-reveal-id");e("#"+n).reveal(e(this).data())});e.fn.reveal=function(n){var r=e(document),i={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal",open:e.noop,opened:e.noop,close:e.noop,closed:e.noop};n=e.extend({},i,n);return this.not(".reveal-modal.open").each(function(){function c(){u=false}function h(){u=true}function p(){var n=e(".reveal-modal.open");if(n.length===1){t=true;n.trigger("reveal:close")}}function d(){if(!u){h();p();i.addClass("open");if(n.animation==="fadeAndPop"){f.open.top=r.scrollTop()-o;f.open.opacity=0;i.css(f.open);a.fadeIn(n.animationSpeed/2);i.delay(n.animationSpeed/2).animate({top:r.scrollTop()+s+"px",opacity:1},n.animationSpeed,function(){i.trigger("reveal:opened")})}if(n.animation==="fade"){f.open.top=r.scrollTop()+s;f.open.opacity=0;i.css(f.open);a.fadeIn(n.animationSpeed/2);i.delay(n.animationSpeed/2).animate({opacity:1},n.animationSpeed,function(){i.trigger("reveal:opened")})}if(n.animation==="none"){f.open.top=r.scrollTop()+s;f.open.opacity=1;i.css(f.open);a.css({display:"block"});i.trigger("reveal:opened")}}}function v(){var e=i.find(".flex-video"),t=e.find("iframe");if(t.length>0){t.attr("src",t.data("src"));e.fadeIn(100)}}function m(){if(!u){h();i.removeClass("open");if(n.animation==="fadeAndPop"){i.animate({top:r.scrollTop()-o+"px",opacity:0},n.animationSpeed/2,function(){i.css(f.close)});if(!t){a.delay(n.animationSpeed).fadeOut(n.animationSpeed,function(){i.trigger("reveal:closed")})}else{i.trigger("reveal:closed")}}if(n.animation==="fade"){i.animate({opacity:0},n.animationSpeed,function(){i.css(f.close)});if(!t){a.delay(n.animationSpeed).fadeOut(n.animationSpeed,function(){i.trigger("reveal:closed")})}else{i.trigger("reveal:closed")}}if(n.animation==="none"){i.css(f.close);if(!t){a.css({display:"none"})}i.trigger("reveal:closed")}t=false}}function g(){i.unbind(".reveal");a.unbind(".reveal");l.unbind(".reveal");e("body").unbind(".reveal")}function y(){var e=i.find(".flex-video"),t=e.find("iframe");if(t.length>0){t.data("src",t.attr("src"));t.attr("src","");e.fadeOut(100)}}var i=e(this),s=parseInt(i.css("top"),10),o=i.height()+s,u=false,a=e(".reveal-modal-bg"),f={open:{top:0,opacity:0,visibility:"visible",display:"block"},close:{top:s,opacity:1,visibility:"hidden",display:"none"}},l;if(a.length===0){a=e("<div />",{"class":"reveal-modal-bg"}).insertAfter(i);a.fadeTo("fast",.8)}i.bind("reveal:open.reveal",d);i.bind("reveal:open.reveal",v);i.bind("reveal:close.reveal",m);i.bind("reveal:closed.reveal",y);i.bind("reveal:opened.reveal reveal:closed.reveal",c);i.bind("reveal:closed.reveal",g);i.bind("reveal:open.reveal",n.open);i.bind("reveal:opened.reveal",n.opened);i.bind("reveal:close.reveal",n.close);i.bind("reveal:closed.reveal",n.closed);i.trigger("reveal:open");l=e("."+n.dismissModalClass).bind("click.reveal",function(){i.trigger("reveal:close")});if(n.closeOnBackgroundClick){a.css({cursor:"pointer"});a.bind("click.reveal",function(){i.trigger("reveal:close")})}e("body").bind("keyup.reveal",function(e){if(e.which===27){i.trigger("reveal:close")}})})}})(jQuery);