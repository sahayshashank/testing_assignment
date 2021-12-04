import chai from "chai"
import isBoolean from "../src/isBoolean.js"
const expect = chai.expect

describe("isBoolean",()=>{
    it("checks to see if true is boolean",()=>{
        expect(isBoolean(true)).to.equal(true)
    });
    it("checks to see if false is boolean",()=>{
        expect(isBoolean(false)).to.equal(true)
    });
    it("checks to see if 1 is boolean",()=>{
        expect(isBoolean(1)).to.equal(false)
    });
    it("checks to see if 'test' is boolean",()=>{
        expect(isBoolean("test")).to.equal(false)
    });
    it("checks to see if null is boolean",()=>{
        expect(isBoolean(null)).to.equal(false)
    });
    it("checks to see if array is boolean",()=>{
        expect(isBoolean([1, 2, 3])).to.equal(false)
    });
})