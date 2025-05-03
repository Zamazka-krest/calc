let panel = document.getElementById("main");
let panel2 = document.getElementById("second");
let num = '';
let panelText = panel.value;
let sqrtIndex = 0;
let degreeIndex = 0;
let base = '';
function delet(){
    if (panel!=null){
        panel.value = 0;
        panel2.value = 0;
        panelText = '';
        base = '';
        sqrtIndex = 0;
        degreeIndex = 0;
    }
}
function insert(num){
    //Degree set
    if(degreeIndex === 1){
        if (['/','+','-','*'].includes(num)){
            panelText+=')'+num ;
            panel.value= panelText;
            degreeIndex = 0;
        }else{
            panelText+=num;
            panel.value= panelText;
        } 
        panel2.value +=num;
    //the square root code      
    }else if(sqrtIndex === 1){
        if (['/','+','-','*'].includes(num)){
            panelText+=')'+num ;
            panel.value= panelText;
            sqrtIndex = 0;
        }else{
            panelText+=num;
            panel.value= panelText;
        }
        panel2.value +=num;
    //basic numbers code and base-making for degree
    }else{
        if (['/','+','-','*'].includes(num)){
            base ='';
        }else{
            base+=num;
        }
        panelText+=num;
        if (panel2.value==="0"){
            panel2.value='';
        }
        panel2.value +=num;
        panel.value= panelText;
    }
}
function degree(){
    panelText=panelText.replace(base,'')
    panelText+= `Math.pow(${base}, `
    panel.value= panelText; 
    degreeIndex = 1;
    panel2.value +="^"
}
function sqrt(){
    panelText+= `Math.sqrt(`
    panel.value= panelText;
    sqrtIndex = 1;
    if (panel2.value==="0"){
        panel2.value='';
    }
    panel2.value +="√"
}
function calculateResult() {
    if(sqrtIndex === 1 || degreeIndex === 1 ){
        panel.value+=')'
    }
    const input = document.getElementById("main").value;
    
    try {
        const result = eval(input);
        panel.value = result;
        panel2.value =result;
        panelText = result;
    } catch (error) {
        alert("Ошибка в выражении");
        delet();
    }
}
