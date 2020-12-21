# JS Boilerplate TypeScript
External TypeScript definitions for `@lipemat/js-boilerplate` and plugins.

## Usage

We don't have access to the global `@types` namespace and this library is not complete, so it may be included via

```json
{
  "dependencies": {
    "@types/lipemat-js-boilerplate": "https://github.com/lipemat/types-js-boilerplate.git"
  }
}

```

## Support using PNP with Yarn V2

Currently, paused as there is no way to disable the warnings in Yarn V2 when using loose modules.
As much as I would like to maintain my own fork of Yarn, I've got higher priority items to 
maintain right now. :-(


### _*<a href="https://github.com/yarnpkg/berry/blob/7d9b64288d292af1ab147dff6f11f3c59a4b0ed7/packages/yarnpkg-pnp/sources/loader/makeApi.ts#L30">Here is the issue</a>*_

```typescript
// Yarn supports setting an environmental variable which disables some of the loose module warnings.
process.env.PNP_ALWAYS_WARN_ON_FALLBACK = 0;

// This constant is set based on that value.
const alwaysWarnOnFallback = Number( process.env.PNP_ALWAYS_WARN_ON_FALLBACK ) > 0;


//:626 This conditon honors the constnat.
if ( alwaysWarnOnFallback )
	fallbackReference = reference;
else
	dependencyReference = reference;

// :634 This condition does not honor the constant and this is where the variable is set which triggers the errors.
if ( runtimeState.enableTopLevelFallback ) {
	if ( dependencyReference == null && fallbackReference === null ) {
		const reference = runtimeState.fallbackPool.get( dependencyName );
		if ( reference != null ) {
			fallbackReference = reference;
		}
	}
}

//  :705 Error is then emitted here.
if ( dependencyReference == null ) {
	if ( fallbackReference === null || error === null )
		throw error || new Error( `Assertion failed: Expected an error to have been set` );

	dependencyReference = fallbackReference;

	const message = error.message.replace( /\n.*/g, `` );
	error.message = message;

	if ( ! emittedWarnings.has( message ) ) {
		emittedWarnings.add( message );
		process.emitWarning( error );
	}
}

```

### Solution
To make all this work without errors the condition must also be added to the second case like so

```typescript
//: 634
if ( runtimeState.enableTopLevelFallback ) {
	if ( dependencyReference == null && fallbackReference === null ) {
		const reference = runtimeState.fallbackPool.get( dependencyName );
		if ( reference != null ) {
			if ( alwaysWarnOnFallback ) {
				fallbackReference = reference;
			} else {
				dependencyReference = reference;
			}
			fallbackReference = reference;
		}
	}
}

```

