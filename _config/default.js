'use strict';

module.exports = {

	base_url: process.env.ALBA_URL || "http://local.mcmxiv.com",

	port: process.env.ALBA_PORT || "1879",

	// "redis": {
	// 	"host": process.env.REDIS_HOST || "127.0.0.1",
	// 	"port": process.env.REDIS_PORT || "6379",
	// 	"db": process.env.REDIS_DB || 3,
	// 	"prefix": process.env.REDIS_PREFIX || "db1-",
	// 	"ttl": process.env.REDIS_TTL || 302400
	// },

	// "beanstalk": {
	// 	"host": process.env.BEANSTALK_HOST || "127.0.0.1",
	// 	"port": process.env.BEANSTALK_PORT || "11300"
	// },

	// "mysql": {
	// 	"host": process.env.DB_HOST || "localhost",
	// 	"name": process.env.DB_NAME || "hq2",
	// 	"username": process.env.DB_USER || "root",
	// 	"password": process.env.DB_PASSWORD || "dev",
	// 	"pool": {
	// 		"max": 10,
	// 		"min": 0,
	// 		"idle": 20000,
	// 		"acquire": 20000
	// 	},
	// 	"dialect": "mysql",
	// 	"dialectOptions": {
	// 		"socketPath": null
	// 	},
	// 	"timezone": "+07:00",
	// 	"time_zone": "American/Edmonton",
	// 	"logging": process.env.DB_LOGGING || null
	// },

	"pg": {		// DATABASE
		"host": process.env.PG_HOST || "localhost",
		"database": process.env.PG_DATABASE || "alba3",
		"username": process.env.PG_USER || "postgres",
		"password": process.env.PG_PASSWORD || "",
		"dialect": "postgresql"
	},

	"mail": {
		"host": process.env.MAIL_HOST || "localhost",
		"port": process.env.MAIL_PORT || "587",
		"user": process.env.MAIL_USER || null,
		"password": process.env.MAIL_PASSWORD || null
	},

	// "sms": {
	// 	"from": process.env.SMS_FROM || "GPS POLICE",
	// 	"sender": process.env.SMS_SENDER || "18885170330",
	// 	"key": process.env.SMS_KEY || "c7d0baa8",
	// 	"secret": process.env.SMS_SECRET || "e1fc2e9b"
	// },

	"log_dir": process.env.LOG_DIR || '/var/log/MCMXIV',

	"debug": true
};
