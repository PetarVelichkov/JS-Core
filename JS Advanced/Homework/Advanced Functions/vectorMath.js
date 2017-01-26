let vectorMath = (function() {
    function add(vector1, vector2) {
        return [vector1[0] + vector2[0], vector1[1] + vector2[1]]
    }
    function multiply(vector, scalar) {
        return [vector[0] * scalar, vector[1] * scalar]
    }
    function length(vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2))
    }
    function dot(vector1, vector2) {
        return (vector1[0] * vector2[0]) + (vector1[1] * vector2[1])
    }
    function cross(vector1, vector2) {
        return (vector1[0] * vector2[1]) - (vector1[1] * vector2[0])
    }
    return { add, multiply, length, dot, cross}
}());
console.log(vectorMath.cross([3, 7], [1, 0]));