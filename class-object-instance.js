class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.width * this.height;
    }
}

const p = new Polygon(1,2);
p.area();
