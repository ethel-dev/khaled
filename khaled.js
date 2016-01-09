//  khaled
    // the DJ Khaled quote generator
    // dedicated to We The Best, as well as Ethan and Hila Klein (h3h3productions)
    // (c) Ethan Arterberry 2015 [MIT License]

//  warning: this code is heavily commented because I felt like it

var KhaledJS = function() {
    // this will generate a catchphrase/quote that sounds like something DJ Khaled 
    // would say in a similar vein to a project I made a while back called purnell
    
    // these are catchphrases, the lamest part
    var c = {
        one: ["lion", "another", "bless"],
        two: ["order", "one", "up", "lion"]
    }
    
    // these are pieces of inspirational quotes
    var i = {
        key: ["DJ Khaled", "to get down with Jeezy before he was Jeezy", "to make it", "breaking the App Store", "wearing expensive fur coats", "fat rocks", "heat", "sound bites", "clean heart, clean face", "Dove soap", "to be the best", "coco butter", "We The Best Sound", "fly shoes", "jet skis", "to never play yourself", "massages from big booty babes", "to get the number one record in the country", "the best headphones in the game"], // the key to success is...
        tdwyt: ["eat breakfast", "open the door", "have lunch", "get presents", "get inspired", "break the App Store", "have the number one food in the country, egg whites", "jet ski", "win", "think", "get healthy", "exercise", "have that view", "change... a lot", "make another one", "buy your family houses", "have the biggest shoe collection in the game", "make the best headphones in the game"], // they don't want you to...
        you: { // you ..., ..., ...
            adj: ["smart", "loyal", "brave", "high", "grateful", "magic", "a genius", "powerful", "sexy", "precious"],
            final: {
                now: ["say my name", "let We The Best sound take you away", "film me taking a shower", "get me another one", "put the hinges on the fuccboi's hands", "go buy yourself a house", "get yourself a massage", "buy your momma a house"], // preface w/ "now"
                pos: ["show you something you ain't never seen before", "hold you down", "jet ski", "get a massage", "take a shower", "go drop two singles, no... another one", "make an anthem"], // preface w/ "now I'ma"
                misc: ["I appreciate you", "I changed... a lot", "they're gonna shut the door, so just open it", "as a matter of fact, buy your whole family houses", "so just let the music take you away"] // raw
            }
        }
    }
    
    // the final part of "you" is complex, figure it out here
    var you = []
    var now_is_used = false; // shouldn't repeat a "now..." or a "now I'ma..."
    for(var d = 1; d < 3; d++) {
        switch(Math.floor(Math.random() * 4) + 1) {
            case 1: // i.you.final.now (now)
                if (now_is_used === false) { // if a "now"/"now I'ma" hasn't been used yet
                    you.push("now " + i.you.final.now[Math.floor(Math.random() * i.you.final.now.length)])
                    now_is_used = true // mark used
                    break
                }
            case 2: // i.you.final.pos (now I'ma)
                if (now_is_used === false) { // if a "now"/"now I'ma" hasn't been used yet
                    you.push("now I'ma " + i.you.final.pos[Math.floor(Math.random() * i.you.final.pos.length)])
                    now_is_used = true // mark used
                    break
                }
                
            case 3: // i.you.final.misc (no prefix)
                you.push(i.you.final.misc[Math.floor(Math.random() * i.you.final.misc.length)])
                break
            default: // i.you.adj (default)
                if (now_is_used === true) {
                    you.push("because you " + i.you.adj[Math.floor(Math.random() * i.you.adj.length)])
                } else {
                    you.push("you " + i.you.adj[Math.floor(Math.random() * i.you.adj.length)])
                }
                break
        }
    }
    
    var they_dont = i.tdwyt[Math.floor(Math.random() * i.tdwyt.length)] // this is the thing they don't want you to do
    
    return { // randomized catchphrases
        key: "The key to success is " + i.key[Math.floor(Math.random() * i.key.length)] + ".", // key to success
        they: "They don't want you to " + they_dont + ", so what we 'gon do is " + they_dont + " more.", // they don't want you to
        you: "You " + i.you.adj[Math.floor(Math.random() * i.you.adj.length)] + ", " + you[0] + ", " + you[1] + ".", // you ___, ___, ___
        phrase: c.one[Math.floor(Math.random() * c.one.length)] + " " + c.two[Math.floor(Math.random() * c.two.length)] // simple catchphrase
    }
}