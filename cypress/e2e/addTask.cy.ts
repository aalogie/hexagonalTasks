describe('Add Task Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('allows users to add a new task', () => {
        cy.get('#taskname').type('test-task');
        cy.get('#taskbutton').click();
        // cy.get('#tasklist').expect(list.length)
    });

    it('does NOT allow users to add an empty task', () => {
        cy.get('#taskname').type(' ');
        cy.get('#taskbutton').click();
    });
});