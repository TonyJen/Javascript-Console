Calculator = {
		init :  function() {
				log.info("calculator log started");
		},
         greet : function(args){
			    log.info("greet");
				return ("greet test");
		 },		  
		 calculator : function(args){
				return ("test");
		 },	
		 assert : function (condition, message){
			 try{
				if (!eval(condition[0])) {
					message = message || "Assertion failed";
					if (typeof Error !== "undefined") {
						throw new Error(message);
					}
				throw message; // Fallback
				}
			 }
			catch (err){
				return ("error: " + err);
			} 
		}
}
