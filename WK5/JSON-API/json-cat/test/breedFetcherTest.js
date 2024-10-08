const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "Siberian: The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });

  it("returns 'Sorry, I haven't got anything to share about that kind of cat!' for breeds it can't find", (done) => {
    fetchBreedDescription("Dog", (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "Sorry, I haven't got anything to share about that kind of cat!";
      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });
});