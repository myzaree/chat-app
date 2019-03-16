var socket = io();

function scrollToBottom() {
  // Selectors
  var messages = jQuery('#chat-window');
  var newMessage = messages.children('li:last-child');
  // Hights 

  var clientHeight = messages.prop('clientHeight');
  var scrollTop = messages.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();
  console.log(clientHeight, scrollHeight, scrollTop, newMessageHeight, lastMessageHeight);
  if( clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight ){
    console.log('Should scroll bottom');
    messages.scrollTop(scrollHeight);  
  }

};

socket.on('connect', function(){
  console.log('Connected to server.');
  var params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function(err) {
    if(err){
      alert(err);
      window.location.href = '/';
    }else{
      console.log('No error');  
    }
  });
  
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server.');
});

socket.on('updateUserList', function(users) {
  var ol = jQuery('<ol></ol>');

  users.forEach(user => {
    ol.append(jQuery('<li></li>').text(user));
  });

  jQuery('#users').html(ol);
});

socket.on('newMessage', function(message) {
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: message.createdAt
  });
  jQuery('#chat-window').append(html);
  scrollToBottom();
});

socket.on('newLocationMessage', function(message) {
  var locationTemplate = jQuery('#location-message-template').html();
  var html = Mustache.render(locationTemplate, {
    from: message.from,
    url: message.url,
    createdAt: message.createdAt
  });
  jQuery('#chat-window').append(html);
  // var li = jQuery('<li></li>');
  // var a = jQuery('<a target="_blank">My current location</a>');
  // li.text(`${message.from} ${message.createdAt}: `);
  // a.attr('href', message.url);
  // li.append(a);
  // jQuery('#chat-window').append(li);
});

jQuery('#message-form').on('submit', function(event){
  event.preventDefault();
  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: jQuery('[name=userName]').val(),
    text: messageTextbox.val()
  }, function(){
    messageTextbox.val('');
  });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function(){
  if(!navigator.geolocation){
    return alert('Geolocation is not supported by your browser.');
  }
  locationButton.attr('disabled', true).text('Sending location...');

  navigator.geolocation.getCurrentPosition(function(position){
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

  }, function(){
    locationButton.removeAttr('disabled').text('Send Location');
    alert('Unable to share location.');
  });
});

