// @ts-check // 자바스크립트 파일에서 타입스크립트처럼 실수를 방지할 수 있게 해줌
/**
 * Initalizes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config){
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code + 1;
}