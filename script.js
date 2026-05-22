const randomWords = {
    // Private-by-convention properties to store the actual data
    _sentence: "The quick brown fox jumps over the lazy dog.",
    _adjective: ["quick", "delightful", "lazy", "happy", "sad", "angry", "excited","dark","bright","twisted"],
    _noun: ["fox", "dog","boy","girl","squirrel","monkey","racoon"],
    _verb: ["jumps", "runs", "plays", "sleeps", "eats", "drinks","flys", "swims", "walks", "talks"],
    _adverb: ["quickly", "lazily", "happily", "sadly", "angrily", "excitedly","darkly","brightly","twistedly"],

    // --- Sentence Getters and Setters ---
    get sentence() {
        this._sentence = "The " + this.adjective + " " + this.noun + " " + this.verb + " " + this.adverb + ".";
        return this._sentence;
    },
    set sentence(value) {
        if (typeof value === 'string') {
            this._sentence = value;
        } else {
            console.error("Error: sentence must be a string.");
        }
    },

    // --- Adjective Getters and Setters ---
    get adjective() {
        let i = Math.floor(Math.random() * this._adjective.length);
        return this._adjective[i];
    },
    set adjective(value) {
        if (typeof value === 'string') {
             this._adjective.push(value);
        } else {
            console.error("Error: The value must be an string.");
        }
    },

    // --- Noun Getters and Setters ---
    get noun() {
        let i = Math.floor(Math.random() * this._noun.length);
        return this._noun[i];
    },
    set noun(value) {
        if (typeof value === 'string') {
             this._noun.push(value);
        } else {
            console.error("Error: The value must be an string.");
        }
    },

    // --- Verb Getters and Setters ---
    get verb() {
        let i = Math.floor(Math.random() * this._verb.length);
        return this._verb[i];
    },
    set verb(value) {
         if (typeof value === 'string') {
             this._verb.push(value);
        } else {
            console.error("Error: The value must be an string.");
        }
    },

    // --- Adverb Getters and Setters ---
    get adverb() {
        let i = Math.floor(Math.random() * this._adverb.length);
        return this._adverb[i];
    },
    set adverb(value) {
        if (typeof value === 'string') {
             this._adverb.push(value);
        } else {
            console.error("Error: The value must be an string.");
        }
    }
};


// Grab references to the HTML elements
const button = document.getElementById('action-btn');
const display = document.getElementById('text-display');

// Add a click event listener to the button
button.addEventListener('click', () => {

    // Set the text inside the div to the current sentence
    display.textContent = randomWords.sentence; // Use the random sentence generator

    
    // Move to the next index, looping back to 0 if we hit the end
    currentIndex = (currentIndex + 1) % sentences.length;
});