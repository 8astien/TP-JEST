function testGet() {
	return fetch('https://api-test-jest.up.railway.app/test-get', {
        method: 'GET'
    })
    .then(response => response.json())	
	}


test('Test de data', async () => {
    const data = await testGet()
    expect(data.brand).toBe("Ford")
    expect(data.model).toContain("Mustang")
    expect(data.year).toEqual(1969)
});
