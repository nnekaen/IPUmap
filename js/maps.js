
(function ($) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
  

Drupal.behaviors.IPUmap= {
        attach: function (context, settings) {
           
 $(function () {
           
     
    var countries=  Drupal.settings.IPUmap.testing;
      console.log(countries);
     
        var getElemID = function(elem) {
                // Show element ID
    
                return $(elem.node).attr("data-id")+": " + countries[$(elem.node).attr("data-id")];
         };
           
         var getElemID1 = function(elem) {
                // Show element ID
    
                return countries[$(elem.node).attr("data-id")];
         };
           
        
            $(".mapcontainer_un").mapael({
                map: {
                    name: "world_countries_un",
                    zoom: {
                        enabled: true,
                        maxLevel: 15
                    },  
                     
                    
                     defaultArea: {
                         value: getElemID1,
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
                                fill: "#6F7376"
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

                    
"Afghanistan" : {value:countries["Afghanistan"], tooltip: { "content":getElemID} ,attrs: {"stroke-width":0.1,} },
"Albania" : {value:countries["Albania" ],tooltip: { "content":getElemID } ,  attrs: {"stroke-width":0.1,} },
"Algeria" : {value:countries["Algeria" ], tooltip: { "content":getElemID } ,  attrs: {"stroke-width":0.1,}},
"Andorra" : { value:countries["Andorra" ], tooltip: { "content":getElemID },attrs: {"stroke-width":0.1,} },
"Angola" : {value:countries["Angola" ],tooltip: { "content":getElemID },  attrs: {"stroke-width":0.1,} },
"Antigua and Barbuda" : {value:countries["Antigua and Barbuda" ],tooltip: { "content":getElemID }},
"Argentina" : {value:countries["Argentina" ],tooltip: { "content":getElemID },attrs: {"stroke-width":0.1,} },
"Armenia" : {value:countries["Armenia"],attrs: {"stroke-width":0.1,tooltip: { "content":getElemID }}},
"Asia and the Pacific" : {value:countries["Asia and the Pacific"], attrs: {"stroke-width":0.1,},tooltip: { "content":getElemID } },
"Australia" : {value:countries["Australia"], attrs: {"stroke-width":0.1,},tooltip: { "content":getElemID } },
"Austria" : {value:countries["Austria"], attrs: {"stroke-width":0.1,},tooltip: { "content":getElemID }},
"Azerbaijan" : { value:countries["Azerbaijan"],tooltip: { "content":getElemID } },
"Bahamas" : { value:countries["Bahamas"],tooltip: { "content":getElemID }},
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
"Cyprus" : { value:countries["Cyprus"],},
"Czech Republic" : { value:countries["Czech Republic"], },
"Democratic People s Republic of Korea" : {value:countries["Democratic People s Republic of Korea"],},
"Democratic Republic of the Congo" : {value:countries["Democratic Republic of the Congo"], },
"Denmark" : { value:countries["Denmark"], },
"Djibouti" : {value:countries["Djibouti"], },
"Dominica" : {value:countries["Dominica"], },
"Dominican Republic" : { value:countries["Dominican Republic"],},
"Ecuador" : { value:countries["Ecuador"], },
"El Salvador" : { value:countries["El Salvador"], },
"Equatorial Guinea" : { value:countries["Equatorial Guinea"], },
"Eritrea" : { value:countries["Eritrea"], },
"Estonia" : { value:countries["Estonia"],},
"Ethiopia" : {value:countries["Ethiopia"], },
"Europe and the CIS" : { value:countries["Europe and the CIS"], },
"Fiji" : { value:countries["Fiji"],},
"Finland" : { value:countries["Finland"], },
"Former Yugoslav Republic of Macedonia" : { value:countries["Former Yugoslav Republic of Macedonia"], },
"France" : { value:countries["France"], },
"Gabon" : {value:countries["Gabon"], },
"Gambia" : { value:countries["Gambia"],},
"Georgia" : { value:countries["Georgia"],},
"Germany" : { value:countries["Germany"], },
"Ghana" : {value:countries["Ghana"], },
"Greece" : {value:countries["Greece"], },
"Grenada" : { value:countries["Grenada" ], },
"Guatemala" : { value:countries["Guatemala"], },
"Guinea" : { value:countries["Guinea" ], },
"Guinea Bissau" : {value:countries["Guinea Bissau" ], },
"Guyana" : { value:countries["Guyana"], } },
"Haiti" : { value:countries["Dominica"], },
"Honduras" : { value:countries["Dominica"],},
"Hungary" : { value:countries["Dominica"], },
"Iceland" : { value:countries["Dominica"], },
"Indonesia" : { value:countries["Dominica"], },
"Iran Islamic Republic of" : {value:countries["Dominica"], },
"Iraq" : {  value:countries["Iraq" ], },
"Ireland" : { value:countries["Ireland"], },
"Israel" : {  value:countries["Israel"], },
"Italy" : { value:countries["Italy"], },
"Jamaica" : { value:countries["Jamaica"], },
"Japan" : { value:countries["Japan"],},
"Jordan" : {value:countries["Jordan"], },
"Kazakhstan" : { value:countries["Kazakhstan"], },
"Kenya" : {value:countries["Kenya"], },
"Kiribati" : {value:countries["Kiribati"],},
"Kuwait" : { value:countries["Kuwait"], },
"Kyrgyzstan" : { value:countries["Kyrgyzstan"],},
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

      