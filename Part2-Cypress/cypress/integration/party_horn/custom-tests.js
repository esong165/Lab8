describe('Party Horn Tests', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
	});

	it('First Test', () => {
		expect(true).to.equal(true);
	});

	it('Slider changes when volume input changes', () => {
		cy.get('#volume-number').clear().type('75');
		cy.get('#volume-slider').then($el => { expect($el).to.have.value(75); });
	});

	it('Volume input changes when slider changes', () => {
		cy.get('#volume-slider').invoke('val', 33).trigger('input');
		cy.get('#volume-number').then($el => { expect($el).to.have.value(33); });
	});

	it('Audio element volume changes when slider changes', () => {
		cy.get('#volume-slider').invoke('val', 33).trigger('input');
		cy.get('#horn-sound').then($el => { expect($el).to.have.prop('volume', 0.33); });
	});

	it('Image and sound sources change when party horn radio button selected', () => {
		cy.get('#radio-party-horn').click();
		cy.get('#sound-image').then($el => { expect($el).to.have.attr('src', './assets/media/images/party-horn.svg'); });
		cy.get('#horn-sound').then($el => { expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3'); });
	});

	it('Volume image changes when increasing volume (3 cases)', () => {
		cy.get('#volume-number').clear().type('0');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg'); });
		cy.get('#volume-number').clear().type('1');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg'); });
		cy.get('#volume-number').clear().type('33');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg'); });
		cy.get('#volume-number').clear().type('34');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg'); });
		cy.get('#volume-number').clear().type('66');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg'); });
		cy.get('#volume-number').clear().type('67');
		cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg'); });
	});

	it('Honk button disabled when textbox is empty or invalid number', () => {
		cy.get('#volume-number').clear();
		cy.get('#honk-btn').then($el => { expect($el).to.have.attr('disabled'); });
		cy.get('#volume-number').type('e');
		cy.get('#honk-btn').then($el => { expect($el).to.have.attr('disabled'); });
	});
	it('Error shown when volume textbox input is number outside given range', () => {
		cy.get('#volume-number').clear().type('-5');
		cy.get('#honk-btn').click();
		cy.get('input:invalid').then($el => { expect($el[0].validationMessage).to.equal('Value must be greater than or equal to 0.'); });
		cy.get('#volume-number').clear().type('105');
		cy.get('#honk-btn').click();
		cy.get('input:invalid').then($el => { expect($el[0].validationMessage).to.equal('Value must be less than or equal to 100.'); });
	});
});
