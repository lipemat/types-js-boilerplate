/**
 * Definitions for the `@wordpress/abilities` package.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-abilities/
 * @link https://github.com/WordPress/gutenberg/blob/9b2498b2ce3abbf8e588bf5196daac2b3e1b2220/packages/abilities/src/types.ts
 */
declare module '@wordpress/abilities' {
	/**
	 * Input parameters for ability execution.
	 * Can be any JSON-serializable value: primitive, array, object, or null.
	 */
	export type AbilityInput = any;

	/**
	 * Result from ability execution.
	 * The actual shape depends on the ability's output schema.
	 */
	export type AbilityOutput = any;

	/**
	 * Validation error - just a message string.
	 * The Abilities API wraps this with the appropriate error code.
	 */
	export type ValidationError = string;

	/**
	 * Callback function for client-side abilities.
	 */
	export type AbilityCallback = (
		input: AbilityInput
	) => AbilityOutput | Promise<AbilityOutput>;

	/**
	 * Permission callback function for client-side abilities.
	 * Returns true if the ability can be executed, false otherwise.
	 */
	export type PermissionCallback = (
		input?: AbilityInput
	) => boolean | Promise<boolean>;

	/**
	 * Represents an ability in the WordPress Abilities API.
	 *
	 * @see WP_Ability
	 */
	export interface Ability {
		/**
		 * The unique name/identifier of the ability, with its namespace.
		 * Supports 2-4 segments (e.g. 'my-plugin/my-ability', 'core/posts/find', 'my-plugin/resource/sub/action').
		 * @see WP_Ability::get_name()
		 */
		name: string;

		/**
		 * The human-readable label for the ability.
		 * @see WP_Ability::get_label()
		 */
		label: string;

		/**
		 * The detailed description of the ability.
		 * @see WP_Ability::get_description()
		 */
		description: string;

		/**
		 * The category this ability belongs to.
		 * Must be a valid category slug (lowercase alphanumeric with dashes).
		 * Example: 'data-retrieval', 'user-management'
		 * @see WP_Ability::get_category()
		 */
		category: string;

		/**
		 * JSON Schema for the ability's input parameters.
		 * @see WP_Ability::get_input_schema()
		 */
		input_schema?: Record<string, any>;

		/**
		 * JSON Schema for the ability's output format.
		 * @see WP_Ability::get_output_schema()
		 */
		output_schema?: Record<string, any>;

		/**
		 * Callback function for ability execution.
		 * This property is required for all abilities.
		 */
		callback?: AbilityCallback;

		/**
		 * Permission callback for abilities.
		 * Called before executing the ability to check if it's allowed.
		 * If it returns false, the ability execution will be denied.
		 */
		permissionCallback?: PermissionCallback;

		/**
		 * Metadata about the ability.
		 */
		meta?: {
			annotations?: {
				clientRegistered?: boolean;
				serverRegistered?: boolean;
				readonly?: boolean;
				destructive?: boolean;
				idempotent?: boolean;
			};
			[ key: string ]: any;
		};
	}

	/**
	 * The shape of the arguments for querying abilities.
	 */
	export interface AbilitiesQueryArgs {
		/**
		 * Optional category slug to filter abilities.
		 */
		category?: string;
	}

	/**
	 * Represents an ability category in the WordPress Abilities API.
	 *
	 * @see WP_Ability_Category
	 */
	export interface AbilityCategory {
		/**
		 * The unique slug identifier for the category.
		 * Must be lowercase alphanumeric with dashes only.
		 * Example: 'data-retrieval', 'user-management'
		 * @see WP_Ability_Category::get_slug()
		 */
		slug: string;

		/**
		 * The human-readable label for the category.
		 * @see WP_Ability_Category::get_label()
		 */
		label: string;

		/**
		 * The detailed description of the category.
		 * @see WP_Ability_Category::get_description()
		 */
		description: string;

		/**
		 * Metadata about the category.
		 */
		meta?: {
			annotations?: {
				clientRegistered?: boolean;
				serverRegistered?: boolean;
			};
			[ key: string ]: any;
		};
	}

	/**
	 * Arguments for registering an ability category.
	 * Matches the server-side wp_register_ability_category() $args parameter.
	 *
	 * @see wp_register_ability_category()
	 */
	export interface AbilityCategoryArgs {
		/**
		 * The human-readable label for the category.
		 */
		label: string;

		/**
		 * The detailed description of the category.
		 */
		description: string;

		/**
		 * Optional metadata about the category.
		 */
		meta?: Record<string, any>;
	}

