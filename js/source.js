    function calculate()
        {
        prompt("What is your name??");
        prompt("What is their name??");

        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;
        //document.getElementById("displayPercentage").innerHTML = loveScore + "%";
        if (loveScore > 70) 
        {
            alert("Bhai Rab ne Banadi Jodi, biyaah krle aj hi!!");
            document.getElementById("displayPercentage").innerHTML = "Love Percentage in this scenario is := " + loveScore + "%";
        }
        else
        {
            alert("bhai katega aj ni toh kal, kabhi na kabhi zarur katega...");
            document.getElementById("displayPercentage").innerHTML = "Love Percentage in this scenario is := " + loveScore + "%";
        }
        }