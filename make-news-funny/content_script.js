
String.prototype.lowerize = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
};

dictionary = [
    {"Witnesses":"These dudes I know"},
    {"Allegedly":"Kinda probably"},
    {"New study":"Tumblr post"},
    {"Rebuild":"Avenge"},
    {"Space":"Spaaace"},
    {"Google Glass":"Virtual Boy"},
    {"Smartphone":"Pokédex"},
    {"Electric":"Atomic"},
    {"Senator":"Elf-lord"},
    {"Car":"Cat"},
    {"Election":"Eating contest"},
    {"Congressional leaders":"River spirits"},
    {"Homeland security":"Homestar Runner"},
    {"Could not be reached for comment":"Is guilty and everyone knows it"},
    {"Debate":"Dance-off"},
    {"Self driving":"Uncontrollably swerving"},
    {"Poll":"Psychic reading"},
    {"Candidate":"Airbender"},
    {"Drone":"Dog"},
    {"Vows to":"Probably won't"},
    {"At large":"Very large"},
    {"Successfully":"Suddenly"},
    {"Expands":"Physically expands"},
    {"First-degree":"Friggin' awful"},
    {"Second/third-degree":"Friggin' awful"},
    {"Third-degree":"Friggin' awful"},
    {"An unknown number":"Like hundreds"},
    {"Front runner":"Blade runner"},
    {"Global":"Spherical"},
    {"Years":"Minutes"},
    {"Minutes":"Years"},
    {"No indication":"Lots of signs"},
    {"Urged restraint by":"Drunkenly egged on"},
    {"Horsepower":"Tons of horsemeat"},
    {"Gaffe":"Magic spell"},
    {"Ancient":"Haunted"},
    {"Star-Studded":"Blood-soaked"},
    {"Remains to be seen":"Will never be known"},
    {"Silver bullet":"Way to kill werewolves"},
    {"Subway system":"Tunnels I found"},
    {"Surprising":"Surprising (but not to me)"},
    {"War of words":"Interplanetary war"},
    {"Tension":"Sexual tension"},
    {"Cautiously optimistic":"Delusional"},
    {"Doctor Who":"The Big Bang Theory"},
    {"Win votes":"Find Pokémon"},
    {"Behind the headlines":"Beyond the grave"},
    {"Email":"Poem"},
    {"Facebook Post":"Poem"},
    {"Tweet":"Poem"},
    {"Facebook CEO":"This guy"},
    {"Latest":"Final"},
    {"Disrupt":"Destroy"},
    {"Meeting":"Ménage à trois"},
    {"Scientists":"Channing Tatum and his friends"},
    {"You won't believe":"	I'm really sad about"}
];

walk(document.body);

function walk(node) 
{
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child ) 
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        handleText(node);
                        break;
        }
}

function handleText(textNode) 
{
        var v = textNode.nodeValue;

        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bnew study\b/g, "tumblr post");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\bSpace\b/g, "Spaaace");
        v = v.replace(/\bspace\b/g, "spaaace");
        v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bSmartphone\b/g, "Pokédex");
        v = v.replace(/\bsmartphone\b/g, "Pokédex");
        v = v.replace(/\bsmartphones\b/g, "Pokédexes");
        v = v.replace(/\bSmartphone\b/g, "Pokédexes");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\bSenator\b/g, "Elf-Lord");
        v = v.replace(/\bSenators\b/g, "Elf-Lords");
        v = v.replace(/\bsenator\b/g, "elf-Lord");
        v = v.replace(/\bsenators\b/g, "elf-Lords");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bElection\b/g, "Eating contest");
        v = v.replace(/\belections\b/g, "eating contests");
        v = v.replace(/\bElections\b/g, "Eating contests");
        v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
        v = v.replace(/\bCongressional leaders\b/g, "River Spirits");
        v = v.replace(/\bcongressional leaders\b/g, "river spirits");
        v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
        v = v.replace(/\bDebate\b/g, "Dance-off");
        v = v.replace(/\bDebates\b/g, "Dance-offs");
        v = v.replace(/\bdebate\b/g, "dance-off");
        v = v.replace(/\bdebates\b/g, "dance-offs");
        v = v.replace(/\bSelf driving\b/g, "Uncontrollably swerving");
        v = v.replace(/\bself driving\b/g, "uncontrollably swerving");
        v = v.replace(/\bPoll\b/g, "Psychic reading");
        v = v.replace(/\bPolls\b/g, "Psychic readings");
        v = v.replace(/\bpoll\b/g, "psychic readings");
        v = v.replace(/\bpolls\b/g, "psychic readings");
        v = v.replace(/\bCandidate\b/g, "Airbender");
        v = v.replace(/\bCandidates\b/g, "Airbenders");
        v = v.replace(/\bcandidate\b/g, "airbender");
        v = v.replace(/\bcandidates\b/g, "airbenders");
        v = v.replace(/\bDrone\b/g, "Dog");
        v = v.replace(/\bDrones\b/g, "Dogs");
        v = v.replace(/\bdrone\b/g, "dog");
        v = v.replace(/\bdrones\b/g, "dogs");
        v = v.replace(/\bVows to\b/g, "Probably won't");
        v = v.replace(/\bvows to\b/g, "probably won't");
        v = v.replace(/\bAt large\b/g, "Very large");
        v = v.replace(/\bat large\b/g, "very large");
        v = v.replace(/\bSuccessfully\b/g, "Suddenly");
        v = v.replace(/\bsuccessfully\b/g, "suddenly");
        v = v.replace(/\bExpands\b/g, "Physically expands");
        v = v.replace(/\bexpands\b/g, "physically expands");
        v = v.replace(/\bFirst-degree\b/g, "Friggin' awful");
        v = v.replace(/\bfirst-degree\b/g, "Friggin' awful");
        v = v.replace(/\bSecond-degree\b/g, "Friggin' awful");
        v = v.replace(/\bsecond-degree\b/g, "Friggin' awful");
        v = v.replace(/\bThird-degree\b/g, "Friggin' awful");
        v = v.replace(/\bthird-degree\b/g, "Friggin' awful");
        v = v.replace(/\bAn unknown number\b/g, "Like hundreds");
        v = v.replace(/\ban unknown number\b/g, "like hundreds");
        v = v.replace(/\bFront runner\b/g, "Blade runner");
        v = v.replace(/\bFront runners\b/g, "Blade runners");
        v = v.replace(/\bfront runner\b/g, "blade runner");
        v = v.replace(/\bfront runners\b/g, "blade runners");
        v = v.replace(/\bGlobal\b/g, "Spherical");
        v = v.replace(/\bglobal\b/g, "spherical");
        v = v.replace(/\bYears\b/g, "Minutes");
        v = v.replace(/\byears\b/g, "minutes");
        v = v.replace(/\bMinutes\b/g, "Years");
        v = v.replace(/\bminutes\b/g, "years");
        v = v.replace(/\bNo indication\b/g, "Lots of signs");
        v = v.replace(/\bno indication\b/g, "lots of signs");
        v = v.replace(/\bUrged restraint by\b/g, "Drunkenly egged on");
        v = v.replace(/\bHorsepower\b/g, "Tons of horsemeat");
        v = v.replace(/\bhorsepower\b/g, "tons of horsemeat");

        textNode.nodeValue = v;
}