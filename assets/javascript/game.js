
        var counter = 0;
        var pointValues = [12, 2, 3, 7];
        var wins = 0;
        var losses = 0;
        var numberToReach = Math.floor((Math.random() * 101) + 19);
        function reset() {
            numberToReach = Math.floor((Math.random() * 101) + 19);
            counter = 0
            $("#number-to-reach").html(numberToReach);
            console.log(numberToReach);
        }
        $(document).ready(function () {
            $("#number-to-reach").text(numberToReach);
            $("#numberWins").text("Wins Total: " + wins);
            $("#numberLosses").text("Losses Total: " + losses);
            function randomNumber() {
                var numberToReach = Math.floor(Math.random() * 101) + 19;
                console.log(randomNumber);
            }
            for (var i = 0; i < pointValues.length; i++) {
                var myCrystal = $("<img>");
                myCrystal.addClass("cool-crystal");
                myCrystal.attr("src", "assets/images/crystal.jpg");
                myCrystal.attr("data-clickvalue", pointValues[i]);
                $("#shine").append(myCrystal);
                
                console.log(myCrystal);
            }
        
    $(".cool-crystal").on("click", function () {
                var clickValue = ($(this).attr("data-clickvalue"));
                clickValue = parseInt(clickValue);
                counter += clickValue;
                console.log(clickValue);
                alert("New score: " + counter);
                if (counter === numberToReach) {
                    alert("You Got It!");
                    wins++;
                    $("#numberWins").text("You have now won: " + wins);
                    reset();
                }
                else if (counter >= numberToReach) {
                    alert("You lose!!");
                    losses++;
                    $("#numberLosses").text("You have now lost: " + losses);
                    reset();
                }
            })
    });
   