
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

    dictionary.forEach(function (entry) {
        var key = Object.keys(entry)[0];
        var entryString = entry[key];
        v = v.replace( key, entryString);
        v = v.replace(key.lowerize(), entryString.lowerize());
    });

    textNode.nodeValue = v;
}