var restify = require('restify');
var builder = require('botbuilder');
var selectedbutton='';
var count =0;
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
selectedbutton = session.message.text;
//session.send("You said: %s", selectedbutton);
    	// Echo back users text
		if(count==0)
		{
			count=count+1;
			session.send('Hi, I am PivBot for Service. Please tell me what you would like me to do.or type "help" at any time to be guided through my options.');		
		}
		if(selectedbutton.indexOf('Bot.Command.NodeBot'))
		{
		var card = createHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
		}
		if(!selectedbutton.indexOf('Bot.Command.NodeBot1'))
		{
		//session.send('You Selected Service Tickets');
		session.send('Available operations are : \n\n \t\t Add Ticket \n\n \t\t Update Ticket \n\n \t\t Open Ticket' );
		}
		else if(!selectedbutton.indexOf('Bot.Command.NodeBot2'))
		{
		session.send('Available operations are : \n\n \t\t Project Status');
		}
		else if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
		{
		session.send('Available operations are : \n\n \t\t Show PC Script \n\n \t\t Windows Patching \n\n \t\t Install Software \n\n \t\t Fix Printing \n\n \t\t Password Issues \n\n \t\t Mobile Email \n\n \t\t Backup Files \n\n \t\t Restore Files \n\n \t\t Slow Internet \n\n \t\t Error On Screen');
		}
		else if(!selectedbutton.indexOf('Bot.Command.NodeBot4'))
		{
		session.send('Currently, No Operations for System Management');
		//session.send('Available operations are : \n\n \t\t Show PC Script \n\n \t\t Windows Patching \n\n \t\t Install Software \n\n \t\t Fix Printing \n\n \t\t Mobile Email \n\n \t\t Backup Files \n\n \t\t Restore Files \n\n \t\t Slow Internet \n\n \t\t Error On Screen');
		}
		else if(!selectedbutton.indexOf('Bot.Command.NodeBot5'))
		{
		session.send('Currently, No Operations for Trouble Shooting');
		//session.send('Available operations are : \n\n \t\t Show PC Script \n\n \t\t Windows Patching \n\n \t\t Install Software \n\n \t\t Fix Printing \n\n \t\t Mobile Email \n\n \t\t Backup Files \n\n \t\t Restore Files \n\n \t\t Slow Internet \n\n \t\t Error On Screen');
		}
		else if(!selectedbutton.indexOf('Bot.Command.NodeBot6'))
		{
		session.send('Currently, No Operations for System Status');
		//session.send('Available operations are : \n\n \t\t Show PC Script \n\n \t\t Windows Patching \n\n \t\t Install Software \n\n \t\t Fix Printing \n\n \t\t Mobile Email \n\n \t\t Backup Files \n\n \t\t Restore Files \n\n \t\t Slow Internet \n\n \t\t Error On Screen');
		}


});
//Create LUIS recognizer that points at our model and add it as the root '/' dialog.
var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/48b85d6c-6e89-4904-a2d6-3d3e73419bd8?subscription-key=c76b19ffad1b4166a4d2c21b64bc1c00&timezoneOffset=0&verbose=true&q=');/*here we use the URL that we copied earlier*/
bot.recognizer(recognizer);

bot.dialog('Add Tickets', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot1'))
	{
    session.send('Inside Add Tickets');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Add Tickets'
});
bot.dialog('Open Tickets', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot1'))
	{
    session.send('Inside Open Tickets');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Open Tickets'
});
bot.dialog('Update Tickets', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot1'))
	{
    session.send('Inside Update Tickets');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Update Tickets'
});
//////////////////////////////////////
bot.dialog('Project Status', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot2'))
	{
    session.send('Inside Project Status');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Project Status'
});
//////////////////////////////////////
bot.dialog('Show PC Script', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Show PC Script');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Show PC Script'
});
bot.dialog('Windows Patching', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Windows Patching');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Windows Patching'
});
bot.dialog('Install Software', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Install Software');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Install Software'
});
bot.dialog('Fix Printing', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Fix Printing');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Fix Printing'
});
bot.dialog('Mobile Email', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Mobile Email');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Mobile Email'
});
bot.dialog('Backup Files', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Backup Files');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Backup Files'
});
bot.dialog('Restore Files', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Restore Files');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Restore Files'
});
bot.dialog('Slow Internet', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Slow Internet');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Slow Internet'
});
bot.dialog('Error On Screen', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.NodeBot3'))
	{
    session.send('Inside Error On Screen');
    session.endDialog();
	}
	else{
			
		}
    }).triggerAction({
    matches: 'Error On Screen'
});
//////////////////////////////////////

bot.dialog('Help', function (session) {
    	// Echo back users text
		session.send("Inside Help");
		session.send("Select your choice from given choices");
		var card = createHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    session.endDialog();
    }).triggerAction({
    matches: 'Help'
});

//////////////////////////////////////

bot.dialog('None', function (session) {
    	// Echo back users text
		session.send("Inside None,, said: %s", session.message.text);
    session.endDialog();
    }).triggerAction({
    matches: 'None'
});

function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Select your choice')
		.buttons([
            builder.CardAction.postBack(session, 'Bot.Command.NodeBot1', 'Service Tickets'),
			builder.CardAction.postBack(session, 'Bot.Command.NodeBot2', 'Project Management'),
			builder.CardAction.postBack(session, 'Bot.Command.NodeBot3', 'IT Task Automation'),
			builder.CardAction.postBack(session, 'Bot.Command.NodeBot4', 'System Management'),
			builder.CardAction.postBack(session, 'Bot.Command.NodeBot5', 'Trouble Shooting'),
			builder.CardAction.postBack(session, 'Bot.Command.NodeBot6', 'System Status')	
        ]);
}