const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Engineer object is created', () => {
        const engineer = new Engineer();
      expect(typeof(engineer)).toBe('object');
    });
  
    it('Engineer name, id, email and Github is stored', () => {
        const testName = 'testName';
        const testId = 'testId';
        const testEmail = 'testEmail'
        const testGithub = 'testGithub';
        const testRole = 'Engineer';

        const engineer = new Engineer(testName, testId, testEmail, testGithub);

      expect(engineer.getName()).toBe(testName);
      expect(engineer.getId()).toBe(testId);
      expect(engineer.getEmail()).toBe(testEmail);
      expect(engineer.getGithub()).toBe(testGithub);
      expect(engineer.getRole()).toBe(testRole);
    });
  
  
  });


