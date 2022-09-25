type Words = {
    [key:string]:string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(term:string, def:string) {
        if (this.words[term] === undefined){
            this.words[term]=def;
        }
    }
    get(term:string) {
        return this.words[term];
    }
    delete(term:string) {
        if (this.words[term]!== undefined){
            delete this.words[term];
        }
    }
    update(term:string, def:string) {
        if (this.words[term] !== undefined){
            this.words[term]=def;
        }
    }
    showAll(){
        let dictArray = Object.keys(this.words);
        for(let i=0;i<dictArray.length;i++) {
            let meaning = this.words[dictArray[i]];
            console.log(dictArray[i],":", meaning);
        }
    }

    count(){
        let dictArray = Object.keys(this.words);
        return dictArray.length;
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const dict = new Dict();
