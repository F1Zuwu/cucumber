Feature: Sisselogimise funktsionaalsus
  Kasutajana soovin sisse logida, et pääseda turvalisse alasse.
  Testime sisselogimist õigete ja valede andmetega.

  Scenario: Edukas sisselogimine õigete andmetega
    Given ma avan sisselogimise lehe
    When ma sisestan kasutajanime "tomsmith" ja parooli "SuperSecretPassword!"
    And ma vajutan sisselogimise nuppu
    Then ma näen eduka sisselogimise teadet
    And leht sisaldab "Secure Area" pealkirja

  Scenario: Ebaõnnestunud sisselogimine valede andmetega
    Given ma avan sisselogimise lehe
    When ma sisestan kasutajanime "vale_kasutaja" ja parooli "vale_parool"
    And ma vajutan sisselogimise nuppu
    Then ma näen veateadet sisselogimise ebaõnnestumise kohta
