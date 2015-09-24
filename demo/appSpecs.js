(function() {
  "use strict";

  // SetupTestData class to set all our default mock data
  var SetupTestData = (function() {
    function SetupTestData() {}
    SetupTestData.expectedTitle = "Starter Angular Component Demo";
    SetupTestData.expectedContractedText = "12345 abcde ... [+] show more";
    SetupTestData.expectedExpandedText = "12345 abcde 67890 [-] show less";
    SetupTestData.initialCounter = "10";
    return SetupTestData;
  })();

  /* *************************
   * Protractor Documentation:
   * http://angular.github.io/protractor/#/tutorial
   * https://github.com/angular/protractor/blob/master/docs/debugging.md
   * to debug use browser.pause(); and from the terminal use 'repl'
   */
  describe("DemoApp", function() {
    beforeEach(function() {
      browser.get("http://127.0.0.1:5000");
      browser.waitForAngular();
    });


    it("should have the expected title", function() {
      expect(browser.getTitle()).toBe(SetupTestData.expectedTitle);
    });

    it("should have a working show-more-or-less component", function() {
      var showMoreOrLessElement = element.all(by.css(".showMoreOrLess")).get(0),
          showMoreOrLessAnchorElement =   element.all(by.css(".showMoreOrLess a")).get(0);
      // test the initial state is contracted
      expect(showMoreOrLessElement.getText()).toBe(SetupTestData.expectedContractedText);
      showMoreOrLessAnchorElement.click(); // trigger expand
      expect(showMoreOrLessElement.getText()).toBe(SetupTestData.expectedExpandedText);
      showMoreOrLessAnchorElement.click(); // trigger contract
      expect(showMoreOrLessElement.getText()).toBe(SetupTestData.expectedContractedText);
    });

    it("should test the clicks of first button", function() {

      var firstButtonElement = element.all(by.css(".btn")).get(0);
      expect(firstButtonElement.getText()).toBe(SetupTestData.initialCounter);
      firstButtonElement.click();
      expect(firstButtonElement.getText()).toBe((parseInt(SetupTestData.initialCounter) + 1).toString());

    });

    it("should test all buttons have the save value", function() {

      var buttonValues = new Array();
      buttonValues.push(1);
      var buttons = element.all(by.css(".btn"));
      for(var x = 0; x < buttons.count(); x++){
        buttonValues.push(buttons.get(x).getText());
      }
      expect(buttonValues.length).toBe(4);
      //expect(buttonValues).toBe([10,10,10,10]);

    });



  });


})();
