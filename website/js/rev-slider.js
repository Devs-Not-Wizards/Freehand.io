(function($){
  "use strict";

  $(document).ready(function(){

    // Multi-Page New York
    $('#slider1').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[760,560,500,420],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows:{
          enable:false,
          style: "hermes",
          tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          }
        },

        bullets:{
          style:"uranus",
          enable:true,
          hide_onmobile:true,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          hide_under:0,
          hide_over:9999, 
          direction:"vertical",
          space:20,       
          h_align:"right",
          v_align:"center",
          h_offset:40,
          v_offset:0,
          tmp: '<span class="tp-bullet-inner"></span>'
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Hero
    $('#slider2').revolution({
      sliderLayout:"fullscreen",
      sliderType:"hero",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[900,800,600,600],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",
      fullScreenOffsetContainer: ".rev-offset",

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Full Screen Slide (Toronto)
    $('#slider3').revolution({
      sliderLayout:"fullscreen",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,860,420],
      gridheight:[630,560,500,420],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows:{
          enable:true,
          style: "hermes",
          tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          }
        },

        bullets:{
          style:"uranus",
          enable:true,
          hide_onmobile:true,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          hide_under:0,
          hide_over:9999, 
          direction:"horizontal",
          space:20,       
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:40,
          tmp: '<span class="tp-bullet-inner"></span>'
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });

    
    // Melbourne
    $('#slider4').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[640,560,500,420],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows:{
          enable:true,
          style: "hermes",
          tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0
          }
        },

        bullets:{
          style:"uranus",
          enable:true,
          hide_onmobile:true,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          hide_under:0,
          hide_over:9999, 
          direction:"horizontal",
          space:20,       
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:40,
          tmp: '<span class="tp-bullet-inner"></span>'
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });

    
    // Shop
    $('#slider5').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[910,800,700,620],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows: {
          style: "custom",
          enable: true,
          hide_onmobile: true,
          hide_onleave: true,
          tmp: '<div class="rev-arrow"></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          }
        },

        bullets:{
          enable:false
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Oslo Photography
    $('#slider6').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1200,1024,778,420],
      gridheight:[488,488,400,320],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows: {
          style: "custom light",
          enable: true,
          hide_onmobile: true,
          hide_onleave: true,
          tmp: '<div class="rev-arrow"></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0
          }
        },

        bullets:{
          enable:false
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Vienna
    $('#slider7').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1140,1024,778,420],
      gridheight:[500,450,400,320],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows: {
          enable: false
        },

        bullets:{
          enable:false
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Stockholm
    $('#slider8').revolution({
      sliderLayout:"auto",
      sliderType:"standard",
      delay:12000,
      responsiveLevels:[4096,1024,778,420],
      gridwidth:[1140,1024,778,420],
      gridheight:[630,580,500,320],
      minHeight: 300,

      hideThumbs:10,
      fullScreenAutoWidth:"on",

      navigation: {
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },

        arrows: {
          enable: false
        },

        bullets:{
          enable:false
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4",
      disableProgressBar: "on"
    });


    // Manila
    $('#slider9').revolution({
      sliderType:"standard",
      sliderLayout:"fullscreen",
      delay:9000,
      responsiveLevels:[1170,1024,778,460],
      gridwidth:[1170,1024,778,580],
      gridheight:[868,768,960,720],
      autoHeight:"off",
      fullScreenAutoWidth:"off",
      fullScreenAlignForce:"off",
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "vertical",
        mouseScrollNavigation:"carousel",
        mouseScrollReverse:"default",
        onHoverStop:"off",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "vertical",
          drag_block_vertical: false
        }
        ,
        bullets:{
          style:"uranus dark",
          enable:true,
          hide_onmobile:true,
          hide_onleave:false,
          hide_delay:200,
          hide_delay_mobile:1200,
          hide_under:0,
          hide_over:9999, 
          direction:"vertical",
          space:20,       
          h_align:"right",
          v_align:"center",
          h_offset:40,
          v_offset:0,
          tmp: '<span class="tp-bullet-inner"></span>'
        }
      },      
      lazyType:"smart",      
      spinner:"spinner4",
      disableProgressBar: "on"
    });


  });
  
})(jQuery);