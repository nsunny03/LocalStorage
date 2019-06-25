myObj = {name:"Shiva", age: 30, city: "Hyderabad",state: "TS"};
myJSON = JSON.stringify(myObj);

localStorage.setItem('TestJson', myJSON);

data = localStorage.getItem('TestJson');
obj = JSON.parse(data);
document.getElementById('data').innerHTML = 'Name: '+ obj.name + '<br>' +'Age: '+  obj.age + '<br>'+'City: '+ obj.city +'<br>'+ 'State: ' + obj.state;
