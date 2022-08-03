const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Intern object is created', () => {
        const intern = new Intern();
      expect(typeof(intern)).toBe('object');
    });
  
    it('Intern name, id and email is stored', () => {
        const testName = 'testName';
        const testId = 'testId';
        const testEmail = 'testEmail'
        const testSchool = 'testSchool';
        const testRole = 'Intern';

        const intern = new Intern(testName, testId, testEmail, testSchool);

      expect(intern.getName()).toBe(testName);
      expect(intern.getId()).toBe(testId);
      expect(intern.getEmail()).toBe(testEmail);
      expect(intern.getSchool()).toBe(testSchool);
      expect(intern.getRole()).toBe(testRole);
    });
  
  
  });

