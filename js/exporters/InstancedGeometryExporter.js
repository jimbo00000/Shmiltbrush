/**
 * @author jimbo00000
 */

THREE.InstancedGeometryExporter = function () {};

THREE.InstancedGeometryExporter.prototype = {

	constructor: THREE.InstancedGeometryExporter,

	parse: function ( geometry ) {

		var output = {
			metadata: {
				version: 4.0,
				type: 'InstancedGeometry',
				generator: 'InstancedGeometryExporter'
			}
		};

		console.log(geometry);

		var cnt = geometry.maxInstancedCount;
		output[ 'maxInstancedCount' ] = cnt;

		{
			var attribute = 'offset';
			
			var typedArray = geometry.attributes[ attribute ];
			var array = [];

			for ( var i = 0, l = cnt*4; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		{
			var attribute = 'rot'; // one component
			
			var typedArray = geometry.attributes[ attribute ];
			var array = [];

			for ( var i = 0, l = cnt; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		return output;

	}

};
