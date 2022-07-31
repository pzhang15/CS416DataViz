const DATE = ["4/1/97","7/1/97","10/1/97","1/1/98","4/1/98","7/1/98","10/1/98","1/1/99","4/1/99","7/1/99","10/1/99","1/1/00","4/1/00","7/1/00","10/1/00",
        "1/1/01","4/1/01","7/1/01","10/1/01","1/1/02","4/1/02","7/1/02","10/1/02","1/1/03","4/1/03","7/1/03","10/1/03","1/1/04","4/1/04","7/1/04",
        "10/1/04","1/1/05","4/1/05","7/1/05","10/1/05","1/1/06","4/1/06","7/1/06","10/1/06","1/1/07","4/1/07","7/1/07","10/1/07","1/1/08","4/1/08",
        "7/1/08","10/1/08","1/1/09","4/1/09","7/1/09","10/1/09","1/1/10","4/1/10","7/1/10","10/1/10","1/1/11","4/1/11","7/1/11","10/1/11","1/1/12",
        "4/1/12","7/1/12","10/1/12","1/1/13","4/1/13","7/1/13","10/1/13","1/1/14","4/1/14","7/1/14","10/1/14","1/1/15","4/1/15","7/1/15","10/1/15",
        "1/1/16","4/1/16","7/1/16","10/1/16","1/1/17","4/1/17","7/1/17","10/1/17","1/1/18","4/1/18","7/1/18","10/1/18","1/1/19","4/1/19","7/1/19",
        "10/1/19","1/1/20","4/1/20","7/1/20","10/1/20","1/1/21","4/1/21","7/1/21","10/1/21","1/1/22","4/1/22"];

const T10Y2Y = ["0.42375","0.3384375","0.171774194","0.141311475","0.034920635","0.07125","0.285645161","0.139180328","0.25703125","0.250625",
                "0.196612903","-0.057936508","-0.387777778","-0.327142857","-0.148387097","0.464032258","1.084444444","1.319508197","1.895",
                "1.878666667","1.8721875","2.03359375","2.11516129","2.270983607","2.199047619","2.549375","2.428870968","2.323387097",
                "2.142419355","1.74484375","1.353387097","0.848688525","0.51265625","0.2571875","0.123606557","-0.027580645","0.074761905",
                "-0.035555556","-0.106935484","-0.081451613","0.04234375","0.347619048","0.776935484","1.635901639","1.46515625","1.5021875",
                "2.019193548","1.831967213","2.303174603","2.4878125","2.586129032","2.800163934","2.619375","2.24578125","2.391290323",
                "2.763709677","2.63984127","2.135","1.783114754","1.750483871","1.53625","1.383492063","1.439508197","1.688166667","1.71609375",
                "2.340625","2.416935484","2.390655738","2.201428571","1.98453125","1.739354839","1.364262295","1.55171875","1.530625","1.352258065",
                "1.078032787","0.97890625","0.83625","1.129180328","1.202258065","0.963333333","0.878730159","0.677096774","0.598032787","0.44359375",
                "0.257936508","0.238360656","0.167868852","0.210952381","0.11203125","0.200806452","0.283548387","0.493968254","0.5096875","0.71483871",
                "1.203770492","1.4165625","1.0990625","1.001612903","0.486612903","0.212096774"];

const GDP = ["1.66198","1.25078","0.85874","0.99938","0.92582","1.25276","1.61619","0.94383","0.835","1.32303","1.64278","0.36445",
            "1.82058","0.09977","0.59436","-0.32422","0.62139","-0.40035","0.27731","0.82823","0.6155","0.40353","0.13066","0.51672","0.89338",
            "1.6669","1.15405","0.57292","0.77874","0.94125","1.02203","1.11088","0.4866","0.78562","0.56793","1.34867","0.24558","0.15046",
            "0.84371","0.2936","0.63843","0.60231","0.60964","-0.40743","0.5723","-0.52689","-2.1831","-1.16572","-0.16924","0.36193","1.06796",
            "0.50005","0.9677","0.77314","0.5196","-0.24092","0.67805","-0.03877","1.12168","0.81792","0.45586","0.17488","0.10984","0.86779",
            "0.13939","0.79165","0.71117","-0.35011","1.28413","1.16496","0.44899","0.81331","0.58","0.32337","0.14623","0.58918","0.30239","0.60112",
            "0.49689","0.47193","0.55976","0.71915","0.9404","0.76285","0.83391","0.48195","0.22314","0.59779","0.79292","0.6855","0.4691","-1.30358",
            "-8.93725","7.54753","1.11528","1.53389","1.64075","0.57095","1.68078","-0.39569","-0.23437"];


