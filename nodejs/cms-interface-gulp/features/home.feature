Feature: Teste open page
  I will test the open page of cms-interface

  Scenario: Try open the initial page
    Given the initial page
    And I have de content table in body
    Then I should have text "Interface do CMS" on page