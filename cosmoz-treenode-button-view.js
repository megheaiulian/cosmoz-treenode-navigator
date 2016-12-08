/* */
(function () {
	'use strict';

	Polymer({
		behaviors: [
			Cosmoz.TranslatableBehavior
		],
		is: 'cosmoz-treenode-button-view',

		properties: {
			/*
			Node structure object
			that component is given
			 */
			data: {
				type: Object
			},
			/*
			 Current path to displayed
			 node/folder. That is an
			 "address" to the node.
			 An example would be "1.5.35",
			 where node id/indexes are put
			 together with "." set as
			 the seperator.
			 */
			locationPath: {
				type: String,
				value: '',
				notify: true
			},
			/*
			 Currently selected node object
			 */
			chosenNode: {
				type: Object,
				value: function (){
					return {};
				},
				notify: true
			},
			/**
			 * Prevent reset button
			 */
			noReset: {
				type: Boolean,
				value: false
			},
			/*
			 Currently selected node object
			 */
			potentiallySelectedNode: {
				type: Object,
				value: function () {
					return {};
				}
			},
			/*
			Placeholder for search field.
			 */
			searchPlaceholder: {
				type: String,
				value: 'Search'
			},
			/*
			Placeholder for button text.
			 */
			buttonTextPlaceholder: {
				type: String,
				value: 'No selection made'
			},
			/*
			 path value
			 */
			value: {
				type: String,
				value: '',
				notify: true
			},
			/*
			Input value for searches
			 */
			inputValue: {
				type: String,
				value: ''
			},
			/*
			 Settable name for property which
			 houses childobjects.
			 */
			childProperty: {
				type: String,
				value: 'children'
			},
			/*
			 Settable property name that
			 searches will be compared too.
			 */
			comparisonProperty: {
				type: String,
				value: 'name'
			},
			/*
			Chosen separator to denote
			navigation path.
			 */
			separatorSign: {
				type: String,
				value: '.'
			},
			/*
			 Settable text given to user
			 when local search has
			 been done.
			 */
			localSearchDoneText: {
				type: String,
				value: 'Click to search again but globally.'
			},
			/*
			Settable text given to user
			when after an global search.
			*/
			resetText: {
				type: String,
				value: 'Click to reset.'
			},
			/*
			Settable text for dialog title.
			*/
			dialogText: {
				type: String,
				value: 'Search or navigate to chosen destination'
			},
			/*
			Minimum length before an search
			starts.
			*/
			searchMinLength: {
				type: Number,
				value: 2
			}
		},
		_enableReset: function (value, noReset) {
			if (noReset) {
				return false;
			}
			return !value;
		},
		_getButtonLabel: function (node, placeholder) {
			return node.folderPath || placeholder;
		},
		openDialogTree: function (event) {
			this.$.dialogTree.open();
		},
		reset: function (event) {
			this.$.treenodeNavigator.returnToRoot();
		},
		selectNode: function (event) {
			this.value = this.potentiallySelectedNode.pathToNode;
		}
	});
}());