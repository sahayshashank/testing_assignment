import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect

describe("words",()=>{
    it("return array of words in a string",()=>{
        expect(words('fred, barney, & pebbles').length).to.equal(3)
    });
    it("return array of words in a string with defined pattern",()=>{
        expect(words('fred, barney, & pebbles', /[^, ]+/g).length).to.equal(4)
    });
    it("return array of words in an empty string",()=>{
        expect(words('').length).to.equal(0)
    });
    it("return array of words in an empty string",()=>{
        expect(words('').length).to.equal(0)
    });
    it("return array of words in a string with defined pattern",()=>{
        expect(words('', /[^, ]+/g).length).to.equal(0)
    });
})