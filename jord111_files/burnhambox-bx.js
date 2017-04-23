jQuery(document).ready( function( $ ) {
	
	"use strict";
	
	var bxControlsBo = false;
	var bxPagerBo = false;
	var bxControlsBo_Main = false;
	var bxPagerBo_Main = false;
	
	var bxInfo_Controls = 'arrow';
	var bxInfo_Auto = 0;
	var bxInfo_Controls_Main = 'arrow';
	var bxInfo_Auto_Main = 0;	
	var bxInfo_Pause = 4000;
	var bxInfo_Infinite = 1;
	var bxInfo_Random = 0;
	var bxInfo_Mode = 'horizontal';
	
	if ( bxInfo_Controls == 'arrow' ) {
		
		bxControlsBo = true;
		
	} else if ( bxInfo_Controls == 'bullet' ) {
		
		bxPagerBo = true;
		
	} else if ( bxInfo_Controls == 'both' ) {
		
		bxControlsBo = true;
		bxPagerBo = true;
		
	}
	
	if ( bxInfo_Controls_Main == 'arrow' ) {
		
		bxControlsBo_Main = true;
		
	} else if ( bxInfo_Controls_Main == 'bullet' ) {
		
		bxPagerBo_Main = true;
		
	} else if ( bxInfo_Controls_Main == 'both' ) {
		
		bxControlsBo_Main = true;
		bxPagerBo_Main = true;
		
	}
	
	//BXSlider	
	var sliders = $('.bxslider');
	
	jQuery.each( sliders, function( index, element ) {					

		sliders.eq(index).bxSlider( {
							
			adaptiveHeight: true,
			mode: bxInfo_Mode,
			controls: bxControlsBo,
			pager: ( $(element).find('li').length > 1 ) ? bxPagerBo : false,
			auto: ( $(element).find('li').length > 1 ) ? bxInfo_Auto : false,
			touchEnabled: ( $(element).find('li').length > 1 ) ? true : false,
			pause: bxInfo_Pause,
			infiniteLoop: ( bxInfo_Infinite == 1 ) ? true : false
		
		} )
	
	} );
	
	var slider_Main = $('.bxslider-main');
		
	jQuery.each( slider_Main, function( index, element ) {	
	
		slider_Main.eq(index).bxSlider( {
							
			adaptiveHeight: true,
			mode: bxInfo_Mode,
			controls: bxControlsBo_Main,
			pager: ( $(element).find('li').length > 1 ) ? bxPagerBo_Main : false,
			auto: ( $(element).find('li').length > 1 ) ? bxInfo_Auto_Main : false,
			touchEnabled: ( $(element).find('li').length > 1 ) ? true : false,
			pause: bxInfo_Pause,
			infiniteLoop: ( bxInfo_Infinite == 1 ) ? true : false,
			randomStart: ( bxInfo_Random == 1 ) ? true : false
		
		} )
	
	} );
	
	$('.bx-pager.bx-default-pager').wrap( '<div class="bx-pager-outer"></div>' );
	
} );