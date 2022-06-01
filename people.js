const people = ['Ashraful', 'Tamim', 'Riad'];
const a = 6;
function test() {
    console.log('test');
}
// each js file is a module. ekti file theke arekti file ke import korle,
// shudhumatro jake export kora hobe that means jake access korar permission deya hobe
// take others file theke access kora jabe.
// console.log(module);
// module.exports = people;

// multiple jinis export korte hole object hisabe export korte hobe

module.exports = {
    people,
    a,
    test,
};
