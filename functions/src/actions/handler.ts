import * as functions from 'firebase-functions'



function parseRequest(request:functions.Request){
  const action = request.body;
  if(!action.type){
	  return undefined;
  }
  return action;
}




function handleRequest(request:functions.Request, response:functions.Response): void {
	if(request.method === 'OPTIONS'){
		response.sendStatus(200);
		return;
	}
	const action = parseRequest(request);
	if(!action){
		response.sendStatus(406); //not acceptable
		return;
	}
	response.status(203);
	response.json({dispatched: true});

}



export const dispatch = functions.https.onRequest(handleRequest);
