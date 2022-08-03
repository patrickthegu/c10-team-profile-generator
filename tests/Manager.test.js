const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Manager object is created', () => {
        const manager = new Manager();
      expect(typeof(manager)).toBe('object');
    });
  
    it('Manager name, id email and office number is stored', () => {
        const testName = 'testName';
        const testId = 'testId';
        const testEmail = 'testEmail'
        const testOffice = 'testOffice';
        const testRole = 'Manager';

        const manager = new Manager(testName, testId, testEmail, testOffice);

      expect(manager.getName()).toBe(testName);
      expect(manager.getId()).toBe(testId);
      expect(manager.getEmail()).toBe(testEmail);
      expect(manager.getOfficeNumber()).toBe(testOffice);
      expect(manager.getRole()).toBe(testRole);
    });
  
  
  });