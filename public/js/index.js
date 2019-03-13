var socket = io();
socket.on('connect', function(){
  console.log('Connected to server.');
  
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server.');
});

socket.on('newMessage', function(message) {
  console.log('New message:', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#chat-window').append(li);
});

jQuery('#message-form').on('submit', function(event){
  event.preventDefault();

  socket.emit('createMessage', {
    from: jQuery('[name=userName]').val(),
    text: jQuery('[name=message]').val()
  }, function(){});
});