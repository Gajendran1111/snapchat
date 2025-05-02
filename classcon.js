//  class constuctor

class cod {
    constructor(model,amo,scope,type,skin) {

        this.model=model;
        this.amo=amo;
        this.scope=scope;
        this.type=type;
        this. skin=skin;
        
    }
    output (){console.log(`I need ${this.model} gun \n Fix ${this.amo} amo\n Magnification ${this.scope} scope\n I like ${this.type} fire\n I like ${this.skin} skin`)}
}

const callofduty = new cod("M416","7MM","2X","AUTOMATIC","CAMAFLOUGH");
callofduty.output();