Feature: Test Feature 1

  Scenario: Test 1
    Given I open chrome browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
#    Then I wait for 2 seconds
    And I navigate back
#    And I wait for 5 seconds
    And I refresh page
#    And I wait for 5 seconds
    And I navigate forward
#    And I wait for 5 seconds