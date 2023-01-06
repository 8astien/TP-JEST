function testHealtcheck(url) {
	return fetch(url).then((response) => {
		expect(response.status).toBe(200);
        expect(response.status).toBeLessThan(400);
	});
}
test("Statut 200 : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});

