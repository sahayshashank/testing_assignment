import chai from "chai"
import upperFirst from "../src/upperFirst.js"
const expect = chai.expect

describe("upperFirst",()=>{
    it("converts first character to upper case",()=>{
        expect(upperFirst("testing")).to.equal("Testing")
    });
})