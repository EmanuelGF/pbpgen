

function run(){

    //Getting values from form
    const formData = {
        targetInfo: document.getElementById("target-info").value
    }  

    const result =  process(formData);
    
    document.getElementById("result").innerHTML = result.join(" <br />")
    
    
}

function process(formData){
    document.getElementById("log").innerHTML = "";
    let log = "<br /> Started the creation process...<br />"

    console.log("Creating wordList. <br />")  
    const firstPass = wordGenerator(formData.targetInfo)

    console.log("Running second pass. <br />")   
    console.log("Removing dupicates. <br />")   
    const result = duplicationRemover(wordGenerator(firstPass))     
    
    log +=  "Finishing. <br />"
    document.getElementById("word-count").innerHTML = result.length + " words created.";

    console.log("Done")
    document.getElementById("log").innerHTML +=  log +"Done."


    return result;

}

function wordGenerator(wordList) {
    const tinfo = wordList.toString().split(",");
    let result = [];

    for (let el = 0; el < tinfo.length; el++) { //element inside tinfo
        for (let otherEl = 0; otherEl < tinfo.length; otherEl++) {
            let joined = ""
            for (let index = 0; index < tinfo[otherEl].length; index++) {
                if ((tinfo[el] + joined).length <= 20 && (tinfo[el] + joined).length >= 4) {
                    result.push(tinfo[el] + joined)
                } 
                 
                joined += tinfo[otherEl][index]
            }
        }
        
    }
    
    return result;
}

function duplicationRemover(wordList) {
    return wordList.filter(function(item, pos) {
        return wordList.indexOf(item) == pos;
    })
}