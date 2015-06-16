/**
 * Copyright {%= grunt.template.today('yyyy') %} {%= author_name %}{% if( licenses.length ) { %}
 * Released under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.{% } %}{% if( homepage ) { %}
 * {%= homepage %}{% } %}
 */
define( [
   'angular',
   'text!./default.theme/{%= artifact %}.html'
], function( ng, {%= angular_directive_name %}Template  ) {
   'use strict';

   var directiveName = '{%= angular_directive_name %}';

   var directive = [ function() {
      return {
         template: {%= angular_directive_name %}Template,
         link: function( scope, element, attrs ) {
            /* :) */
         }
      };
   } ];

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( directiveName, [] ).directive( directiveName, directive );
} );
