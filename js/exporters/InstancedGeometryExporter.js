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

		//output['fileFormatType'] = '3D instanced geomtry';
		//output['fileFormatVersion'] = 0.1;

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
			//for ( var i = 0, l = cnt; i < l; i ++ ) {
			for ( var i = 0, l = cnt*4; i < l; i ++ ) {

				array[ i ] = typedArray.array[ i ];

			}

			output[ attribute ] = array;

		}

		return output;

	}

};
