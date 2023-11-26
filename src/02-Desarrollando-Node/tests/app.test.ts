describe('Test in the App File', () => {
    test('should be true', () => {
        // Arrange
        const num1 = 10;
        const num2 = 20;
        // Act

        const sum = num1 + num2;

        // Assert
        expect(sum).toBe(30);
    });
});