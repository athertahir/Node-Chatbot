var restify = require('restify');
var builder = require('botbuilder');
var dateFormat = require('dateformat');
var selectedbutton='';
var login='login';
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 80, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '9b07c575-eb4c-4ce6-a87a-40dd9054154b',
    appPassword: 'RzwmXKKVuBaftcRoVeKdDM2'
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
selectedbutton = session.message.text;
        //session.send("You said: %s", selectedbutton);
    	// Echo back users text
		//session.send('accounts_receivable is '+session.privateConversationData['accounts_receivable']);
		//session.send('customer_service is '+session.privateConversationData['customer_service']);
		//session.send('hr is '+session.privateConversationData['hr']);
		//session.send('marketing is '+session.privateConversationData['marketing']);
		//session.send('operations is '+session.privateConversationData['operations']);
		//session.send('sales is '+session.privateConversationData['sales']);
		//session.send('service is '+session.privateConversationData['service']);
		//session.send('login is '+session.privateConversationData['login']);
		if (!session.privateConversationData[login]) {
			session.beginDialog('login');

		}
		else
		{
		if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot1'))
		{
		session.send('You Selected Accounts Receivable');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot2'))
		{
		session.send('You Selected Customer Service');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot3'))
		{
		session.send('You Selected HR');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot4'))
		{
		session.send('You Selected Marketing');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot5'))
		{
		session.send('You Selected Operations');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot6'))
		{
		session.send('You Selected Sales');
		}
		else if(!selectedbutton.indexOf('Bot.Command.MainMenu.NodeBot7'))
		{
		createServiceMenuHeroCard(session);
			
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot1'))
		{
		session.send('Available operations are : \n\n \t\t Add Ticket \n\n \t\t Update Ticket \n\n \t\t Open Ticket' );
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot2'))
		{
		session.send('Available operations are : \n\n \t\t Project Status');
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
		{
		session.send('Available operations are : \n\n \t\t Slow PC Script \n\n \t\t Windows Patching \n\n \t\t Install Software \n\n \t\t Fix Printing \n\n \t\t Password Issues \n\n \t\t Mobile Email \n\n \t\t Backup Files \n\n \t\t Restore Files \n\n \t\t Slow Internet \n\n \t\t Error On Screen');
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot4'))
		{
		session.send('Currently, No Operations for System Management');
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot5'))
		{
		session.send('Currently, No Operations for Trouble Shooting');
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot6'))
		{
		session.send('Currently, No Operations for System Status');
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.SlowPC.NodeBot1'))
		{
		var url ='https://kaseya.catalysttg.com/api/v1.0/automation/agentprocs/'+session.privateConversationData['machineId']+'/534887023/schedule';
		session.send(url);
		var json='{"ScriptPrompts":[{"Caption":"machineid","Name":"machineid","Value":"'+session.privateConversationData['machineId']+'"}],"Start":{"StartOn":"'+session.privateConversationData['datetime']+'"}}';
		session.send(json);
		//session.send(JSON.parse(json));
		}
		else if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.SlowPC.NodeBot2'))
		{
		session.send('You Selected \'No\' ');
		}
		}


});
bot.dialog('login', require('./login'));
bot.dialog('getMachineId', require('./getMachineId'));
//Create LUIS recognizer that points at our model and add it as the root '/' dialog.
var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/160cedfd-9a4e-4faa-a991-bf63247dd457?subscription-key=638ee9aeb729407aa09215840a0cae05&verbose=true&timezoneOffset=0&q=');/*here we use the URL that we copied earlier*/
bot.recognizer(recognizer);

bot.dialog('Add Tickets', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot1'))
	{
    session.send('Inside Add Tickets');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Add Tickets'
});
bot.dialog('Open Tickets', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot1'))
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
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot1'))
	{
    session.send('Inside Update Tickets');
    
	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Update Tickets'
});
//////////////////////////////////////
bot.dialog('Project Status', function (session) {

    session.send('Here is your project status');
	var card = new builder.HeroCard(session)
        .title('Project Status')
		.buttons([
            builder.CardAction.openUrl(session, 'https://catalysttg.brightgauge.co/dashboards/28fe1d64-8170-11e7-a4b8-0eedd3689790/', 'Open Browser'),
        ]);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    session.endDialog();
    }).triggerAction({
    matches: 'Project Status'
});
//////////////////////////////////////
bot.dialog('Slow PC Script', function (session,args) {
	if(session.privateConversationData['service'] == true)
	{
   // session.send('Inside Slow PC Script');
	var machinename = builder.EntityRecognizer.findEntity(args.intent.entities, 'machinename');
	if(machinename)
	{
    session.send("MachineName: %s ", machinename.entity);
	session.privateConversationData['machineName'] =machinename.entity;
	}
	else
	session.send('Sorry, I couldn\'t find machinename \n\n \t\t Available options are : \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' now \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' \'ENTER_TIME_HERE\' ' );
	var datetime = builder.EntityRecognizer.findEntity(args.intent.entities,'builtin.datetimeV2.datetime');
	if(datetime)
	{
	//session.send("DateTime: %s ",dateFormat(datetime.resolution.values[0]['value']),"yyyy-MM-dd'T'HH:mm:ss'Z'");
	//session.privateConversationData['datetime'] =datetime.resolution.values[0]['value'];
	//session.send("DateTime: %s ",datetime.resolution.values[0]['value']);
	session.privateConversationData['datetime'] =dateFormat(datetime.resolution.values[0]['value'],"yyyy-mm-dd'T'HH:mm:ss'Z'");
	}
	else
	session.send('Sorry, I couldn\'t find dateTime \n\n \t\t Available options are : \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' now \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' \'ENTER_TIME_HERE\' ' );
    if(machinename && datetime)
	session.beginDialog('getMachineId');
	else
	{
		//session.send('Error : '+machinename && datetime);
	}
	}
	else{
			 session.send('You are not Authorized to access \'Slow PC Script\' ');
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Slow PC Script'
});
bot.dialog('Windows Patching', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Windows Patching');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Windows Patching'
});
bot.dialog('Install Software', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Install Software');
   
	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Install Software'
});
bot.dialog('Fix Printing', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Fix Printing');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Fix Printing'
});
bot.dialog('Mobile Email', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Mobile Email');
    
	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Mobile Email'
});
bot.dialog('Backup Files', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Backup Files');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Backup Files'
});
bot.dialog('Restore Files', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Restore Files');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Restore Files'
});
bot.dialog('Slow Internet', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Slow Internet');

	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Slow Internet'
});
bot.dialog('Error On Screen', function (session) {
	if(!selectedbutton.indexOf('Bot.Command.SubMenu.Service.NodeBot3'))
	{
    session.send('Inside Error On Screen');
    session.endDialog();
	}
	else{
			
		}
	session.endDialog();
    }).triggerAction({
    matches: 'Error On Screen'
});
//////////////////////////////////////

bot.dialog('Help', function (session) {
    	// Echo back users text
		session.send("Inside Help");
		//session.send("Select your choice:");
		var card = createMainMenuHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    session.endDialog();
    }).triggerAction({
    matches: 'Help'
});

//////////////////////////////////////



function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Select your choice')
		.buttons([
            builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot1', 'Service Tickets'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot2', 'Project Management'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot3', 'IT Task Automation'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot4', 'System Management'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot5', 'Trouble Shooting'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.NodeBot6', 'System Status')	
        ]);
}
function createMainMenuHeroCard(session) {
	var but=[];
		if(session.privateConversationData['accounts_receivable'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot1', 'Accounts Receivable'));
		if(session.privateConversationData['customer_service'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot2', 'Customer Service'));
		if(session.privateConversationData['hr'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot3', 'HR'));
		if(session.privateConversationData['marketing'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot4', 'Marketing'));
		if(session.privateConversationData['operations'] == true)
		but.push(builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot5', 'Operations'));
		if(session.privateConversationData['sales'] == true)
		but.push(builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot6', 'Sales'));
		if(session.privateConversationData['service'] == true)
		but.push( builder.CardAction.postBack(session, 'Bot.Command.MainMenu.NodeBot7', 'Service'));		
	var card;
    card= new builder.HeroCard(session)
        .title('Select your choice')
		.buttons(but);
		return card;
}
function createServiceMenuHeroCard(session) {
		session.send('Hi, I am PivBot for Service. Please tell me what you would like me to do.or type "help" at any time to be guided through my options.');		
		var card = createHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}
function getMainMenuHeroCard(session) {
		var card = createMainMenuHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}

