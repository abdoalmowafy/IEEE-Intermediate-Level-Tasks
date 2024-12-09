function filter(input) {
    if(!Array.isArray(input) || input.length === 0) return null;
    var output = input[0];
    for (var i = 1; i < input.length; i++) {
        output = input[i].length > output.length ? input[i] : output; 
    }

    return output;
}