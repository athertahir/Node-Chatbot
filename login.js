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
		session.privateConversationData['signing']=true;
		session.send('login Successfull');
}