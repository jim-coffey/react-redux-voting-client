export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    console.log('SERVER SERVER SERVER SERVER SERVER');
    socket.emit('action', action);
    console.log('in middleware', action);
  }
  return next(action);
};
