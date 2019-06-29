function telephoneCheck(str) {
  // Good luck!
  const myRegex = /^((1\s?)?((\d{3}(\s|-)?)|(\(\d{3}\)\s?)))\d{3}(\s|-)?\d{4}$/;
  console.log(myRegex.test(str), str);
  const result = myRegex.test(str);
  return result;
}

telephoneCheck("555-555-5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("8oo-six427676;laskdjf");

//diff soluiton /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
