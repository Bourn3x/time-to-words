const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles times before 30 mins - 5:15", () => {
    const timeInWords = convertTimeToWords("5:15");
    expect(timeInWords).toBe("quarter past five");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles 12:30", () => {
    const timeInWords = convertTimeToWords("12:30");
    expect(timeInWords).toBe("half past twelve");
  });

  it("Handles 12:45", () => {
    const timeInWords = convertTimeToWords("12:45");
    expect(timeInWords).toBe("quarter to one");
  });

  it("Handles 12:51", () => {
    const timeInWords = convertTimeToWords("12:51");
    expect(timeInWords).toBe("nine to one");
  });
});
