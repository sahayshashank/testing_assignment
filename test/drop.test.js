import chai from "chai"
import drop from "../src/drop.js"
const expect = chai.expect

describe("drop",()=>{
    it("default test, no n",()=>{
        expect(drop([1,2,3]).length).to.equal(2)
    });
    it("n=2",()=>{
        expect(drop([1,2,3],2).length).to.equal(1)
    });
    it("n=0",()=>{
        expect(drop([1,2,3],0).length).to.equal(3)
    });
    it("empty array",()=>{
        expect(drop([],2).length).to.equal(0)
    });
    it("null value",()=>{
        expect(drop(null,2).length).to.equal(0)
    });
    it("negative n",()=>{
        expect(drop([1,2,3],-1).length).to.equal(3)
    });
})