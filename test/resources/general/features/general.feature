Feature: Test Feature 1

  Scenario: Test 1
    Given I open firefox browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
    And I navigate back
    And I refresh page
    And I navigate forward
    Then I switch to new window
    And I switch to previous window
    And I switch to previous window
