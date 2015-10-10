Template.tabsInteraction.rendered = function () {
  Session.set('currentTab', 'tabs.timeline');
};


Template.tabsInteraction.helpers({
  // gera os dados do programa atual
  programs: function(){
    var categoryId = Category.find(
      {
        description: 'Radio'
      }
    ).map(
      function(c){
        return {
          _id: c._id
        }
      }
    );

    return Program.find(
      {
        _id: Router.current().params._id,
        status: 1,
        category_id: { $not: categoryId[0]._id }
      }
    ).map(
      function(p) {
        return {
            _id: p._id,
          name: p.name,
          day: p.day,
          hour_begin: p.hour_begin,
          hour_end: p.hour_end,
          description: p.description
        };
      }
    );
  }
});