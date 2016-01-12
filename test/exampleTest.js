var assert = require("semantic-firewall").assert;
var logger = require("semantic-firewall").logger;
var why = require("../lib/why.js");


logger.record = function(record){
   console.log("Failed assert:",JSON.stringify(record));
}

function nop(){

}

function func(callback){
    nop.why("For something")();
    callback(null, why.dump());
};


assert.callback("Test example", function(end){
    func.why("Demonstrate attaching descriptions to future calls")( function(err, result){
        console.log(result);
        assert.equal(result.whystack.length, 2);
        end();
    });
}.why("Attach another description"));