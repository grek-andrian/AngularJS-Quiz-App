(function(){
  angular.module("VWFacts")
      .factory("dataService", DataFactory);

  function DataFactory(){
    var dataObj = {
      carsData: carsData,
      quizQuestions: quizQuestions
    };
    return dataObj;
  };

  var quizQuestions  = [
       {
           type: "text",
           text: "When created the first model Volkswagen Golf?",
           possibilities: [
               {
                   answer: "1974"
               },
               {
                   answer: "1972"
               },
               {
                   answer: "1968"
               },
               {
                   answer: "1975"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "Which generation of VW Golf will started in 2018 year",
           possibilities: [
               {
                   answer: "VII"
               },
               {
                   answer: "VIII"
               },
               {
                   answer: "IX"
               },
               {
                   answer: "X"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "image",
           text: "Which of these is the Volkswagen Tiguan?",
           possibilities: [
               {
                   answer: "http://volkswagen-touran.infocar.ua/img/colors/4417-bg.jpg"
               },
               {
                   answer: "http://volkswagen-tiguan.infocar.ua/img/colors/1212-bg.jpg"
               },
               {
                   answer: "http://volkswagen-touareg.infocar.ua/img/colors/3938-bg.jpg"
               },
               {
                   answer: "http://volkswagen-amarok.infocar.ua/img/colors/4925-bg.jpg"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "image",
           text: "Which of these is the VW Polo?",
           possibilities: [
               {
                   answer: "http://volkswagen-jetta.infocar.ua/img/colors/4585-bg.jpg"
               },
               {
                   answer: "http://volkswagen-touran.infocar.ua/img/colors/4417-bg.jpg"
               },
               {
                   answer: "http://volkswagen-golf.infocar.ua/img/colors/2142-bg.jpg"
               },
               {
                   answer: "http://volkswagen-polo.infocar.ua/img/colors/3428-bg.jpg"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "Where produce the model Volkswagen Golg?'",
           possibilities: [
               {
                   answer: "Frankfurt"
               },
               {
                   answer: "Saragosa"
               },
               {
                   answer: "Kaluga"
               },
               {
                   answer: "Volfsburg"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "What is the most popular model VW in Europe?",
           possibilities: [
               {
                   answer: "Polo"
               },
               {
                   answer: "Golf"
               },
               {
                   answer: "Tiguan"
               },
               {
                   answer: "Passat"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "What is the largest model of VW?",
           possibilities: [
               {
                   answer: "Amarok"
               },
               {
                   answer: "Touareg"
               },
               {
                   answer: "Touran'"
               },
               {
                   answer: "Tiguan"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "image",
           text: "Which of these is the Amarok?",
           possibilities: [
               {
                   answer: "http://volkswagen-tiguan.infocar.ua/img/colors/1212-bg.jpg"
               },
               {
                   answer: "http://volkswagen-touareg.infocar.ua/img/colors/3938-bg.jpg"
               },
               {
                   answer: "http://volkswagen-amarok.infocar.ua/img/colors/4925-bg.jpg"
               },
               {
                   answer: "http://volkswagen-touran.infocar.ua/img/colors/4417-bg.jpg"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "How weight VW Amarok?",
           possibilities: [
               {
                   answer: "1958kg"
               },
               {
                   answer: "1245kg"
               },
               {
                   answer: "2010kg"
               },
               {
                   answer: "1782kg"
               }
           ],
           selected: null,
           correct: null
       },
       {
           type: "text",
           text: "Which of these models are hetchbeck?",
           possibilities: [
               {
                   answer: "Polo"
               },
               {
                   answer: "Golf"
               },
               {
                   answer: "Jetta"
               },
               {
                   answer: "Passat"
               }
           ],
           selected: null,
           correct: null
       }
];

var carsData = [
     {
         model: "Volkswagen Polo",
         image_url: "http://volkswagen-polo.infocar.ua/img/colors/3428-bg.jpg",
         type: "hetchbeck",
         engine: "1.2l",
         seats: "4",
         description: "The Volkswagen Polo is one of the leading superminis on the market, thanks to its mix of grown-up driving dynamics, upmarket interior quality and low running costs."
     },
     {
         model: "Volkswagen Golf",
         image_url: "http://volkswagen-golf.infocar.ua/img/colors/2142-bg.jpg",
         type: "hetchbeck",
         engine: "1.2l",
         seats: "5",
         description: "For many mainstream carmakers, the Volkswagen Golf has been the family hatchback yardstick for years. Seven generations on, and with a facelift introduced in February 2017, the latest model is one of the best offerings in its class."
     },
     {
         model: "Volkswagen Jetta",
         image_url: "http://volkswagen-jetta.infocar.ua/img/colors/4585-bg.jpg",
         type: "sedan",
         engine: "1.4l",
         seats: "5",
         description: "The VW Jetta comes in three trim levels, starting with the Jetta S which includes manual air conditioning, electric windows all round, and a colour infotainment screen. The Jetta SE model upgrades the infotainment offer, and adds cruise control, a leather-trimmed multi-function steering wheel, and 16-inch alloy wheels. The range-topping Jetta GT has 17-inch alloys, plus front fog lamps, dark tinted glass, and automatic dimming rear view mirror and wipers amongst its highlights."
      },
     {
         model: "Volkswagen Passat",
         image_url: "http://volkswagen-passat.infocar.ua/img/colors/3942-bg.jpg",
         type: "sedan",
         engine: "1.8l",
         seats: "5",
         description: "The Volkswagen Passat has been around for a while, but you'll be hard-pressed to find a car that manages motorway miles as solidly. It still provides a strong challenge for the Ford Mondeo, Skoda Superb and Mazda 6, and in tandem with most Volkswagen cars, it's got an upmarket image, quality interior and impressive refinement. It's immensely quiet thanks to improved insulation, so engine, wind and road noise are hardly noticeable. The result is a car that makes an excellent long-distance cruiser."
     },
     {
         model: "Volkswagen Touran",
         image_url: "http://volkswagen-touran.infocar.ua/img/colors/4417-bg.jpg",
         type: "vagon",
         engine: "2l",
         seats: "6",
         description: "A solid interior, a wide range of engines and huge practicality make the Volkswagen Touran one of the most flexible MPVs on sale today. With five- and seven-seat options, think of it as a smaller version of the VW Sharan – but due to its more compact dimensions and lower kerbweight, the Touran has the edge over its larger sibling when it comes to efficiency. "
     },
     {
         model: "Volkswagen Tiguan",
         image_url: "http://volkswagen-tiguan.infocar.ua/img/colors/1212-bg.jpg",
         type: "crossover",
         engine: "2l",
         seats: "5",
         description: " Given the fact that the Volkswagen Tiguan combines the usability of the Golf with desirable SUV features, it’s no wonder the tall-riding crossover is a favourite among UK buyers. Despite it getting a little long in the tooth these days, the Tiguan is still a top choice in the increasingly popular crossover SUV market. That’s down to a smart interior, quiet engines and an expansive trim range."
     },
     {
         model: "Volkswagen Touareg",
         image_url: "http://volkswagen-touareg.infocar.ua/img/colors/3938-bg.jpg",
         type: "crossover",
         engine: "2.4l",
         seats: "5",
         description: "The Volkswagen Touareg appears conspicuously good value for money when you consider that it uses the same mechanical package as the vastly more expensive Porsche Cayenne, as well as the recently replaced original Audi Q7."
     },
     {
         model: "Volkswagen Amarok",
         image_url: "http://volkswagen-amarok.infocar.ua/img/colors/4925-bg.jpg",
         type: "pick-up",
         engine: "2.4l",
         seats: "3",
         description: " As you might expect from a Volkswagen, Amarok prices are higher than many of its rivals, but this and the fact it’s only available as a double-cab in the UK don’t seem to have affected the big Volkswagen’s popularity. It claimed our Best Pick-up award two years in a row in 2013 and 2014 thanks to its blend of practicality, punchy but efficient engines and VW’s traditional build quality."
     }
 ];

})();
