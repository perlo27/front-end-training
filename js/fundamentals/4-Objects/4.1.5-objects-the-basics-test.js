describe('Multiply numeric properties by 2', function () {
   it('should return changed object', function () {
       let menu = {
           width: 200,
           height: 300,
           title: 'My menu'
       };
       menu = multiplyNumeric(menu);

       let expectedMenu = {
           width: 400,
           height: 600,
           title: 'My menu'
       };
       assert(menu.height, expectedMenu.height);
       assert(menu.width, expectedMenu.width);
       assert(menu.title, expectedMenu.title);
   });
});