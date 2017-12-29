function joinUs(){
  var $form = $('.ui.inverted.form'),
  all = $form.form('get values');
  console.log(all);
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby2s3BIgiQ-njovvNznhxEycEvr44uA4EjhjCv8uzgKIdVvNyDr/exec",
    data: {Name:all.Name, Student_ID:all.Student_ID, Email:all.Email, Phone_Num:all.Phone_Num, Grade:all.Grade},
    type: "POST",
    success:function(){      
      alert("빠른 시일 내에 검토해보겠습니다.\n감사합니다.");
    }
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
    onValid: function(field) {},
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
          type   : 'decimal',
          prompt : 'Student_ID must be a decimal number'
        }
        ]
      },
      Email: {
        identifier: 'Email',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter an email'
        },
        {
          type   : 'email',
          prompt : 'Please enter a valid email address'
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
