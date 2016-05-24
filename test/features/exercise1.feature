Feature: ng-repeat and $index, $event, $log

  Scenario: On application start
    When I browse to the "/"
    Then I should see "Good news!" in "goodNewsText"
    And I should see "ABC" in "abcLabel"
    And I should see "CDE" in "cdeLabel"
    And I enter "Kolokwium" into "input" field
