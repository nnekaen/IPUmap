
(function ($) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
  

Drupal.behaviors.IPUmap= {
        attach: function (context, settings) {
           
 $(function () {
           
     
    var tests=  Drupal.settings.IPUmap.testing;
      console.log(tests);
     
        var getElemID = function(elem) {
                // Show element ID
    
                return $(elem.node).attr("data-id")+": " + tests[$(elem.node).attr("data-id")];
         };
           
        
            $(".mapcontainer_un").mapael({
                map: {
                    name: "world_countries_un",
                    zoom: {
                        enabled: true,
                        maxLevel: 15
                    },  
                     
                    
                     defaultArea: {
                        attrs: {
                         	fill: "#00A6B6",
                        	stroke: "#5d5d5d",
                        	"stroke-width": 0.2,
                        	"stroke-linejoin": "round"
                    	},
                    	attrsHover: {
                        	fill: "#E98300",
                        	animDuration: 300
                    	},
                          tooltip: {
                        content: getElemID
                        }
                    },
                   
                    defaultPlot: {
                        size: 9
                    }
                 
                },
                
                legend: {
                    area: {
                        title: "IPU Member Status",
                        slices: [{
                            size: 30,
                            attrs: {
                                fill: "#6F737"
                            },
                            label: "Non Member",
                            sliceValue: "Non Member"
                        }, {
                            size: 30,
                            attrs: {
                                fill: "#00A6B6"
                            },
                            label: "Member",
                            sliceValue: "Member",
                        }]
                    }
                },
             
                areas: {   

                    
"Afghanistan" : {value:countries["Afghanistan"],attrs: {"stroke-width":0.1,} },
"Albania" : {value:countries["Albania" ],  attrs: {"stroke-width":0.1,} },
"Algeria" : {value:countries["Algeria" ],  attrs: {"stroke-width":0.1,}},
"Andorra" : { value:countries["Andorra" ], attrs: {"stroke-width":0.1,} },
"Angola" : {value:countries["Angola" ],  attrs: {"stroke-width":0.1,} },
"Antigua-and-Barbuda" : {value:countries["Antigua-and-Barbuda" ],},
"Argentina" : {value:countries["Argentina" ],attrs: {"stroke-width":0.1,} },
"Armenia" : {value:countries["Armenia"],attrs: {"stroke-width":0.1,}},
"Asia and the Pacific" : {value:countries["Asia and the Pacific"], attrs: {"stroke-width":0.1,} },
"Australia" : {value:countries["Australia"], attrs: {"stroke-width":0.1,} },
"Austria" : {value:countries["Austria"], attrs: {"stroke-width":0.1,}},
"Azerbaijan" : { value:countries["Azerbaijan"] },
"Bahamas" : { value:countries["Bahamas"],},
"Bahrain" : {value:countries["Afghanistan" ]  },
"Bangladesh" : { value:countries["Bahrain"],  },
"Barbados" : {value:countries["Barbados"  ], },
"Belarus" : { value:countries["Belarus" ],  },
 "Belgium" : { value:countries["Belgium"], },
"Belize" : { value:countries["Belize"],},
"Benin" : { value:countries["Benin"] },
"Bhutan" : { value:countries["Bhutan"] },
"Bolivia Plurinational State of" : {value:countries["Bolivia Plurinational State of"],},
"Bosnia and Herzegovina" : { value:countries["Bosnia and Herzegovina"],  },
"Botswana" : {value:countries["Botswana"],  },
"Brazil" : {value:countries["Brazil"  ],  },
"Brunei Darussalam" : {value:countries["Brunei Darussalam"],},
"Bulgaria" : {value:countries["Bulgaria"],},
"Burkina Faso" : { value:countries["Burkina Faso"],  },
"Burundi" : { value:countries["Burundi"],  },
"Cambodia" : { value:countries["Cambodia"], },
"Cameroon" : { value:countries["Cameroon"],   },
"Canada" : {value:countries["Canada"],  },
"Cape Verde" : { value:countries["Cape Verde"],  },
"Central African Republic" : {value:countries["Central African Republic"],},
"Chad" : {value:countries["Chad"],},
"Chile" : { value:countries["Chile" ],},
"China" : {value:countries["China"],},
"Colombia" : { value:countries["Colombia" ],},
"Comoros" : {value:countries["Comoros"  ],},
"Congo" : {value:countries["Congo"],},
"Costa Rica" : {value:countries["Costa Rica"],},
"Cote-D Ivoire" : { value:countries["Cote-D Ivoire" ],},
"Croatia" : { value:countries["Croatia" ], },
"Cuba" : {value:countries["Cuba"], },
"Cyprus" : { value:countries["Cuba"],},
"Czech Republic" : { value:countries["Cyprus"], },
"Democratic People s Republic of Korea" : {value:countries["Cyprus"],},
"Democratic-Republic-of-the-Congo" : {value:countries["Cyprus"], },
"Denmark" : { value:countries["Cyprus"], },
"Djibouti" : {value:countries["Cyprus"], },
"Dominica" : {value:countries["Cyprus"], },
"Dominican Republic" : { "value": "228",  "tooltip": { "content": "Dominican Republic", } },
"Ecuador" : { "value": "228",  "tooltip": { "content": "Ecuador", } },
"El-Salvador" : { "value": "228",  "tooltip": { "content": "El Salvador", } },
"Equatorial Guinea" : { "value": "179",  "tooltip": { "content": "Equatorial Guinea", } },
"Eritrea" : { "value": "179",  "tooltip": { "content": "Eritrea", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Estonia" : { "value": "103", "tooltip": { "content": "Estonia", } },
"Ethiopia" : { "value": "179",  "tooltip": { "content": "Ethiopia: Member", } },
"Europe and the CIS" : { "value": "0",  "tooltip": { "content": "Europe and the CIS", } },
"Fiji" : { "value": "56",  "tooltip": { "content": "Fiji", } },
"Finland" : { "value": "103",  "tooltip": { "content": "Finland", } },
"Former-Yugoslav-Republic-of-Macedonia" : { "value": "103",  "tooltip": { "content": "Former Yugoslav Republic of Macedonia", } },
"France" : { "value": "103",  "tooltip": { "content": "France", } },
"Gabon" : { "value": "179",  "tooltip": { "content": "Gabon", } },
"Gambia" : { "value": "179",  "tooltip": { "content": "Gambia", } },
"Georgia" : { "value": "103",  "tooltip": { "content": "Georgia", } },
"Germany" : { "value": "103",  "tooltip": { "content": "Germany", } },
"Ghana" : { "value": "179",  "tooltip": { "content": "Ghana", } },
"Greece" : { "value": "103",  "tooltip": { "content": "Greece", } },
"Grenada" : { "value": "228",  "tooltip": { "content": "Grenada", } },
"Guatemala" : { "value": "228",  "tooltip": { "content": "Guatemala", } },
"Guinea" : { "value": "179", "tooltip": { "content": "Guinea", } },
"Guinea-Bissau" : { "value": "179",  "tooltip": { "content": "Guinea-Bissau", } },
"Guyana" : { "value": "228",  "tooltip": { "content": "Guyana", } },
"Haiti" : { "value": "228",  "tooltip": { "content": "Haiti", } },
"Honduras" : { "value": "228",  "tooltip": { "content": "Honduras", } },
"Hungary" : { "value": "103",  "tooltip": { "content": "Hungary", } },
"Iceland" : { "value": "103",  "tooltip": { "content": "Iceland", } },
"Indonesia" : { "value": "56",  "tooltip": { "content": "Indonesia", } },
"Iran-Islamic-Republic-of" : { },
"Iraq" : { "value": "157",  "tooltip": { "content": "Iraq", } },
"Ireland" : { "value": "103",  "tooltip": { "content": "Ireland", } },
"Israel" : { "value": "157",  "tooltip": { "content": "Israel", } },
"Italy" : { "value": "103", "tooltip": { "content": "Italy", } },
"Jamaica" : { "value": "228",  "tooltip": { "content": "Jamaica", },attrs: {fill: "#6F7376","stroke-width":0.1,}  },
"Japan" : { "value": "56",  "tooltip": { "content": "Japan", } },
"Jordan" : { "value": "157",  "tooltip": { "content": "Jordan", } },
"Kazakhstan" : { "value": "56", "tooltip": { "content": "Kazakhstan", } },
"Kenya" : { "value": "179",  "tooltip": { "content": "Kenya", } },
"Kiribati" : { "value": "56",  "tooltip": { "content": "Kiribati", } },
"Kuwait" : { "value": "157", "tooltip": { "content": "Kuwait", } },
"Kyrgyzstan" : { "value": "56",  "tooltip": { "content": "Kyrgyzstan", } },
"Lao People's Democratic Republic" : { "value": "56",  "tooltip": { "content": "Lao People's Democratic Republic", } },
"Latvia" : { "value": "103",  "tooltip": { "content": "Latvia", } },
"Lebanon" : { "value": "157",  "tooltip": { "content": "Lebanon", } },
"Lesotho" : { "value": "179", "tooltip": { "content": "Lesotho", } },
"Liberia" : { "value": "179",  "tooltip": { "content": "Liberia", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Libya" : { "value": "157",  "tooltip": { "content": "Libya", } },
"Liechtenstein" : { "value": "103", "tooltip": { "content": "Liechtenstein", } },
"Lithuania" : { "value": "103",  "tooltip": { "content": "Lithuania", } },
"Luxembourg" : { "value": "103",  "tooltip": { "content": "Luxembourg", } },
"Madagascar" : { "value": "179",  "tooltip": { "content": "Madagascar", } },
"Malawi" : { "value": "179",  "tooltip": { "content": "Malawi", } },
"Malaysia" : { "value": "56",  "tooltip": { "content": "Malaysia", } },
"Maldives" : { "value": "56","tooltip": { "content": "Maldives", } },
"Mali" : { "value": "179", "tooltip": { "content": "Mali", } },
"Malta" : { "value": "103", "tooltip": { "content": "Malta", } },
"Marshall-Islands" : { "value": "56",  "tooltip": { "content": "Marshall Islands", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Mauritania" : { "value": "179",  "tooltip": { "content": "Mauritania", } },
"Mauritius" : { "value": "179",  "tooltip": { "content": "Mauritius", } },
"Mexico" : { "value": "228",  "tooltip": { "content": "Mexico", } },
"Micronesia-Federated-States-of" : { "value": "56",  "tooltip": { "content": "Micronesia Federated States of", } },
"Moldova" : { "value": "103", "tooltip": { "content": "Moldova", } },
"Monaco" : { "value": "103",  "tooltip": { "content": "Monaco", } },
"Mongolia" : { "value": "56", "tooltip": { "content": "Mongolia", } },
"Montenegro" : { "value": "103", "tooltip": { "content": "Montenegro", } },
"Morocco" : { "value": "157","tooltip": { "content": "Morocco", } },
"Mozambique" : { "value": "179",  "tooltip": { "content": "Mozambique", } },
"Myanmar" : { "value": "56",  "tooltip": { "content": "Myanmar", } },
"Namibia" : { "value": "179",  "tooltip": { "content": "Namibia", } },
"Nauru" : { "value": "56",  "tooltip": { "content": "Nauru", } },
"Nepal" : { "value": "56",  "tooltip": { "content": "Nepal", } },
"Netherlands" : { "value": "103",  "tooltip": { "content": "Netherlands", } },
"New-Zealand" : { "value": "56",  "tooltip": { "content": "New Zealand", } },
"Nicaragua" : { "value": "228",  "tooltip": { "content": "Nicaragua", } },
"Niger" : { "value": "179",  "tooltip": { "content": "Niger", } },
"Nigeria" : { "value": "179",  "tooltip": { "content": "Nigeria", } },
"Niue" : { "value": "56",  "tooltip": { "content": "Niue", } },
"North-Africa-and-Middle-East" : { "value": "0",  "tooltip": { "content": "North Africa and Middle East", } },
"Norway" : { "value": "103",  "tooltip": { "content": "Norway", } },
"Oman" : { "value": "157",  "tooltip": { "content": "Oman", } },
"Palau" : { "value": "56",  "tooltip": { "content": "Palau", } },
"Panama" : { "value": "228",  "tooltip": { "content": "Panama", } },
"Papua-New-Guinea" : { "value": "56",  "tooltip": { "content": "Papua New Guinea", } },
"Paraguay" : { "value": "228",  "tooltip": { "content": "Paraguay", } },
"Peru" : { "value": "228",  "tooltip": { "content": "Peru", } },
"Philippines" : { "value": "56",  "tooltip": { "content": "Philippines", } },
"Poland" : { "value": "103",  "tooltip": { "content": "Poland", } },
"Portugal" : { "value": "103",  "tooltip": { "content": "Portugal", } },
"Qatar" : { "value": "157",  "tooltip": { "content": "Qatar", } },
"Republic-of-Korea" : { "value": "56", "tooltip": { "content": "Republic of Korea", } },
"Romania" : { "value": "103",  "tooltip": { "content": "Romania", } },
"Russian-Federation" : { "value": "103",  "tooltip": { "content": "Russian Federation", } },
"Rwanda" : { "value": "179",  "tooltip": { "content": "Rwanda", } },
"Saint-Kitts-and-Nevis" : { "value": "228",  "tooltip": { "content": "Saint Kitts and Nevis", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Saint-Lucia" : { "value": "228",  "tooltip": { "content": "Saint Lucia", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Saint-Vincent-and-the-Grenadines" : { "value": "228",  "tooltip": { "content": "Saint Vincent and the Grenadines", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Samoa" : { "value": "56", "tooltip": { "content": "Samoa", } },
"San-Marino" : { "value": "103",  "tooltip": { "content": "San Marino", } },
"Sao-Tome-and-Principe" : { "value": "179",  "tooltip": { "content": "Sao Tome and Principe", } },
"Saudi-Arabia" : { "value": "157",  "tooltip": { "content": "Saudi Arabia", } },
"Senegal" : { "value": "179",  "tooltip": { "content": "Senegal", } },
"Serbia" : { "value": "103",  "tooltip": { "content": "Serbia", } },
"Seychelles" : { "value": "179",  "tooltip": { "content": "Seychelles", } },
"Sierra-Leone" : { "value": "179",  "tooltip": { "content": "Sierra Leone", } },
"Singapore" : { "value": "56",  "tooltip": { "content": "Singapore", } },
"Slovakia" : { "value": "103",  "tooltip": { "content": "Slovakia", } },
"Slovenia" : { "value": "103",  "tooltip": { "content": "Slovenia", } },
"Solomon-Islands" : { "value": "56",  "tooltip": { "content": "Solomon Islands", } },
"Somalia" : { "value": "179",  "tooltip": { "content": "Somalia: Member", } },
"South Africa" : { "value": "179", "tooltip": { "content": "South Africa", } },

"Spain" : { "value": "103",  "tooltip": { "content": "Spain", } },
"Sri Lanka" : { "value": "56",  "tooltip": { "content": "Sri Lanka", } },
"Sub Saharan Africa" : { "value": "0",  "tooltip": { "content": "Sub Saharan Africa", } },
"Suriname" : { "value": "228",  "tooltip": { "content": "Suriname", } },
"Swaziland" : { "value": "179",  "tooltip": { "content": "Swaziland", } },
"Sweden" : { "value": "103",  "tooltip": { "content": "Sweden", } },
"Switzerland" : { "value": "103",  "tooltip": { "content": "Switzerland", } },
"Syrian-Arab-Republic" : { "value": "157",  "tooltip": { "content": "Syrian Arab Republic", } },
"Tajikistan" : { "value": "56",  "tooltip": { "content": "Tajikistan", } },
"Thailand" : { "value": "56",  "tooltip": { "content": "Thailand", } },
"The-Americas-and-the-Caribbean" : { "value": "0",  "tooltip": { "content": "The Americas and the Caribbean", } },
"Timor-Leste" : { "value": "56", "tooltip": { "content": "Timor-Leste", } },
"Togo" : { "value": "179", "tooltip": { "content": "Togo", } },
"Tonga" : { "value": "56",  "tooltip": { "content": "Tonga", } },
"Trinidad-and-Tobago" : { "value": "228",  "tooltip": { "content": "Trinidad and Tobago", } },
"Tunisia" : { "value": "157",  "tooltip": { "content": "Tunisia", } },
"Turkey" : { "value": "103",  "tooltip": { "content": "Turkey", } },
"Turkmenistan" : { "value": "56",  "tooltip": { "content": "Turkmenistan", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Tuvalu" : { "value": "56",  "tooltip": { "content": "Tuvalu", } },
"Uganda" : { "value": "179",  "tooltip": { "content": "Uganda", } },
"Ukraine" : { "value": "103",  "tooltip": { "content": "Ukraine", } },
"United-Arab-Emirates" : { "value": "157", "tooltip": { "content": "United Arab Emirates", } },
"United-Kingdom-of-Great-Britain-and-Northern-Ireland" : { "value": "103",  "tooltip": { "content": "United Kingdom of Great Britain and Northern Ireland", } },
"United Republic of Tanzania" : { "value": "179", "tooltip": { "content": "United Republic of Tanzania", } },
"United States of America" : {  "value": "228","tooltip": { "content": "United States of America: Non Member", }, attrs: {fill: "#6F7376","stroke-width":0.1,}  },
"Uruguay" : { "value": "228",  "tooltip": { "content": "Uruguay", } },
"Uzbekistan" : { "value": "56",  "tooltip": { "content": "Uzbekistan", },attrs: {fill: "#6F7376","stroke-width":0.1,} },
"Vanuatu" : { "value": "56",  "tooltip": { "content": "Vanuatu", } },
"Venezuela" : { "value": "228",  "tooltip": { "content": "Venezuela", } },
"Viet Nam" : { "value": "56",  "tooltip": { "content": "Viet Nam", } },
"Yemen" : { "value": "157",  "tooltip": { "content": "Yemen", } },
"Zambia" : { "value": "179",  "tooltip": { "content": "Zambia", } },
"Zimbabwe" : { "value": "179",  "tooltip": { "content": "Zimbabwe", } },                    
                                          
"Cyprus" : { "value": "103",  "tooltip": { "content": "Cyprus", }, attrs : { "stroke-width" : 0    } }, 
 "Western Sahara" : { "value": "179",  "tooltip": { "content": "WESTERN SAHARA: Non Member",  } }, 
"Pakistan" : { "value": "56",  "tooltip": { "content": "Pakistan", },attrs : {   stroke : "none", "stroke-width" : 0 ,
 } },

"Jammu-and-Kashmir" : { "value": "56",  "tooltip": { "content": "Jammu and Kashmir: Non Member",  },attrs: {fill: "white","stroke-width":0.1, } },  
"Gaza" : { "value": "157",  "tooltip": { "content": "Gaza (Occupied Palestinian Territory)",  },attrs : {   stroke : "none", "stroke-width" : 0 ,
 }, }, 
"South Sudan" : { "value": "179",  "tooltip": { "content": "South Sudan: Member",  },attrs : {stroke : "none", } }, 
"Egypt" : { "value": "157",  "tooltip": { "content": "Egypt: Member" } ,attrs : {    stroke : "none", } },
"Sudan" : { "value": "179",  "tooltip": { "content": "Sudan: Member",  },attrs : {stroke : "none",  } }, 
"West Bank" : { "value": "157",  "tooltip": { "content": "West Bank (Occupied Palestinian Territory)",  },attrs : {  "stroke-dasharray" :".",  // stroke : "red",  //"stroke-width" : 0,
  } }, 
"Republic of Korea" : { "value": "56","tooltip": { "content": "Republic of Korea",  },attrs : {    stroke : "none",   } }, 
"Democratic People's Republic of Korea" : { "value": "56",  "tooltip": { "content": "Democratic People's Republic of Korea",  }
 ,attrs : { stroke : "none", 										} },

"India" : { "value": "56",  "tooltip": { "content": "India", } 
, 
  },
		
"Greenland" : {
"value": "103",

"tooltip": {
"content": "Greenland (Denmark)", 
}
},
"French-Southern-and-Antarctic-Lands"	 : {
"value": "103",

"tooltip": {
"content": "French Southern and Antarctic Lands", 
}, attrsHover : {
				transform : "s3"
					, animDuration : 300
				}
}, 
/*"Taiwan-Province-of-China"   : {
"value": "56",
"href": "http://iknowpolitics.org/"+lang+"/region/China",
"tooltip": {
"content": "Taiwan, Province of China", 
}
},*/

    "Falkland-Islands"  : {
    "value": "103",
    "tooltip": {
    "content": "Falkland Islands (Malvinas): Non Member<br>Note:A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).", 
    }, 
    attrs: {fill: "white","stroke-width":0.1,},
     attrsHover : {
                    transform : "s3"
                        , animDuration : 300

                    }
    },


    "French Guiana Fr" : {
    "value": "103",
    "tooltip": {
    "content": "French Guiana (Fr)", 
    }
    },


    "New Caledonia" : {
    "value": "179",
    "tooltip": {
    "content": "New Caledonia", 
    } , attrsHover : {
                    transform : "s3"
                        , animDuration : 300
                    }
    },
        //NC

        "Egypt2" : {
        "value": "2",

         attrsHover : {         fill : "none"
                                , animDuration : 0,
                            },attrs : {
                            fill: "none",
                        "stroke-dasharray" :".", 
                        }
        },

        "Aksai Chin"  : {
        "value": "56",
        tooltip: {content: ""
        }, attrsHover : {
                                fill : "none"
                                , animDuration : 0,
                            }
        },
    "KE-SD"  : {
    "value": "179",
    attrsHover : {
                            fill : "none",
                             animDuration : 0,
                        },attrs : {
                        fill : "none",
                        "stroke-dasharray" :".",  // stroke : "red",
                    }
    },
    "DRPK-ROK"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                        fill: "none",
                        "stroke-dasharray" :".",  // stroke : "red",

                    }
    },
    "Somalia2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            "stroke-dasharray" :".",  
                                             stroke : "saddlebrown",
                    }
    },

    "JandK" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                             stroke : "none",
                                            "stroke-dasharray" :".", 

                    }
    },

    "JandK2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",

                                            "stroke-dasharray" :".", 
                    }
    },


    "JandK4"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            //"stroke-dasharray" :".", 
                    }
    },
    "JandK5"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            "stroke-dasharray" :".", 
                    }
    },
    "South Sudan2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : "1",
                        },attrs : {
                                            fill: "none",
                                            //stroke : "red",
                                            "stroke-dasharray" :".", 
                    }
    },
      "Sudan border" : {"value": "2",attrsHover : {fill : "none", animDuration : "0",},attrs : {
                                            fill: "none",
                                            //"stroke-dasharray" :".",
      }},
    "India-border"   : {
    "value": "2",
     attrsHover : {fill : "none", animDuration : "0",},attrs : {fill: "none",//"stroke-dasharray" :".", 
                    }},

    "JandK-border"  : {"value": "2",attrsHover : { fill : "none", animDuration : "0",},attrs : {fill: "none",

                    }},

                                             
                    
                    //non members COUNTRIES
              "Aksai Chin"  : {
                           attrs: {
                            fill: "white",
                              "stroke-width":0.1,
                          
                           
                        }
                        , attrsHover: {
                            
                        }
                    },
                     
                                         
                                        
                                         
                      "Puerto Rico": {
                        attrs: {
                            fill: "#6F7376",
                              "stroke-width":0.1,
                         
                        },
                          "tooltip": { 
                          "content": "Puerto Rico: Non Member",  }
                          
                        , attrsHover: {
                            
                        }
                    },
                    
                 
               
                
        
                    
                    
                       
                },

              
            });
          
        
        
        
                    
        });

 }
    };


})(jQuery);

      