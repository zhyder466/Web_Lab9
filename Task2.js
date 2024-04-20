function generateInvitations(guests, ...additionalDetails) {
    return guests.map(guest => {
        let invitation = `Dear ${guest.name},\n`;
        invitation += `You are cordially invited to our party!\n`;
        invitation += `Additional Details: ${additionalDetails.join(', ')}\n`;
        invitation += `Please respond at your earliest convenience.\n\n`;
        return invitation;
    });
}

const guests = [
    { name: "Ahsan", age: 23 },
    { name: "Amjad", age: 24 },
    { name: "Vrohi", age: 24 }
];

const invitations = generateInvitations(guests, "Party on Saturday at 12:00 pm", "Please bring enough money with you, otherwise, you won't be welcomed!");

invitations.forEach(invitation => {
    console.log(invitation);
});
