import crypto from "crypto";
/*import * as crypto from "crypto"; */ //NodeJS 패키지인 crypto 패키지를 불러오기 방법 1
interface BlockShape {
    hash: string; //Hash: 블록의 고유 서명과 같음, 이전 해쉬값, 높이, 데이터를 이용해 계산됨. 
    // 이상하게 생긴 데이터 표시이면서 결정론적임. -> 데이터가 변하지 않으면 해쉬값도 변하지 않음.
    prevHash:string;
    height: number;
    data:string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash:string,
        public height:number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data); // 새로운 블럭을 즉시 해쉬함.
    }
    static calculateHash(prevHash:string, height:number, data:string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha-256").update(toHash).digest("hex");
    }
    //static: 객체 지향 프로그래밍에서 많이 사용됨, 클래스 안에서 사용하는 함수, 클래스 인스턴스가 없어도 부를 수 있는 함수.

}

class BlockChain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length===0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addblock(data:string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data); //새로운 블럭을 생성하면
        this.blocks.push(newBlock);
    } // 새로운 블록을 추가할 시, 블록에 저장하고 싶은 데이터를 보내주어야함.
    public getBlocks() {
        return [...this.blocks];
    }
}

const blockchain = new BlockChain();

blockchain.addblock("First one");
blockchain.addblock("Second one");
blockchain.addblock("Third one");
blockchain.addblock("Fourth one");

/* blockchain.getBlocks().push(new Block("xxxxxx", 11111, "HACKED")); */ // 기존처럼 this.blocks를 반환 시, 이렇게 허위 데이터 마음대로 추가도 가능하다.

console.log(blockchain.getBlocks());