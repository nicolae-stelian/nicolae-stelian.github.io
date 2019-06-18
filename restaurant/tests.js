/*
* Read more about this js test framework.
* https://qunitjs.com/intro/
 */

QUnit.test( "hello test", function( assert ) {
    let app = new App("1");
    console.log( app);
    assert.ok( "1" === app.getVal(), "Passed!" );
});

// QUnit.test("prettyDate.update", function( assert ) {
//     var links = document.getElementById("qunit-fixture")
//         .getElementsByTagName("a");
//     assert.equal(links[0].innerHTML, "January 28th, 2008");
//     assert.equal(links[2].innerHTML, "January 27th, 2008");
//     prettyDate.update("2008-01-28T22:25:00Z");
//     assert.equal(links[0].innerHTML, "2 hours ago");
//     assert.equal(links[2].innerHTML, "Yesterday");
// });