const { Turnstile } = require('../turnstile/Turnstile');
const { Ticket } = require('../ticket/Ticket');

test('Create Turnstile', () => {
    const turnstile = new Turnstile();
    expect(turnstile.id).toBe(0);
    expect(turnstile.isOut).toBe(false);
    expect(turnstile.checkTicket(1)).toBe(false);
    expect(turnstile.checkTicket(123)).toBe(false);
});

test('Check Ticket', () => {
    const turnstile = new Turnstile();
    const ticketOne = new Ticket('adult', 1);
    const ticketTwo = new Ticket('child', 2);
    ticketOne.save();
    ticketTwo.save();
    expect(turnstile.checkTicket(ticketOne.id)).toBe(true);
    expect(turnstile.checkTicket(ticketTwo.id)).toBe(true);
    expect(turnstile.checkTicket(123)).toBe(false);
});