	/**
	 * Get all available abilities with optional filtering.
	 *
	 * @param args Optional query arguments for filtering abilities.
	 * @return Array of matching abilities.
	 */
	export function getAbilities( args?: AbilitiesQueryArgs ): Ability[];

	/**
	 * Get a specific ability by name.
	 *
	 * @param name The ability name.
	 * @return The ability or undefined if not found.
	 */
	export function getAbility( name: string ): Ability | undefined;

	/**
	 * Get all available ability categories.
	 *
	 * @return Array of categories.
	 */
	export function getAbilityCategories(): AbilityCategory[];

	/**
	 * Get a specific ability category by slug.
	 *
	 * @param slug The category slug.
	 * @return The category or undefined if not found.
	 */
	export function getAbilityCategory( slug: string ): AbilityCategory | undefined;

	/**
	 * Register a client-side ability.
	 *
	 * Client-side abilities are executed locally in the browser and must include
	 * a callback function. The ability's category must already be registered.
	 *
	 * @param  ability The ability definition including callback.
	 * @throws {Error} If the ability fails validation.
	 *
	 * @example
	 * ```js
	 * registerAbility({
	 *   name: 'my-plugin/navigate',
	 *   label: 'Navigate to URL',
	 *   description: 'Navigates to a URL within WordPress admin',
	 *   category: 'navigation',
	 *   input_schema: {
	 *     type: 'object',
	 *     properties: {
	 *       url: { type: 'string' }
	 *     },
	 *     required: ['url']
	 *   },
	 *   callback: async ({ url }) => {
	 *     window.location.href = url;
	 *     return { success: true };
	 *   }
	 * });
	 * ```
	 */
	export function registerAbility( ability: Ability ): void;

	/**
	 * Unregister a client-side ability from the store.
	 *
	 * @param  name The ability name to unregister.
	 * @throws {Error} If the ability is server-side and cannot be unregistered.
	 */
	export function unregisterAbility( name: string ): void;

	/**
	 * Register a client-side ability category.
	 *
	 * Use this when registering client-side abilities that belong to a category
	 * not already defined by the server. Client-side categories are stored
	 * alongside server-side categories in the same store.
	 *
	 * @param  slug Category slug (lowercase alphanumeric with dashes only).
	 * @param  args Category arguments (label, description, optional meta).
	 * @throws {Error} If the category fails validation.
	 *
	 * @example
	 * ```js
	 * // Register a new category for block editor abilities
	 * registerAbilityCategory('block-editor', {
	 *   label: 'Block Editor',
	 *   description: 'Abilities for interacting with the WordPress block editor'
	 * });
	 *
	 * // Then register abilities using this category
	 * registerAbility({
	 *   name: 'my-plugin/insert-block',
	 *   label: 'Insert Block',
	 *   description: 'Inserts a block into the editor',
	 *   category: 'block-editor',
	 *   callback: async ({ blockType }) => {
	 *     // Implementation
	 *     return { success: true };
	 *   }
	 * });
	 * ```
	 */
	export function registerAbilityCategory(
		slug: string,
		args: AbilityCategoryArgs
	): void;

	/**
	 * Unregister an ability category.
	 *
	 * @param slug The category slug to unregister.
	 *
	 * @example
	 * ```js
	 * unregisterAbilityCategory('block-editor');
	 * ```
	 */
	export function unregisterAbilityCategory( slug: string ): void;

	/**
	 * Execute an ability.
	 *
	 * Validates input and output against their schemas when defined. For
	 * server-side abilities, input is validated on the client first to avoid
	 * unnecessary network roundtrips, then both input and output are validated on
	 * the server. The client also re-validates the output to ensure data
	 * compatibility between server and client.
	 *
	 * @param  name  The ability name.
	 * @param  input Optional input parameters for the ability.
	 * @return Promise resolving to the ability execution result.
	 * @throws {Error} If the ability is not found, permission is denied, input or output validation fails, or execution throws.
	 */
	export function executeAbility(
		name: string,
		input?: AbilityInput
	): Promise<AbilityOutput>;

	export default interface Abilities {
		getAbilities: typeof getAbilities;
		getAbility: typeof getAbility;
		getAbilityCategories: typeof getAbilityCategories;
		getAbilityCategory: typeof getAbilityCategory;
		registerAbility: typeof registerAbility;
		unregisterAbility: typeof unregisterAbility;
		registerAbilityCategory: typeof registerAbilityCategory;
		unregisterAbilityCategory: typeof unregisterAbilityCategory;
		executeAbility: typeof executeAbility;
	}
}
