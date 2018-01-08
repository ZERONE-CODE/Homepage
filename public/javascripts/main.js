function joinUs(){
  var $form = $('.ui.inverted.form'),
  all = $form.form('get values');
  console.log(all);
  $.ajax({
    crossDomain: true,
    url: "https://script.google.com/macros/s/AKfycbwYXHNSpr-Wo3tNqKF-QR1dAWOIVnEYE9hJRDFBTrimWVCPPJXF/exec",
    type: "POST",
    data: all,
    
  })
  .done(function(res) {
    console.log('success')
  })
  .fail(function(e) {
    console.log('error: ')
    console.log(e)
  });
}
$(document)
.ready(function() {

  $('.ui.basic.modal')
  .modal({
    blurring: true
  })
  .modal('attach events','.registration.item','show')
  ;
  $('.ui.dimmable')
  .dimmer({
    on : 'click'
  })
  ;
  $('.ui.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('attach events','#right-sidebar-toggle')
  ;
  $('.ui.accordion')
  .accordion({
    selector: {
      trigger: '.title .icon'
    }
  })
  ;
  $('#adduser')
  .form({
    inline : true,
    onSuccess: function(event, fields) {joinUs()},
    fields: {
      Name: {
        identifier: 'Name',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
        ]
      },
      Student_ID: {
        identifier: 'Student_ID',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a s_id'
        },
        {
          type   : 'exactLength[10]',
          prompt : 'Student_ID must be {ruleValue} characters'
        },
        {
          type   : 'number',
          prompt : 'Student_ID must be a number'
        }
        ]
      },
      Department: {
        identifier: 'Department',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your department'
        }
        ]
      },
      Phone_Num: {
        identifier: 'Phone_Num',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a phone number'
        },
        {
          type   : 'regExp[(010)([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})]',
          prompt : 'Ex)010 1010 1010'
        }
        ]
      },
      Gender: {
        identifier: 'Grade',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please select your grade'
        }
        ]
      },
      Terms: {
        identifier: 'Terms',
        rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
        ]
      }
    }
  });
});
