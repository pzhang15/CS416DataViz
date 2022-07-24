var width = 500
var height = 1500

d3.csv("./data/GDPC1.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].DATE);
            console.log(data[i].GDPC1);
        }
    });