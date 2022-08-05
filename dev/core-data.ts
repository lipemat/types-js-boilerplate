import '../index';
import {select} from '@wordpress/data';

const X = select( 'core' ).getEntityRecords( 'taxonomy', 'product' as 'category', {
	parent: 0,
	orderby: 'name',
	order: 'asc',
} );

const T = select( 'core' ).getEntityRecords( 'postType', 'page', {
	parent: 0,
	orderby: 'title',
	order: 'asc',
} );

console.log( X[ 0 ].parent );

const V = select( 'core' ).getEntityRecords( 'postType', 'wp_template', {
	order: 'asc',
	_fields: [ 'is_custom' ]
} );

console.log( V[ 0 ].type );

const W = select( 'core' ).getEntityRecords( 'root', 'menu', {} );

console.log( W );

const S = select( 'core' ).getEntityRecord( 'postType', 'wp_template', '4', {
	order: 'asc',
	_fields: [ 'is_custom' ]
} );

console.log( S );