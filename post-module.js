event('.titles','mouseover',() => {
  $('input[type="text"]').classList.remove('hide');
  $('input[type="tex"]').focus()
});

event('.titles','click',() => {
  $('input[type="text"]').classList.toggle('hide')
});

event('.choose','click',() => {
 $( '#module').click()
})
event('.cover' ,'click' , () => {
  $('#module-pic').click()
}  )

