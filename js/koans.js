context = describe;

describe("replaces camuflated emails with normalized emails", function(){

  describe("the application", function(){
    it("receives text without an email and returns the text unchanged", function() {
      expect(normalizeCamuflatedEmails("string")).toBe("string");
    });

    it("Finds Camuflated Email and transforms it", function() {
      expect(normalizeCamuflatedEmails("catburston-AT-gmail.com")).toBe("catburston@gmail.com");
      expect(normalizeCamuflatedEmails("catburston(AT)gmail.com")).toBe("catburston@gmail.com");
      expect(normalizeCamuflatedEmails("catburston*AT*gmail.com")).toBe("catburston@gmail.com")
    });

    it("Finds something tha looks like an email, but its not and does not transform it", function() {
      expect(normalizeCamuflatedEmails("catburston -AT-gmail.com")).toBe("catburston -AT-gmail.com");
      expect(normalizeCamuflatedEmails("catburston (AT)gmail.com")).toBe("catburston (AT)gmail.com");
      expect(normalizeCamuflatedEmails("catburston-AT-gmail")).toBe("catburston-AT-gmail");
    });


  })
});