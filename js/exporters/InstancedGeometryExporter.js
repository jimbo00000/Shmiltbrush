/**
 * @author jimbo00000
 */

THREE.InstancedGeometryExporter = function () {};

THREE.InstancedGeometryExporter.prototype = {

	constructor: THREE.InstancedGeometryExporter,

	parse: function ( geometry ) {

		var output = {
			metadata: {
				version: 4.2,
				type: 'InstancedGeometry3D',
				generator: 'InstancedGeometryExporter'
			}
		};

		console.log(geometry);

		var cnt = geometry.maxInstancedCount;
		output[ 'maxInstancedCount' ] = cnt;

		{
			var attribute = 'perInstPositions';
			
			var typedArray = geometry.attributes[ attribute ];
			var array = [];

			for ( var i = 0, l = cnt*4; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		{
			var attribute = 'perInstOrientations';
			
			var typedArray = geometry.attributes[ attribute ];
			var array = [];
			for ( var i = 0, l = cnt*4; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		{
			var attribute = 'perInstColors';
			
			var typedArray = geometry.attributes[ attribute ];
			var array = [];
			for ( var i = 0, l = cnt*4; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		return output;

	}

};
