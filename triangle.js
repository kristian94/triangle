/**
 * Created by Kristian Nielsen on 10-02-2018.
 */
function Triangle(sides){
    [this.a, this.b, this.c] = sides;

}

Triangle.prototype.isEquilateral = function(){
    return this.a == this.b && this.b == this.c
};

Triangle.prototype.isIsosceles = function(){
    return this.a == this.b || this.a == this.b || this.b == this.c;
};

Triangle.prototype.isScalene = function(){
    return this.a !== this.b && this.a !== this.c && this.b !== this.c;
};

Triangle.prototype.printProperties = function(){
    console.log('Your triangle is:');
        this.isEquilateral()    ? console.log('Equilateral!') :
        this.isIsosceles()      ? console.log('Isosceles!') :
        this.isScalene()        ? console.log('Scalene!') :
                                  console.log('Not really special :/');
}

module.exports = Triangle;