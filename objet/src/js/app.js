// Place JS here.
Person.prototype.getSex = function(){
  return p.sex;
}
function Person(name) {
  this.name = name;
  this.sex = this.sex || 0;
  this.ditBonjour = function () {
    return `${this.sex == 'm' ? 'Bonjour M.' : this.sex == 'f' ? 'Bonjour Mme' : 'Bonjour ni femme ni homme ? '} ${this.name}`;
  };
};

var p = new Person
p.name = 'Manu'
p.sex = 'm'
cl(p.ditBonjour()) // Bonjour M. Manu

var s = new Person
s.name = 'Sabine'
s.sex = 'f'
cl(s.ditBonjour()) // Bonjour Mme Sabine


function cl (argument) {
  console.log(argument)
}