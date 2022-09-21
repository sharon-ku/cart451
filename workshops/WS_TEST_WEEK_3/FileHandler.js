class FileHandler{
    constructor(fileName){
        // pass the file name in the constructor
        this.fileContainer = fileName;
    }
 
    appendTextSync(textToAppend){
     fs.appendFileSync(this.fileContainer, textToAppend);
    }
 
    writeTextSync(texttoOverWrite){
        fs.writeFileSync(this.fileContainer, texttoOverWrite);
    }
 
}