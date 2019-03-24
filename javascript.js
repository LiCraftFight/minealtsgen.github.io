var acc = ['kaya.klaw@gmail.com:Sniffles7', 'kellyb127@gmail.com:karlaboo127', 'kaymikhael@gmail.com:mikhael57',
	'sakicfriend@yahoo.com:Jacoby26', 'simonsds@mac.com:VINILO', 'rob_411@yahoo.com:robert6969',
	'meatwadwjm@yahoo.com:method', 'swetangpatel83@yahoo.com:surat1983', 'knightwing17@gmail.com:selfcontrol', 
	'zita.vermes@gmail.com:idefix', 'championdetailservices@yahoo.com:streetfighter', 'ty.gillespie89@gmail.com:256236', 
	'shea.fitzgerald@Comcast.net:12056830', 'cristi.iva@gmail.com:ivothegreat'
]
function newAcc() {
	var randomNumber = Math.floor(Math.random() * (acc.length));
	document.getElementById('accDisplay').innerHTML = acc[randomNumber];
}