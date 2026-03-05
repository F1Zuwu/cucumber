Feature: Rippmenüü valik
  Kasutajana soovin valida rippmenüüst väärtuse,
  et kontrollida vormi elementide toimimist.

  Scenario: Rippmenüüst valiku tegemine - Valik 1
    Given ma avan rippmenüü lehe
    When ma valin rippmenüüst "Option 1"
    Then rippmenüü valitud väärtus on "1"

  Scenario: Rippmenüüst valiku tegemine - Valik 2
    Given ma avan rippmenüü lehe
    When ma valin rippmenüüst "Option 2"
    Then rippmenüü valitud väärtus on "2"
