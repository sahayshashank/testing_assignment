import chai from "chai"
import defaultTo from "../src/defaultTo.js"
const expect = chai.expect
describe("defaultTo",()=>{
    it("defaults null to false",()=>{
        expect(defaultTo(null,false)).to.equal(false)
    });
    it("defaults undefined to a number",()=>{
        expect(defaultTo(undefined,420)).to.equal(420)
    });
    it("defaults NaN to a string",()=>{
        expect(defaultTo(NaN,"strr")).to.equal("strr")
    });
    it("no need to default",()=>{
        expect(defaultTo(1,"test")).to.equal(1)
    });
})