const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Employee object is created', () => {
        const employee = new Employee();
      expect(typeof(employee)).toBe('object');
    });
  
    it('Employee name, id and email is stored', () => {
        const testName = 'testName';
        const testId = 'testId';
        const testEmail = 'testEmail'
        const testRole = 'unassigned'

        const employee = new Employee(testName, testId, testEmail);
      expect(employee.getName()).toBe(testName);
      expect(employee.getId()).toBe(testId);
      expect(employee.getEmail()).toBe(testEmail);
      expect(employee.getRole()).toBe(testRole);
    });
  
  
  });