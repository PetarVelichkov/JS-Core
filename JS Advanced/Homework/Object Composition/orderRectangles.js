function orderRectangle(input) {
    function createRectangle(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: (other) => {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width)
            }
        };
        return rect;
    }

    let rects = [];
    for (let [width, height] of input) {
        let rect = createRectangle(width, height);
        rects.push(rect);
    }
    rects.sort((a, b) => a.compareTo(b));
    return rects;
}
console.log(orderRectangle([[10,5], [3,20], [5,12]]));
