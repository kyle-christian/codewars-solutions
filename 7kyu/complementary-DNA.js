// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

/*

PARAMETERS:
given a string

RESULTS:
return the complement A = T, C = G and vice versa

EXAMPLES:
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   

PSEUDOCODE:
split, map, join

*/

const DNAstrand = dna => {
    return dna
    .split('')
    .map(element => {
        switch(element) {
            case "A":
                return "T"
            case "T":
                return "A"
            case "C":
                return "G"
            case "G":
                return "C"
        }
    })
    .join('')
}

console.log(DNAstrand("ATTGC"));

//elegant solution

const pairs = {'A':'T','T':'A','C':'G','G':'C'};

const DNAStrandAlt = dna => dna.split('').map( function(v) { return pairs[v] } ).join('');