Feature: Märkeruutude haldamine
  Kasutajana soovin hallata märkeruute, et muuta seadeid lehel.
  Testime märkeruutude sisse- ja väljalülitamist.

  Scenario: Märkeruutude oleku muutmine
    Given ma avan märkeruutude lehe
    Then leht sisaldab kahte märkeruutu
    When ma klõpsan esimesel märkeruudul
    Then esimene märkeruut on märgitud
    When ma klõpsan teisel märkeruudul
    Then teine märkeruut ei ole märgitud
