(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "https://jwt-service-provider.vercel.app/api/users/sts";
    botOptionsWiz.userIdentity = 'bijeyta.t@aionos.ai';// Provide users email id here
    botOptionsWiz.botInfo = { name: "Traveller", "_id": "st-a40177b9-4d18-5506-af61-9af8a3e48028" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-c23b729c-20ff-51da-a8d4-43e4556b2fe4";
    botOptionsWiz.clientSecret = "7yofPQ5P58rI1gTyUwdTtSLOVPPXDoT0aay7mUsyIB4=";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);
