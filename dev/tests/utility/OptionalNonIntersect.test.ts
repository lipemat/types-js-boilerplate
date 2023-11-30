import type {OptionalNonIntersect} from '@lipemat/js-boilerplate/utility';

let OpNonIntersect: OptionalNonIntersect<
	{ foo: string, bar: number }, {
	foo: string,
	waz: boolean
}>;
// @ts-expect-no-error
OpNonIntersect = {
	foo: 'foo',
};
// @ts-expect-no-error
OpNonIntersect = {
	foo: 'foo',
	bar: 0,
	waz: false,
};
// @ts-expect-no-error
OpNonIntersect = {
	foo: 'foo',
};
// @ts-expect-error
OpNonIntersect = {};


let OpWOptionals: OptionalNonIntersect<
	{
		foo?: string,
		bar: number
	},
	{
		foo?: string,
		waz: boolean
	}
>;
// @ts-expect-no-error
OpWOptionals = {};

// @ts-expect-no-error
OpWOptionals = {
	foo: 'foo'
};

// @ts-expect-no-error
OpWOptionals = {
	foo: 'foo',
	waz: false
};
