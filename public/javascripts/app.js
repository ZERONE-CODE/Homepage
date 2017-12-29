$('.ui.checkbox').checkbox({
  // check all children
  onChecked: function() {
    $('#submitButton').attr('class',"ui basic inverted right floated submit button");
  },
  // uncheck all children
  onUnchecked: function() {
    $('#submitButton').attr('class',"ui disabled basic inverted right floated submit button");
  }
});
$('.ui.dropdown').dropdown();
$('.ui.dimmable').dimmer({
  on : 'click'
});
$('.ui.accordion').accordion({
  selector: {
    trigger: '.title .icon'
  }
});
