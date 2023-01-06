function testPost(token) {
	return fetch("https://api-test-jest.up.railway.app/test-post", { 
        method: "POST",
        headers: {
            'token': token
          } 
    });
}
test("Token : Request fullfiled", async () => {
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    const data = await testPost(token);
	expect(data.status).toBe(200);
});


function testPost2(token) {
	return fetch("https://api-test-jest.up.railway.app/test-post", { 
        method: "POST",
        headers: {
            'token': token
          } 
    }).then((response) => response.json());
}

test("Token : Request fullfiled", async () => {
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    const data = await testPost2(token);
    expect(data.length).toBeLessThanOrEqual(4)
	expect(data[data.length - 1]).toBe(2008);
});