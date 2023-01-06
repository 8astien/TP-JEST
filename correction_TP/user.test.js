function testUser() {
	return fetch("https://api-test-jest.up.railway.app/test-user", {
		method: "GET",
	}).then((response) => response.json());
}



for (let index = 0; index < 1; index++) {
    
	test("PREMIERE SERIE : ID NOM PRENOM", async () => {
        const data = await testUser();
		expect(data.id).toBeGreaterThan(100);
		expect(data.firstName).toBeDefined;
		expect(data.lastName).toBeDefined;
	});
	test("DEUXIEME SERIE : EMAIL", async () => {
        const data = await testUser();
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (regex.test(data.email) === false) {
			console.log("Faulty Email " + data.email);
		}
		expect(regex.test(data.email)).toBe(true);
	});
    test("TROISIEME SERIE : DATE", async () => {
        const data = await testUser();
        const date = new Date('2020-01-01');
        const registeredAt = new Date(data.registeredAt);
        // Ci-dessous, on utilise la méthode getTime de l'objet Date pour obtenir le nombre de millisecondes écoulées depuis le 1er janvier 1970 (Unix Time Stamp). 
        //La méthode isNaN de JavaScript est alors utilisée pour vérifier si cette valeur est un nombre. 
        //Si c'est le cas, cela signifie que la date est valide et le test réussira. 
        //Sinon, cela signifie que la date est "Invalid Date" et le test échouera.
        expect(isNaN(registeredAt.getTime())).toBe(false);
		expect(registeredAt > date).toBe(true);   
	});
}
