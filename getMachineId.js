var builder = require('botbuilder');

module.exports = [
	function (session) 
   { 
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var i=0;
// Create connection to database
var config = 
   {
     userName: 'admin123', // update me
     password: 'pivBot123', // update me
     server: 'userrolesdb.database.windows.net', // update me
     options: 
        {
           database: 'userrolesdb' //update me
           , encrypt: true
        }
   }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err);
       }
    else
       {
          console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
            "select machineId from machineid where machineName='"+session.privateConversationData['machineName']+"'",
		
			function(err, rowCount, rows) 
                {
					console.log("select machineId from machineid where machineName='"+session.privateConversationData['machineName']+"'");
					//session.send('Wait Over');
					if(rowCount>0)
						showSlowPcConfirmationCard(session);
					else
						session.send('Sorry, I couldn\'t find machineId with this machinename \n\n \t\t Available options are : \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' now \n\n \t\t Run slow pc optimization script on \'MACHINE_NAME\' \'ENTER_TIME_HERE\' ' );
					session.endDialog();
                    console.log(rowCount + ' row(s) returned');
                }
            );
     request.on('row', function(columns) {
        columns.forEach(function(column) {	
			//session.privateConversationData['machineId']=column.value;
			session.privateConversationData['machineIdfound']=true;
			session.privateConversationData['machineId']=column.value;
			//session.send(column.metadata.colName+' ---- '+column.value);
            console.log('columns  '  + columns.rowCount);
			
         });
             });
    connection.execSql(request);
       }
   }
 );
   	
   }
];
function showSlowPcConfirmationCard(session) {
        var card= new builder.HeroCard(session)
		.title('Confirm!')
        .subtitle('"Please confirm you want to run Slow PC Script, 90003939, on machine with ID='+session.privateConversationData['machineId']+' at '+session.privateConversationData['datetime'])
		.buttons([
            builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.SlowPC.NodeBot1', 'Yes'),
			builder.CardAction.postBack(session, 'Bot.Command.SubMenu.Service.SlowPC.NodeBot2', 'No')
        ]);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
}
