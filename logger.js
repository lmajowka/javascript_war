module.exports = function(request, response, next){
  let start = +new Date();
  let stream = process.stdout;
  let url = request.url;
  let method = request.method;

  response.on('finish', function(){
    let duration = +new Date() - start;
    let message = `${method} to ${url} took ${duration} ms \n`;
    stream.write(message);
  });   
 
  next();

}