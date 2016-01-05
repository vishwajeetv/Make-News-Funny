// Shamelessly built on cloud-to-butt by panicsteve
// https://github.com/panicsteve

walk(document.body);

function walk(node) 
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
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