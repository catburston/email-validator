
describe("The email parser", function(){
  it("receives text without an email and returns the text unchanged", function() {
    expect(normalizeCamouflagedEmails("string")).toBe("string");
  });

  it("finds camouflaged Email and transforms it", function() {
    expect(normalizeCamouflagedEmails("catburston-AT-gmail.com")).toBe("catburston@gmail.com");
    expect(normalizeCamouflagedEmails("catburston(AT)gmail.com")).toBe("catburston@gmail.com");
    expect(normalizeCamouflagedEmails("catburston*AT*gmail.com")).toBe("catburston@gmail.com")
  });

  it("finds something that looks like an email, but is not and does not transform it", function() {
    expect(normalizeCamouflagedEmails("catburston -AT-gmail.com")).toBe("catburston -AT-gmail.com");
    expect(normalizeCamouflagedEmails("catburston (AT)gmail.com")).toBe("catburston (AT)gmail.com");
    expect(normalizeCamouflagedEmails("catburston-AT-gmail")).toBe("catburston-AT-gmail");
    expect(normalizeCamouflagedEmails("catburston *AT*gmail")).toBe("catburston *AT*gmail");
  });

})