const TOTAL_SLIDS = 4;
const PER_SLIDE_LENGTH = Math.floor(DATE.length /4);

const DATA1997 = []
const DATA2004 = []
const DATA2010 = []
const DATA2017 = []
for (let i = 0;i < DATE.length; i ++){
  obj = {
    date: DATE[i],
    yield: parseFloat(T10Y2Y[i]),
    gdp: parseFloat(GDP[i])
  }
  if (i <= PER_SLIDE_LENGTH) DATA1997.push(obj);
  if (i > PER_SLIDE_LENGTH && i <= 2 * PER_SLIDE_LENGTH) DATA2004.push(obj);
  if (i > 2 * PER_SLIDE_LENGTH && i <= 3 * PER_SLIDE_LENGTH) DATA2010.push(obj);
  if (i > 3 * PER_SLIDE_LENGTH && i <= 4 * PER_SLIDE_LENGTH) DATA2017.push(obj);
}

var parseTime = d3.timeParse("%m/%d/%y");
/********* DRAW THE SVG CANVAS***********/
var margin = {top: 10, right: 0, bottom: 0, left: 50};
var width = 1000
var height = 800


function drawplots(data, chartId, narration){
  //prepare our date axis domain
  var svg = d3.select(chartId)
    .attr("width", width)
    .attr("height", height)
    .attr("float", "right")
  .append("g")
    .attr("transform",
          "translate(" + 50 + "," + margin.top + ")");
  var dates = [];
  for (let obj of data) {
    dates.push(parseTime(obj.date));
  }
  var domain = d3.extent(dates);
  domain = [d3.timeYear.floor(domain[0]), d3.timeYear.ceil(domain[1])];
 
  var x = d3.scaleTime()
  .domain(domain)
  .range([0, width]);

  /*********DRAW xAxis***********/
  var xAxis = d3.axisBottom(x);
   svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis.ticks(d3.timeMonth));

  svg.selectAll(".tick text").remove();

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis.ticks(d3.timeYear));
  
  svg.append("text")
    .attr("transform", "translate(" + width/2 + "," + (height + 30) + ")")
   .style("text-anchor", "middle")
   .attr("fill", "black")
   .text("Dates");
  /*********DRAW YAxis***********/
  var percentage = [];
  for (let obj of data) {
    percentage.push(parseFloat(obj.yield));
    percentage.push(parseFloat(obj.gdp));
  }
  var domain = d3.extent(percentage);
  domain = [domain[0], domain[1]];
  var y = d3.scaleLinear()
    .domain(domain)
    .range([ height, 50 ]);
    svg.append("g")
    .call(d3.axisLeft(y));

  svg.append("text")
    .attr("transform", "translate(" + 30 + "," + 30 + ")")
   .style("text-anchor", "middle")
   .attr("fill", "black")
   .text("Percentage%");

   svg.selectAll("gdplinelegend")
      .data(data)
      .enter()
      .filter(function(d, i) { return i == data.length - 1 })
      .append("text")
      .text(function(d) { 
        return "GDP % Change vs. Time"
      })
      .attr("x", function (d) { return  x(parseTime(d.date)) + 10; })
      .attr("y", function (d) { return  y(+d.gdp) - 20; })
      .style('fill', 'red')
      .attr("font-weight", 300)

    svg.selectAll("yieldCurvelinelegend")
      .data(data)
      .enter()
      .filter(function(d, i) { return i == data.length - 1 })
      .append("text")
      .text(function(d) { 
        return "10Y Minus 2Y Yield vs. Time"
      })
      .attr("x", function (d) { return  x(parseTime(d.date)) + 10; })
      .attr("y", function (d) { return  y(+d.yield) - 20; })
      .style('fill', 'blue')
      .attr("font-weight", 300)


   /********* Create Tool Tip***********/
   var tooltip = d3.select("body")
   .append("div")
   .style("position", "absolute")
   .style("z-index", "10")
   .style("visibility", "hidden")
   .style("background", "white")
   // Three function that change the tooltip when user hover / move / leave a cell
  
  /*********PLOT DATA***********/
  svg.append('g')
  .append("path")
    .datum(data)
    .attr("d", d3.line()
      .x(function(d) { return x(parseTime(d.date)) })
      .y(function(d) { return y(+d.yield) })
    )
    .attr("stroke", "#0335fc")
    .style("stroke-width", 4)
    .style("fill", "none")

  var yieldCircle = svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
    .attr("cx", function(d) { 
      var ret = x(parseTime(d.date));
      return ret
    })
    .attr("cy", function(d) { return y(+d.yield) })
    .attr("r", 7)
    .style("fill", "blue")
    .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
    .on("mousemove", function(event, d){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").
    text(d.date + ": " + d3.format(",.2f")(d.yield) + " 10Y-2Y Yield%");})
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});


    svg.append('g')
    .append("path")
      .datum(data)
      .attr("d", d3.line()
        .x(function(d) { return x(parseTime(d.date)) })
        .y(function(d) { return y(+d.gdp) })
      )
      .attr("stroke", "#fc3903")
      .style("stroke-width", 4)
      .style("fill", "none")

    svg.append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          .x(function(d) { return x(parseTime(d.date)) })
          .y(function(d) { return y(+0) })
        )
        .attr("stroke", "black")
        .style("border-top", "dotted 1px")
    
    var gdpCircle = svg.selectAll('circle2')
    .data(data)
    .enter()
    .append('circle')
      .attr("cx", function(d) { return x(parseTime(d.date));})
      .attr("cy", function(d) { return y(+d.gdp) })
      .attr("r", 7)
      .style("fill", "red")
      .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
      .on("mousemove", function(event, d){return tooltip.style("top", (event.pageY-20)+"px").style("left",(event.pageX+20)+"px").text(d.date +  ": " + d3.format(",.2f")(d.gdp) + " GDP % change ");})
      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});




    
    /********* Create Persistent***********/
    var minInversionIdx = 0;
    var minInversion = 10;
    for(let i=0; i<data.length; i++) {
      if (data[i].yield < minInversion){
        minInversion = data[i].yield
        minInversionIdx = i;
      }
    }
    var minGDP = 10;
    var minGDPIdx = 0;
    for(let i=0; i<data.length; i++) {
      if (data[i].gdp < minGDP){
        minGDP = data[i].gdp;
        minGDPIdx = i
      }
    }  

    svg.selectAll("persistantlegendsTitle")
      .data(data)
      .enter()
      .filter(function(d, i) { return i == minGDPIdx })
      .append("text")
      .text(function(d) { 
        return narration.title;
      })
      .attr("x", function (d) { return  x(parseTime(d.date)) + 20; })
      .attr("y", function (d) { return  y(+d.gdp) - 50; })
      .style('fill', 'darkOrange')
      .attr("font-weight", 300)

    svg.selectAll("persistantlegendsText")
    .data(data)
    .enter()
    .filter(function(d, i) { return i == minGDPIdx })
    .append("text")
    .text(function(d) { 
      return narration.text + d.gdp;
    })
    .attr("x", function (d) { return  x(parseTime(d.date)) + 20; })
    .attr("y", function (d) { return  y(+d.gdp) - 30; })
    

}
var narration = [
  {
    title: "The DotCom Bubble",
    text: "The US Entered Peak Recessions with GDP: "
  }, 
  {
    title: "Subprime Mortage Crisis",
    text: "The US Entered Peak Recessions with GDP: "
  },
  {
    title: "Peceful 10 years",
    text: "The US Entered Peak Recessions with GDP: "
  },
  {
    title: "COVID 19 Crisis",
    text: "The US Entered Peak Recessions with GDP: "
  },

]
drawplots(DATA1997, "#chart1997", narration[0]);
drawplots(DATA2004, "#chart2004", narration[1]);
drawplots(DATA2010, "#chart2010", narration[2]);
drawplots(DATA2017, "#chart2017", narration[3]);
