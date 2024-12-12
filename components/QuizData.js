export const quizdata =[
    {
        "question": "Which Selenium WebDriver method would you use to switch control from the current window to a different window?",
        "options": [
            "getWindowHandles",
            "switchToFrame",
            "getWindowHandle",
            "switchToWindow"
        ],
        "correct": "switchToWindow"
    },
    {
        "question": "What must a developer do before initiating the target element inside nested iframes?",
        "options": [
            "Switch to default frame",
            "Switch to parent frame",
            "Initiate switch to target frame",
            "Nested frames not supported"
        ],
        "correct": "Switch to parent frame"
    },
    {
        "question": "How can a Selenium developer accept a popup message thrown by in-page JavaScript?",
        "options": [
            "Initiate alert object and accept it",
            "Initiate accept with code snippet",
            "Initiate reject with code snippet",
            "Find alert element and close it"
        ],
        "correct": "Initiate accept with code snippet"
    },
    {
        "question": "How can a tester avoid an exception if an assert fails?",
        "options": [
            "Use hard assert",
            "Use soft assert",
            "Use try-catch",
            "Both soft and hard assert"
        ],
        "correct": "Use soft assert"
    },
    {
        "question": "Which method from Selenium WebDriver waits for a specific element to become visible?",
        "options": [
            "findElement",
            "waitUntilVisible",
            "implicitWait",
            "explicitWait"
        ],
        "correct": "explicitWait"
    },
    {
        "question": "After switching to a frame, what must be done before working with an element on the base page outside the frame?",
        "options": [
            "Close the frame driver and initiate the driver again",
            "Quit the original driver and initiate the frame element",
            "Switch back to default content",
            "Include the base body tag in the XPath"
        ],
        "correct": "Switch back to default content"
    },
    {
        "question": "How can a Selenium developer select a dropdown element that is not accepting values through sendKeys?",
        "options": [
            "Convert the dropdown element and select by visible text",
            "Convert the dropdown element and select by value",
            "Use driver.findElement"
        ],
        "correct": "Convert the dropdown element and select by visible text"
    },
    {
        "question": "What is the correct XPath to locate an element with a unique data-testid='login-button'?",
        "options": [
            "//button[@data-testid='login-button']",
            "//button[data-testid='login-button']",
            "//button[contains(@data-testid,'login-button')]",
            "//button[contains(text(),'login-button')]"
        ],
        "correct": "//button[@data-testid='login-button']"
    },
    {
        "question": "What design pattern in Selenium is responsible for finding WebElements and performing operations on them?",
        "options": [
            "WOP (Web Object Pattern)",
            "POM (Page Object Model)",
            "PDM (Page Design Model)",
            "DOM (Document Object Model)"
        ],
        "correct": "POM (Page Object Model)"
    },
    {
        "question": "To use the Gecko driver for Firefox versions starting with 48.x, what property needs to be set?",
        "options": [
            "Set marionette to true",
            "Set marionette to false",
            "Set Firefox Profile to Legacy"
        ],
        "correct": "Set marionette to true"
    }
]