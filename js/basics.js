function myFunction() {
                /* Get the text field */
                let Airway =  document.getElementById("Airway").value;
                let mallampati = "Airway: " + document.querySelector('input[name=mallampati]:checked').value;
                let calder =  document.querySelector('input[name=calder]:checked').value;
                let tmd =  document.querySelector('input[name=tmd]:checked').value + " ";
                let Allergies = "Allergies: " + document.getElementById("Allergies").value;
                // let anaestheticHx = "Anaesthetic Hx: " + document.getElementById("anaestheticHx").value;
                let DH = "Drug Hx: " + document.getElementById("DH").value;
                let Discussions = "Discussions: " + document.getElementById("Discussions").value;
                // let PMH = "PMHx: " + document.getElementById("PMH").value;
                let presentation = "History: " + document.getElementById("presentation").value;

                let frailty = "Frailty: " + document.querySelector('input[name=frailty]:checked').value;
                let Height = "Height(m): " + document.getElementById("Height").value;
                let Weight = "Weight(kg): " + document.getElementById("Weight").value;
                let HR = "HR: " + document.getElementById("HR").value;
                let BP = "BP: " + document.getElementById("BP").value;
                let RR = "RR: " + document.getElementById("RR").value;
                let SpO2 = "SpO2: " + document.getElementById("SpO2").value;
                let Temp = "Temp: " + document.getElementById("Temp").value;
                let covidDate = "Date: " + document.getElementById("covidDate").value;
                let covidres = "COVID result: " + document.querySelector('input[name=covidres]:checked').value;
                let bloodDate = "Date: " + document.getElementById("bloodDate").value;
                let Hb = " Hb: " + document.getElementById("Hb").value;
                let WBC = " WBC: " + document.getElementById("WBC").value;
                let Plts = " Plts: " + document.getElementById("Plts").value;
                let Na = " Na: " + document.getElementById("Na").value;
                let K = " K: " + document.getElementById("K").value;
                let Urea = " Urea: " + document.getElementById("Urea").value;
                let Creat = " Creat: " + document.getElementById("Creat").value;
                let PT = " PT: " + document.getElementById("PT").value;
                let APTT = " APTT: " + document.getElementById("APTT").value;

                let pH = " pH: " + document.getElementById("pH").value;
                let BE = " BE: " + document.getElementById("BE").value;
                let Lactate = "Lactate: " + document.getElementById("Lactate").value;
                let ECG = "ECG: " + document.getElementById("ECG").value;
                let ChestX = "Chest Xray: " + document.getElementById("ChestX").value;

                var selectedriskGA;
                var selectedriskReg;
                var selectedrisklines;
                var selectedTeeth = printChecked('teeth');

                let texttocopy;
                const breakUp = "\n____________\n";
                selectedriskGA = printChecked('riskGA');
                selectedriskReg = printChecked('riskReg');
                selectedrisklines = printChecked('risklines');
                console.log(selectedriskReg);

                texttocopy = breakUp + covidres + covidDate + breakUp + presentation  + breakUp + DH + 
                breakUp + Allergies + breakUp + Discussions + breakUp  + mallampati 
                + calder + tmd + selectedTeeth + Airway + breakUp + Height + Weight + HR + BP + RR + 
                SpO2 + Temp + frailty + breakUp + bloodDate + Hb + WBC + Plts + Na + K + Urea 
                + Creat + PT + APTT + pH + BE + Lactate + ECG + ChestX  + breakUp + selectedriskGA 
                + selectedriskReg + selectedrisklines;    

                copyToClipboard(texttocopy);
            };          

  
            function copyToClipboard(str) {
                const el = document.createElement('textarea');
                el.value = str;
                el.setAttribute('readonly', '');
                el.style.width = "50%";
                el.style.height = "400px";
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                window.alert("Text copied to clipboard")
            };
  
            function printChecked(name){
                var items=document.getElementsByName(name);
                var selectedItems="";
                for(var i=0; i<items.length; i++){
                  if(items[i].type=='checkbox' && items[i].checked==true)
                    selectedItems+=items[i].value+", ";
                }
                //console.log(selectedItems)
                return(selectedItems)
            };


            function toggleGA(source) {
                checkboxes = document.getElementsByName('riskGA');
                for(var i=0, n=checkboxes.length;i<n;i++) {
                  checkboxes[i].checked = source.checked;
                }
            }
            function toggleReg(source) {
                checkboxes = document.getElementsByName('riskReg');
                for(var i=0, n=checkboxes.length;i<n;i++) {
                  checkboxes[i].checked = source.checked;
                }
            }
            function toggleLines(source) {
                checkboxes = document.getElementsByName('risklines');
                for(var i=0, n=checkboxes.length;i<n;i++) {
                  checkboxes[i].checked = source.checked;
                }
            }