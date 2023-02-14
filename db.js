const {Sequelize} = require("sequelize");

module.exports = new Sequelize(
	'jsTest',
	'doadmin',
	'AVNS_vEgY7mWLXd6lEG8rTA1',
	 {
	   host: 'jstest-bot-do-user-13571195-0.b.db.ondigitalocean.com',
	   port: '25061',
	   dialect: 'postgres',
	   dialectOptions: {
		   ssl: {
			 require: true,
			 rejectUnauthorized: false
		   }
	   }
	 }
)