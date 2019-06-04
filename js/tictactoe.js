var k = 0;
window.addEventListener(
	'load',
	function () {
		var field = document.getElementById( 'main' );
		var selectColor = document.getElementById( 'selectColor' );
		var fieldSize = document.getElementById( 'fieldSize' );

		initOX( 3 );

		//LISTENERS
		fieldSize.addEventListener(
			'change',
			function(){
				field.innerHTML = '';
				initOX(fieldSize.value);
			},
			false)

		selectColor.addEventListener(
			'change',
			function(){
				var coloring = document.getElementsByClassName( 'coloring' );
				for(i = 0; coloring.length > i; i++){
					var x = selectColor.value;
					coloring[i].style.background = x;
				}
			},
			false)
		//--------

		//FUNCTIONS
		function size(){
			var width = window.innerWidth;
			var height = window.innerHeight;
			
			var size = width >= height ? height : width;
			
			return size;
		}

		function initOX( n ) {
			var sizing = 0;
			sizing = size()/n;
			for(var j = 0; n > j; j++){
				for(var i = 0; n > i; i++){
					var square = document.createElement( 'div' );
					square.setAttribute( 'class' , 'coloring' )
					square.style.position = 'absolute';
					square.style.width = sizing + 'px';
					square.style.height = sizing + 'px';
					square.style.background = '#ff0000';
					square.style.border = '4px solid black';
					square.style.marginLeft = i * sizing + 'px';
					square.style.marginTop = j * sizing + 'px';
					field.appendChild( square );
					square.addEventListener(
					'click',
					function( event ){
						var target = event.target;
						
						if( k%2 ){
							target.innerHTML = "X";
						}else{
							target.innerHTML = "O";
						}
						k++;
					},
					false)
				}
			}
		};
              //==========
},
false)