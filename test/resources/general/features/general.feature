Feature: Test Feature 1

  Scenario: Test 1
    Given I open chrome browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
    And I navigate back
    And I refresh page
    And I navigate forward

  Scenario: Test 2
    Given I open firefox browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
    And I navigate back
    And I refresh page
    And I navigate forward

  Scenario: Test 3
    Given I open chrome browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
    And I navigate back
    And I refresh page
    And I navigate forward

  Scenario: Test 4
    Given I open firefox browser
    When I navigate to youtube.url
    Then I navigate to "http://www.google.com/"
    And I navigate back
    And I refresh page
    And I navigate forward