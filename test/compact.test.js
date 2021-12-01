import chai from "chai"
import compact from "../src/compact.js"
const expect = chai.expect

describe("compact",()=>{
    
    it("with 2 false data",()=>{
        expect(compact([0, 1, false, 2, '', 3])).to.equal([1, 2, 3])
    });
    it("with no false data",()=>{
        expect(compact([2, 1])).to.equal([2, 1])
    });
    it("with only false data",()=>{
        expect(compact([false,null,0, "", undefined,NaN])).to.equal([])
    });
})