/*
*	Plugin Hoover
*	by Thomas Rigal
*	v 1.0 june 2015
*
*	www.thomas-rigal.com/hoover
*/
$.fn.hoover = function(params) {
	return this.each(function(){
		// paramètres par défaut
		var defaults = {
			'effect'          : 'basic',
			'timing'          : '1s',
			'ease'	          : 'ease-in',
			'backgroundColor' : '#fff',
			'bezier'          : false
			
		};
		var desc, timing, ease, easing, content;
		var accelerate 		= 'ease-in';
		var bounce			= 'cubic-bezier(0.01,0.63,0.21,-0.64) 0s';
		var easeInQuart		= 'cubic-bezier(0.42,0,1,-0.02) 0s';
		var easeInQuad		= 'cubic-bezier(0.02,-0.01,0.77,0.41) 0s';
		var easeOutQuad		= 'cubic-bezier(0.15,0.65,1,1) 0s';
		var easeInOutQuint	= 'cubic-bezier(0.99,0.09,0,0.83) 0s';
		var config = $.extend(defaults, params);
		// =======================================================================================
		//Placement des paramètres et changement des variables
		content = $(this);
		
		if(config.ease !== 'ease-in'){
			ease = config.ease;
		}
		else{
			ease = 'ease-in';
		}
		desc = content.find('.description');
		if(config.timing !== '1s'){
			timing = config.timing;
		}
		else{
			timing = '1s';
		}
		
		//apply width and height
		content.css({
			display:'block',
			width:config.width,
			height:config.height,
		});
		desc.css({
			width:config.width,
			height:config.height,
		});
		
		desc.css('background-color',config.backgroundColor);
		
		// =======================================================================================
		//choix de l'accélération
		if(config.bezier){
			let bezier = config.bezier;
			if(typeof(bezier)=='object'&&bezier!==null){
				bezier = 'cubic-bezier('+bezier.points+')';
				if(bezier.timing){
					bezier += ' '+timing;
				}
			}
			easing = bezier;
		}
		else if(ease == 'ease-in'){
			easing = accelerate;
		}
		else if(ease == 'bounce'){
			easing = bounce;
		}
		else if(ease == 'easeInQuart'){
			easing =  easeInQuart;
		}
		else if(ease == 'easeInQuad'){
			easing = easeInQuad;
		}
		else if(ease == 'easeOutQuad'){
			easing = easeOutQuad;
		}
		else if(ease == 'easeInOutQuint'){
			easing = easeInOutQuint;
		}

		//plugin
		function basic() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'opacity' : '0',
				'bottom'  : hBlock + 2
			});
			content.on('mouseenter', function() {
				desc.css({
					'opacity'	: '1',
					'transition': 'all ' + timing + ' ' + easing
				});
			})
			content.on('mouseleave', function() {
				desc.css('opacity', '0');
			})
		}
		function easeIn() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'opacity'	: '0',
				'bottom'	: hBlock + 2
			});
			content.on('mouseenter', function() {
				desc.css({
					'opacity'	: '1',
					'transition': 'all ' + timing + ' cubic-bezier(0,1.01,0.25,-0.83) 0s'
				});	
			})
			content.on('mouseleave', function() {
				desc.css('opacity', '0');
			})
		}
		function slideToLeft() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'left'	: wBlock,
				'bottom': hBlocked,
				'transition': 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css('left', '0');
			})
			content.on('mouseleave', function() {
				desc.css('left', wBlock);
			})
		}
		function slideToRight() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'bottom'	: hBlocked,
				'right'		: wBlock,
				'transition': 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css('right', '0');
			})
			content.on('mouseleave', function() {
				desc.css('right', wBlock);
			})
		}
		function slideToTop() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'bottom'	: '0',
				'transition': 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css('bottom', hBlocked);
			})
			content.on('mouseleave', function() {
				desc.css('bottom', '0');
			})
		}
		function slideToBottom() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'top'	: '-' + hBlocked + 2 + 'px',
				'transition' : 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css('top', '-' + hBlock - 2 + 'px');
			})
			content.on('mouseleave', function() {
				desc.css('top', '-' + hBlocked * 2 + 'px');
			})
		}
		function slideToBottomAndLeft() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'top'	: '-' + hBlocked * 2 + 'px',
				'left'  : wBlock,
				'transition' : 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css({
					'top'	: '-' + hBlock - 2 + 'px',
					'left'	: '0'
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'top'	: '-' + hBlocked * 2 + 'px',
					'left'  : wBlock
				});
			})
		}
		function slideToBottomAndRight() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'top'	: '-' + hBlocked * 2 + 'px',
				'right' : wBlock,
				'transition' : 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css({
					'top'	: '-' + hBlocked + 'px',
					'right' : '0'
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'top' 	: '-' + hBlocked * 2  + 'px',
					'right' : wBlock
				});
			})
		}
		function slideToTopAndRight() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'bottom' : '0',
				'right'	 : wBlock,
				'transition' : 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css({
					'bottom' : hBlocked,
					'right'	 : '0'
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'bottom'  : '0',
					'right'	  : wBlock
				});
			})
		}
		function slideToTopAndLeft() {
			var wBlock = content.width();
			var hBlock = content.height();
			hBlocked = hBlock + 2;
			desc.css({
				'bottom'	: '0',
				'right'		: wBlock,
				'transition': 'all ' + timing + ' ' + easing
			});
			content.on('mouseenter', function() {
				desc.css({
					'bottom' : hBlocked,
					'right'  : '0'
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'bottom' : '0',
					'right'	 : wBlock
				});
			})
		}
		function roundCenterByLeft() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height' : hBlock / 2,
				'padding-top' : '15%',
				'text-align'  : 'center',
				'width'		  : wBlock / 2,
				'border-radius': '50%',
				'right'		  : wBlock,
				'bottom'	  : '75%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'transition'	: 'all ' + timing + ' ' + easing,
					'right'			: '-25%'
				});
			})
			content.on('mouseleave', function() {
				desc.css('right', wBlock);
			})
		}
		function roundCenterByRight() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height'	: hBlock / 2,
				'padding-top' : '15%',
				'text-align'  : 'center',
				'width'		  : wBlock / 2,
				'border-radius' : '50%',
				'left'		  : wBlock,
				'bottom'	  : '75%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'transition' : 'all ' + timing + ' ' + easing,
					'left'       : '25%'
				});
			})
			content.on('mouseleave', function() {
				desc.css('left', wBlock);
			})
		}
		function roundCenterByTop() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height': hBlock / 2,
				'padding-top': '15%',
				'text-align': 'center',
				'width': wBlock / 2,
				'border-radius': '50%',
				'bottom': hBlock * 2,
				'left': '25%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'transition': 'all ' + timing + ' ' + easing,
					'bottom': '75%'
				});
			})
			content.on('mouseleave', function() {
				desc.css('bottom', hBlock * 2);
			})
		}
		function roundCenterByBottom() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height': hBlock / 2,
				'padding-top': '15%',
				'text-align': 'center',
				'width': wBlock / 2,
				'border-radius': '50%',
				'bottom': '0',
				'left': '25%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'transition': 'all ' + timing + ' ' + easing,
					'bottom': '85%'
				});
			})
			content.on('mouseleave', function() {
				desc.css('bottom', '0');
			})
		}
		function roundBottom() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height': '25%',
				'bottom': '0',
				'padding-top': '5%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'transition': 'all ' + timing + ' ' + easing,
					'bottom': hBlock / 4,
					'border-radius': '50% 50% 0 0'
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'bottom': '0',
					'border-radius': '0%'	
				});
			})
		}
		function centerRound() {
			var wBlock = content.width();
			var hBlock = content.height();
			desc.css({
				'height': hBlock,
				'text-align': 'center',
				'width': wBlock,
				'opacity': '0',
				'bottom': hBlock,
				'padding-top' : '5%'
			});
			content.on('mouseenter', function() {
				desc.css({
					'margin': '15% auto',
					'transition': 'all ' + timing + ' ' + easing,
					'border-radius': '50%',
					'opacity': '1',
					'width': wBlock / 2,
					'height': hBlock / 2
				});
			})
			content.on('mouseleave', function() {
				desc.css({
					'margin': '5% auto',
					'opacity': '0',
					'border-radius': '0%',
					'width': wBlock,
					'height': hBlock
				});
			})
		}
		function animate() {
			content.css('overflow', 'hidden');
			desc.css('position', 'relative');
			if(config.effect == 'basic')
			{
				basic();
			}
			if(config.effect == 'easeIn')
			{
				easeIn();
			}
			if(config.effect == 'slideToLeft')
			{
				slideToLeft();
			}
			if(config.effect == 'slideToRight')
			{
				slideToRight();
			}
			if(config.effect == 'slideToTop')
			{
				slideToTop();
			}
			if(config.effect == 'slideToBottom')
			{
				slideToBottom();
			}
			if(config.effect == 'slideToBottomAndLeft')
			{
				slideToBottomAndLeft();
			}
			if(config.effect == 'slideToBottomAndRight')
			{
				slideToBottomAndRight();
			}
			if(config.effect == 'slideToTopAndRight')
			{
				slideToTopAndRight();
			}
			if(config.effect == 'slideToTopAndLeft')
			{
				slideToTopAndLeft();
			}
			if(config.effect == 'roundBottom')
			{
				roundBottom();
			}
			if(config.effect == 'roundCenterByLeft')
			{
				roundCenterByLeft();
			}
			if(config.effect == 'roundCenterByRight')
			{
				roundCenterByRight();
			}
			if(config.effect == 'roundCenterByTop')
			{
				roundCenterByTop();
			}
			if(config.effect == 'roundCenterByBottom')
			{
				roundCenterByBottom();
			}
			if(config.effect == 'centerRound')
			{
				centerRound();
			}
		}
		animate();
	});
};


//lighter old syntax, less powerfull but lighter and still valid
/*
export default function($el,options){
	const defaultOptions = {
		'effect' : 'roundBottom',        //L'effet choisi parmis 16 effets.
		'timing' : '1s',			     //Le temps de l'animation
		'ease'	 : 'easeInQuart',	     //L'accéleration de l'animation selon des courbes de bézier
	};
	options = $.extend(true,defaultOptions,options);
	$el.hoover(options);
};
*/

jstack.directive('hoover',class extends jstack.Component{
	domReady(){
		const $el = this.element;
		const defaultOptions = {
			'effect' : 'roundBottom',        //L'effet choisi parmis 16 effets.
			'timing' : '1s',			     //Le temps de l'animation
			'ease'	 : 'easeInQuart',	     //L'accéleration de l'animation selon des courbes de bézier
		};
		const options = $.extend(true,defaultOptions,this.options);
		$el.hoover(options);
	}
});
