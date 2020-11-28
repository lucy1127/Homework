//1.
// https://jsfiddle.net/LucyFan05/6y0t4x71/8/

	var arr = [1,2,3,4,5,6,7,8];

	arr.pop();
	arr.push('d');
	arr.shift();
	arr.unshift('a');

	console.log(arr);

	var i;

	for(i=0 ; i<arr.length ; i++){
		if(arr[i]%2 === 0){
		arr.splice(i,1);
	  }
	}

document.write(arr);
//2.
//https://jsfiddle.net/LucyFan05/caty9hLr/88/

	var recs = [{ name: `Tom`,salary: 30000},
						{name: `Jim`, salary: 35000 },
						{ name: `Linda`, salary: 40000}];


	document.write(`Before` + '<br><br>');

	for (var i = 0; i < recs.length; i++) {
	  document.write(recs[i].name + ',' + recs[i].salary + '<br>');
	}

	document.write('<br>' + `After` + '<br><br>');

	document.write('Name' + ":" + '<br>');


	function nameCompare(a,b){
			if( a.name > b.name)
				return 1;
		else if(a.name < b.name)
				return -1;
			
		else return 0;
	}


	recs.sort(nameCompare);
	recs.forEach(item => console.log(item.name + item.salary));
	recs.forEach(item => document.write(`${item.name}  ${item.salary} <br>`));

	document.write('<br><br>' + 'Salary' + ":" + '<br>');

	function salaryCompare(a,b){
			return a.salary - b.salary;
	}

	recs.sort(salaryCompare);
	recs.forEach(item => console.log(item.salary + item.name));
	recs.forEach(item => document.write(`${item.name}  ${item.salary} <br>`));

//3.
//https://jsfiddle.net/LucyFan05/h61x9d2p/5/
	var n;

	function H(n){
		if(n===1)
		return 1;
	  else
	   return 2*H(n-1)+1;
	}
	//2H(n-1) + 1

	console.log(H(3));
//3.1
//https://jsfiddle.net/LucyFan05/cyz201pu/2/

	function gcd(a,b){
		if(b===0)
		return a;
		
	   else
		return gcd(b,a % b);
	}

	console.log(gcd(16,23));
//4.
//https://jsfiddle.net/LucyFan05/shuykgow/16/	
	var x = sortTheseNumber(11,4,3,2,1);

	function f(a,b){
		return a - b;
	}

	function sortTheseNumber(){
			var i;
		var y=[];
		
	 
		for(i = 0 ; i < arguments.length ;i++){
				y.push(arguments[i]);
		}
		y.sort(f);
		return y;
	}

	document.write(x);




