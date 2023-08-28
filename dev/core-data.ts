import '../index';
import {select} from '@wordpress/data';
import {EntityRecordResolution, useEntityRecord, useEntityRecords} from '@wordpress/core-data';

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
console.log( T );

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

const {
	records: types,
	hasResolved
} = useEntityRecords( 'taxonomy', 'banner_type' as 'post_tag', {} );

console.log( types[ 0 ].name );
console.log( hasResolved );

const {
	record: siteSettings,
} = useEntityRecord( 'root', 'site', undefined );

console.log( siteSettings );
