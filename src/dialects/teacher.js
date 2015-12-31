if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['../markdown_helpers', './dialect_helpers', './gruber', '../parser'], function (MarkdownHelpers, DialectHelpers, Gruber, Markdown) {

  var Teacher = DialectHelpers.subclassDialect( Gruber ),
      extract_attr = MarkdownHelpers.extract_attr,
      forEach = MarkdownHelpers.forEach;

  Teacher.block.multiple_choice = function multiple_choice( block ) {
    return null;
  };

  Markdown.dialects.Teacher = Teacher;
  Markdown.buildBlockOrder ( Markdown.dialects.Teacher.block );
  Markdown.buildInlinePatterns( Markdown.dialects.Teacher.inline );

  return Teacher;
});
