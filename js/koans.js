context = describe;

describe("replaces camuflated emails with normalized emails", function(){

  describe("the transformer function", function(){
    it("receives a string and returns the string", function() {
      expect(transformer("string")).toBe("string");
    });

    it("Finds Camuflated Email and transforms it", function() {
      expect(transformer("catburston-AT-gmail.com")).toBe("catburston@gmail.com");
    });
    it("Finds word and does not transform it", function() {
      expect(transformer("catburston-AT-gmail")).toBe("catburston-AT-gmail");
    });
    it("Finds something tha looks like an email, but its not and does not transform it", function() {
      expect(transformer("catburston -AT-gmail.com")).toBe("catburston -AT-gmail.com");
    });


  })
});