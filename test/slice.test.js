import chai from "chai"
import slice from "../src/slice.js"
const expect = chai.expect

var array = [1, 2, 3, 4]

describe("slice",()=>{
    it("return slice; start = 0, end = 2",()=>{
        expect(slice(array,0,2).length).to.equal(2)
    });
    it("return slice if array is null; start = 0, end = 2",()=>{
        expect(slice(null,0,2).length).to.equal(0)
    });
    it("return slice if array is empty; start = 0, end = 2",()=>{
        expect(slice([],0,2).length).to.equal(0)
    });
    it("return slice; start = -5, end = 2",()=>{
        expect(slice(array,-5,2).length).to.equal(2)
    });
    it("return slice; start = -3, end = 2",()=>{
        expect(slice(array,-3,2).length).to.equal(1)
    });
    it("return slice; start = 1, end = -2",()=>{
        expect(slice(array,1,-2).length).to.equal(1)
    });
    it("return slice; start = null, end = 2",()=>{
        expect(slice(array,null,2).length).to.equal(2)
    });
    it("return slice; start = 1,end is undefined",()=>{
        expect(slice(array,1).length).to.equal(3)
    });
    it("return slice; start = 2,end =1",()=>{
        expect(slice(array,2,1).length).to.equal(0)
    });
})