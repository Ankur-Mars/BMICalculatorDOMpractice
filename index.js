
let BMI_ratio;
let BMI_tag;

function Clearinputs() {
    let Ageinput = document.getElementById("inputAgenumber");
    let heightinput = document.getElementById("inputheightinCMtext");
    let Weightinput = document.getElementById("inputWeightinKGtext");
    let Gender = document.getElementsByName("Gender");
    let Displaytext = document.getElementById("resultText");

    Gender[0].checked=false;
    Gender[1].checked=false;
    // console.log(Ageinput.value);
    // console.log(heightinput.value);
    // console.log(Weightinput.value);

    Ageinput.value=null;
    heightinput.value=null;
    Weightinput.value=null
    Displaytext.innerText="";
    // console.log(Ageinput.value);
    // console.log(heightinput.value);
    // console.log(Weightinput.value);

    
}

function ComputeBMI() {
    let Ageinput = document.getElementById("inputAgenumber");
    let heightinput = document.getElementById("inputheightinCMtext");
    let Weightinput = document.getElementById("inputWeightinKGtext");
    let Gender = document.getElementsByName("Gender");
    let Displaytext = document.getElementById("resultText");

        if((Gender[0].checked || Gender[1].checked) && (Ageinput.value != "") &&( heightinput.value != "") &&( Weightinput.value != ""))
        {
        
            BMI_ratio = (Weightinput.value)/((heightinput.value *0.01 )*(heightinput.value*0.01));
            console.log(BMI_ratio);

            /***
                *BMI          	        *Category
                = < 18.5 	            Underweight
                18.5 - 24.9         	Normal weight
                25 - 29.9           	Overweight
                30 -34.9 	            Obese- Class I
                35 - 39.9           	Obese- Class II
                40 and above 	        Obese- Class III

             * 
             * **/

            if (BMI_ratio<=18.5) 
            {
                console.log("Underweight");
                BMI_tag="Underweight";
            } 
            else if(BMI_ratio>18.5 && BMI_ratio <= 24.9)
            {
                console.log("Normal weight");
                BMI_tag="Normal weight";
            }
            else if(BMI_ratio>25 && BMI_ratio <= 29.9)
            {
                console.log("Overweight");
                BMI_tag="Overweight";
            }
            else if(BMI_ratio>30 && BMI_ratio <= 39.9)
            {
                console.log("Obese- Class I");
                BMI_tag="Obese- Class I";
            }
            else if( BMI_ratio>40 && BMI_ratio<= 39.9)
            {
                console.log("Obese- Class II");
                BMI_tag="Obese- Class II";
            }
            else
            {
                console.log("Obese- Class III");
                BMI_tag="Obese- Class III";
            }


        /* next checkes and BMI calculation*/
        }
        else
        {
            console.log("Enter all input data");
        }

        Displaytext.innerText= `${BMI_ratio} ${BMI_tag}`;


    
}
