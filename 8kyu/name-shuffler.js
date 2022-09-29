// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

const nameShuffler = str => {
    let arr = str.split(' ')
    let newarr = [arr[1], arr[0]]
    
    
    return newarr.join(' ')
}

console.log(nameShuffler('john McClane'))