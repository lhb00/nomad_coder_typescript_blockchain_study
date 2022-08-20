interface Config {
    url:string
}
declare module "myPackage" {
    function init(config:Config):boolean;
    function exit(code:number):number;
}
// 이 파일에 myPackage와 init을 선언함으로써 index.ts 파일이 myPackage와 init이 무엇인지를 알게 되며 오류가 사라짐.