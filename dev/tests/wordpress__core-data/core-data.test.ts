import {select} from '@wordpress/data';
import {useEntityRecord, useEntityRecords} from '@wordpress/core-data';
import type {Category} from '@wordpress/api/categories';
import {expectType} from '../../helpers/assert';
import type {Page} from '@wordpress/api/pages';
import type {NavMenu, WpTemplate} from '@wordpress/core-data/entities';

expectType<Category<'edit'>[] | undefined | null>( select( 'core' ).getEntityRecords( 'taxonomy', 'product' as 'category', {
	parent: 0,
	orderby: 'name',
	order: 'asc',
} ) );

expectType<Page<'edit'>[] | undefined | null>( select( 'core' ).getEntityRecords( 'postType', 'page', {
	parent: 0,
	orderby: 'title',
	order: 'asc',
} ) );

expectType<number | undefined>( select( 'core' ).getEntityRecords( 'postType', 'page', {} )?.[ 0 ].parent );

expectType<Partial<WpTemplate<'edit'>>[] | undefined | null>( select( 'core' ).getEntityRecords( 'postType', 'wp_template', {
	order: 'asc',
	_fields: [ 'is_custom' ]
} ) );

expectType<string | undefined>( select( 'core' ).getEntityRecords( 'postType', 'wp_template', {} )?.[ 0 ].type );

expectType<NavMenu<'edit'>[] | undefined | null>( select( 'core' ).getEntityRecords( 'root', 'menu', {} ) );

expectType<Partial<WpTemplate<'edit'>> | undefined | null>( select( 'core' ).getEntityRecord( 'postType', 'wp_template', '4', {
	order: 'asc',
	_fields: [ 'is_custom' ]
} ) );

const {
	records: types,
	hasResolved
} = useEntityRecords( 'taxonomy', 'banner_type' as 'post_tag', {} );


expectType<string | undefined>( types?.[ 0 ].name );
expectType<boolean>( hasResolved );

const {
	record: siteSettings,
} = useEntityRecord( 'root', 'site', undefined );

expectType<boolean | undefined>( siteSettings?.use_smilies );
