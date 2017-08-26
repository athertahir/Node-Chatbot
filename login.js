var builder = require('botbuilder');

module.exports = [
    // USERNAME
    function (session) {
	session.send('Welcome to the PivBot!');
        builder.Prompts.text(session, 'Enter Username');
    },
    function (session, results, next) {
        session.dialogData.username = results.response;
        session.send('Username %s', results.response);
        next();
    },
	 // PASSWORD
    function (session) {
        builder.Prompts.text(session, 'Enter Password');
    },
    function (session, results, next) {
        session.dialogData.password = results.response;
        session.send('Password %s', results.response);
        next();
    },
	function (session) {
	userlogin(session);
    session.endDialog();
    }
]
function userlogin(session) {
		session.privateConversationData['login'] = true;
		session.send('login Successfull');
		session.send('Hi there. I m PivBot, an IT automation and Artificial Intelligence (AI) service provided by Catalyst Technology Group to help you perform a variety of IT tasks. Please choose an area to get started');	
		getMainMenuHeroCard(session);
}
function createMainMenuHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Select your choice')
		.buttons([
            builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot1', 'Accounts Receivable'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot2', 'Customer Service'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot3', 'HR'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot4', 'Marketing'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot5', 'Operations'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot6', 'Sales'),
			builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot7', 'Service')			
        ]);
}
function getMainMenuHeroCard(session) {
		var card = createMainMenuHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}
