import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

// Create and config a new ExpressJS web server
class App{
	public express: express.Application;

	constructor(){
		this.express = express();
		this.middleware();
		this.routes();
	}

	private middleware():void{
		this.express.use( logger('dev') );
		this.express.use( bodyParser.json() );
		this.express.use( bodyParser.urlencoded({ extended: false }) );
	}

	private routes():void{
		/* This is just to get up and running, and to make sure what we've got is
     	* working so far. This function will change when we start to add more
     	* API endpoints */
		let router = express.Router();

		router.get('/',(req,res,next)=>{
			res.json({messaje: 'Hello World'});
		});
		this.express.use('/',router);
	}
}

export default new App().express;
