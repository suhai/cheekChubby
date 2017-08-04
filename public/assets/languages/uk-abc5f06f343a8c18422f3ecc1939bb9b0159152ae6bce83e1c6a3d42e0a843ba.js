/*!
 * froala_editor v2.6.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Ukrainian
 */

$.FE.LANGUAGE['uk'] = {
  translation: {
    // Place holder
    "Type something": "\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0431\u0443\u0434\u044c-\u0449\u043e",

    // Basic formatting
    "Bold": "\u0416\u0438\u0440\u043d\u0438\u0439",
    "Italic": "\u041a\u0443\u0440\u0441\u0438\u0432",
    "Underline": "\u041f\u0456\u0434\u043a\u0440\u0435\u0441\u043b\u0435\u043d\u0438\u0439",
    "Strikethrough": "\u0417\u0430\u043a\u0440\u0435\u0441\u043b\u0435\u043d\u0438\u0439",

    // Main buttons
    "Insert": "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
    "Delete": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
    "Cancel": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    "OK": "OK",
    "Back": "\u043d\u0430\u0437\u0430\u0434",
    "Remove": "\u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
    "More": "\u0431\u0456\u043b\u044c\u0448\u0435",
    "Update": "\u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",
    "Style": "\u0441\u0442\u0438\u043b\u044c",

    // Font
    "Font Family": "\u0428\u0440\u0438\u0444\u0442",
    "Font Size": "\u0420\u043e\u0437\u043c\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",

    // Colors
    "Colors": "\u043a\u043e\u043b\u044c\u043e\u0440\u0438",
    "Background": "\u0424\u043e\u043d",
    "Text": "\u0422\u0435\u043a\u0441\u0442",

    // Paragraphs
    "Paragraph Format": "\u0424\u043e\u0440\u043c\u0430\u0442",
    "Normal": "\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0438\u0439",
    "Code": "\u041a\u043e\u0434",
    "Heading 1": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1",
    "Heading 2": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2",
    "Heading 3": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3",
    "Heading 4": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4",

    // Style
    "Paragraph Style": "\u043f\u0443\u043d\u043a\u0442 \u0441\u0442\u0438\u043b\u044c",
    "Inline Style": "\u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0441\u0442\u0438\u043b\u044c",

    // Alignment
    "Align": "\u0412\u0438\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u043d\u043d\u044f",
    "Align Left": "\u041f\u043e \u043b\u0456\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Center": "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",
    "Align Right": "\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Justify": "\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0456",
    "None": "\u043d\u0456",

    // Lists
    "Ordered List": "\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",
    "Unordered List": "\u041c\u0430\u0440\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",

    // Indent
    "Decrease Indent": "\u0417\u043c\u0435\u043d\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043f",
    "Increase Indent": "\u0417\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043f",

    // Links
    "Insert Link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "Open in new tab": "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u0432 \u043d\u043e\u0432\u0456\u0439 \u0432\u043a\u043b\u0430\u0434\u0446\u0456",
    "Open Link": "\u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "Edit Link": "\u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "Unlink": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
    "Choose Link": "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",

    // Images
    "Insert Image": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",
    "Upload Image": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",
    "By URL": "\u0437\u0430 URL",
    "Browse": "\u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0430\u0442\u0438",
    "Drop image": "\u041f\u0435\u0440\u0435\u043c\u0456\u0441\u0442\u0456\u0442\u044c \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u044e\u0434\u0438",
    "or click": "\u0430\u0431\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c",
    "Manage Images": "\u041a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f\u043c\u0438",
    "Loading": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f",
    "Deleting": "\u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f",
    "Tags": "\u043a\u043b\u044e\u0447\u043e\u0432\u0456 \u0441\u043b\u043e\u0432\u0430",
    "Are you sure? Image will be deleted.": "\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456? \u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e.",
    "Replace": "\u0437\u0430\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438",
    "Uploading": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f",
    "Loading image": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c",
    "Display": "\u0434\u0438\u0441\u043f\u043b\u0435\u0439",
    "Inline": "\u0412 \u043b\u0456\u043d\u0456\u044e",
    "Break Text": "\u043f\u0435\u0440\u0435\u0440\u0432\u0430 \u0442\u0435\u043a\u0441\u0442",
    "Alternate Text": "\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",
    "Change Size": "\u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0440\u043e\u0437\u043c\u0456\u0440",
    "Width": "\u0428\u0438\u0440\u0438\u043d\u0430",
    "Height": "\u0412\u0438\u0441\u043e\u0442\u0430",
    "Something went wrong. Please try again.": "\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",

    // Video
    "Insert Video": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043e",
    "Embedded Code": "\u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u0434",

    // Tables
    "Insert Table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044e",
    "Table Header": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0456",
    "Remove Table": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0456",
    "Table Style": "\u0421\u0442\u0438\u043b\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0456",
    "Horizontal Align": "\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0435 \u0432\u0438\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u043d\u043d\u044f",
    "Row": "\u0420\u044f\u0434\u043e\u043a",
    "Insert row above": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0440\u044f\u0434\u043e\u043a \u0437\u0432\u0435\u0440\u0445\u0443",
    "Insert row below": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0440\u044f\u0434\u043e\u043a \u0437\u043d\u0438\u0437\u0443",
    "Delete row": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0440\u044f\u0434\u043e\u043a",
    "Column": "\u0421\u0442\u043e\u0432\u043f\u0435\u0446\u044c",
    "Insert column before": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u0442\u043e\u0432\u043f\u0435\u0446\u044c \u043b\u0456\u0432\u043e\u0440\u0443\u0447",
    "Insert column after": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u0442\u043e\u0432\u043f\u0435\u0446\u044c \u043f\u0440\u0430\u0432\u043e\u0440\u0443\u0447",
    "Delete column": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0441\u0442\u043e\u0432\u043f\u0435\u0446\u044c",
    "Cell": "\u041a\u043e\u043c\u0456\u0440\u043a\u0430",
    "Merge cells": "\u041e\u0431'\u0454\u0434\u043d\u0430\u0442\u0438 \u043a\u043e\u043c\u0456\u0440\u043a\u0438",
    "Horizontal split": "\u0420\u043e\u0437\u0434\u0456\u043b\u0438\u0442\u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e",
    "Vertical split": "\u0420\u043e\u0437\u0434\u0456\u043b\u0438\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e",
    "Cell Background": "\u0441\u0442\u0456\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u0438\u0439 \u0444\u043e\u043d",
    "Vertical Align": "\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430 \u0432\u0438\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u043d\u043d\u044f",
    "Top": "\u0422\u043e\u043f",
    "Middle": "\u0441\u0435\u0440\u0435\u0434\u043d\u0456\u0439",
    "Bottom": "\u0434\u043d\u043e",
    "Align Top": "\u0417\u0456\u0441\u0442\u0430\u0432\u0442\u0435 \u0432\u0435\u0440\u0445\u043d\u044e",
    "Align Middle": "\u0432\u0438\u0440\u0456\u0432\u043d\u044f\u0442\u0438 \u043f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456",
    "Align Bottom": "\u0417\u0456\u0441\u0442\u0430\u0432\u0442\u0435 \u043d\u0438\u0436\u043d\u044e",
    "Cell Style": "\u0441\u0442\u0438\u043b\u044c \u043a\u043e\u043c\u0456\u0440\u043a\u0438",

    // Files
    "Upload File": "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b",
    "Drop file": "\u041f\u0435\u0440\u0435\u043c\u0456\u0441\u0442\u0456\u0442\u044c \u0444\u0430\u0439\u043b \u0441\u044e\u0434\u0438",

    // Emoticons
    "Emoticons": "\u0441\u043c\u0430\u0439\u043b\u0438",
    "Grinning face": "\u043f\u043e\u0441\u043c\u0456\u0445\u043d\u0443\u0432\u0448\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430",
    "Grinning face with smiling eyes": "\u041f\u043e\u0441\u043c\u0456\u0445\u043d\u0443\u0432\u0448\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0443\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0438\u043c\u0438 \u043e\u0447\u0438\u043c\u0430",
    "Face with tears of joy": "\u041e\u0431\u043b\u0438\u0447\u0447\u044f \u0437\u0456 \u0441\u043b\u044c\u043e\u0437\u0430\u043c\u0438 \u0440\u0430\u0434\u043e\u0441\u0442\u0456",
    "Smiling face with open mouth": "\u0423\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0435 \u043e\u0431\u043b\u0438\u0447\u0447\u044f \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c",
    "Smiling face with open mouth and smiling eyes": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c \u0456 ",
    "Smiling face with open mouth and cold sweat": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c \u0456 ",
    "Smiling face with open mouth and tightly-closed eyes": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c \u0456 \u0449\u0456\u043b\u044c\u043d\u043e \u0437\u0430\u043a\u0440\u0438\u0442\u0438\u043c\u0438 \u043e\u0447\u0438\u043c\u0430",
    "Smiling face with halo": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0433\u0430\u043b\u043e",
    "Smiling face with horns": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0440\u043e\u0433\u0430\u043c\u0438",
    "Winking face": "\u043f\u0456\u0434\u043c\u043e\u0440\u0433\u0443\u044e\u0447\u0438 \u043e\u0441\u043e\u0431\u0430",
    "Smiling face with smiling eyes": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0443\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0438\u043c\u0438 \u043e\u0447\u0438\u043c\u0430",
    "Face savoring delicious food": "\u041e\u0441\u043e\u0431\u0430 \u0441\u043c\u0430\u043a\u0443\u044e\u0447\u0438 \u0441\u043c\u0430\u0447\u043d\u0443 \u0457\u0436\u0443",
    "Relieved face": "\u0437\u0432\u0456\u043b\u044c\u043d\u0435\u043d\u043e \u043e\u0441\u043e\u0431\u0430",
    "Smiling face with heart-shaped eyes": "\u041f\u043e\u0441\u043c\u0456\u0445\u0430\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0443 \u0444\u043e\u0440\u043c\u0456 \u0441\u0435\u0440\u0446\u044f \u043e\u0447\u0438\u043c\u0430",
    "Smiling face with sunglasses": "\u0053\u006d\u0069\u006c\u0069\u006e\u0067 \u0066\u0061\u0063\u0065 \u0077\u0069\u0074\u0068 \u0073\u0075\u006e\u0067\u006c\u0061\u0073\u0073\u0065\u0073",
    "Smirking face": "\u043f\u043e\u0441\u043c\u0456\u0445\u043d\u0443\u0432\u0448\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430",
    "Neutral face": "\u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Expressionless face": "\u043d\u0435\u0432\u0438\u0440\u0430\u0437\u043d\u0456 \u043e\u0431\u043b\u0438\u0447\u0447\u044f",
    "Unamused face": "\u0055\u006e\u0061\u006d\u0075\u0073\u0065\u0064 \u043e\u0441\u043e\u0431\u0430",
    "Face with cold sweat": "\u041e\u0441\u043e\u0431\u0430 \u0437 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u0443",
    "Pensive face": "\u0437\u0430\u043c\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Confused face": "\u043f\u043b\u0443\u0442\u0430\u0442\u0438 \u043e\u0441\u043e\u0431\u0430",
    "Confounded face": "\u043d\u0435\u0445\u0430\u0439 \u043f\u043e\u0441\u043e\u0440\u043e\u043c\u043b\u044f\u0442\u044c\u0441\u044f \u043e\u0441\u043e\u0431\u0430",
    "Kissing face": "\u043f\u043e\u0446\u0456\u043b\u0443\u043d\u043a\u0438 \u043e\u0441\u043e\u0431\u0430",
    "Face throwing a kiss": "\u041e\u0441\u043e\u0431\u0430 \u043a\u0438\u0434\u0430\u043b\u0438 \u043f\u043e\u0446\u0456\u043b\u0443\u043d\u043e\u043a",
    "Kissing face with smiling eyes": "\u041f\u043e\u0446\u0456\u043b\u0443\u043d\u043a\u0438 \u043e\u0441\u043e\u0431\u0430 \u0437 \u0443\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0438\u043c\u0438 \u043e\u0447\u0438\u043c\u0430",
    "Kissing face with closed eyes": "\u041f\u043e\u0446\u0456\u043b\u0443\u043d\u043a\u0438 \u043e\u0431\u043b\u0438\u0447\u0447\u044f \u0437 \u0437\u0430\u043f\u043b\u044e\u0449\u0435\u043d\u0438\u043c\u0438 \u043e\u0447\u0438\u043c\u0430",
    "Face with stuck out tongue": "\u041e\u0431\u043b\u0438\u0447\u0447\u044f \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043b\u0438 \u044f\u0437\u0438\u043a",
    "Face with stuck out tongue and winking eye": "\u041e\u0431\u043b\u0438\u0447\u0447\u044f \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043b\u0438 \u044f\u0437\u0438\u043a\u0430 \u0456 \u0410\u043d\u0456\u043c\u043e\u0432\u0430\u043d\u0435 \u043e\u0447\u0435\u0439",
    "Face with stuck out tongue and tightly-closed eyes": "\u041e\u0431\u043b\u0438\u0447\u0447\u044f \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043b\u0438 \u044f\u0437\u0438\u043a\u0430 \u0456 \u0449\u0456\u043b\u044c\u043d\u043e \u0437\u0430\u043a\u0440\u0438\u0442\u0456 \u043e\u0447\u0456",
    "Disappointed face": "\u0440\u043e\u0437\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Worried face": "\u0441\u0442\u0443\u0440\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Angry face": "\u0437\u043b\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Pouting face": "\u043f\u0443\u0445\u043a\u0456 \u043e\u0441\u043e\u0431\u0430",
    "Crying face": "\u043f\u043b\u0430\u0447 \u043e\u0441\u043e\u0431\u0430",
    "Persevering face": "\u043d\u0430\u043f\u043e\u043b\u0435\u0433\u043b\u0438\u0432\u0430 \u043e\u0441\u043e\u0431\u0430",
    "Face with look of triumph": "\u041e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0438\u0434\u043e\u043c \u0442\u0440\u0456\u0443\u043c\u0444\u0443",
    "Disappointed but relieved face": "\u0420\u043e\u0437\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u0438\u0439\u002c \u0430\u043b\u0435 \u0437\u0432\u0456\u043b\u044c\u043d\u0435\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Frowning face with open mouth": "\u041d\u0430\u0441\u0443\u043f\u0438\u0432\u0448\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c",
    "Anguished face": "\u0431\u043e\u043b\u0456\u0441\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Fearful face": "\u043f\u043e\u0431\u043e\u044e\u044e\u0447\u0438\u0441\u044c \u043e\u0441\u043e\u0431\u0430",
    "Weary face": "\u0432\u0442\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Sleepy face": "сонне обличчя",
    "Tired face": "\u0432\u0442\u043e\u043c\u0438\u043b\u0438\u0441\u044f \u043e\u0441\u043e\u0431\u0430",
    "Grimacing face": "\u0433\u0440\u0438\u043c\u0430\u0441\u0443\u044e\u0447\u0438 \u043e\u0441\u043e\u0431\u0430",
    "Loudly crying face": "\u004c\u006f\u0075\u0064\u006c\u0079 \u0063\u0072\u0079\u0069\u006e\u0067 \u0066\u0061\u0063\u0065",
    "Face with open mouth": "\u041e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c",
    "Hushed face": "\u0437\u0430\u0442\u0438\u0445 \u043e\u0441\u043e\u0431\u0430",
    "Face with open mouth and cold sweat": "\u041e\u0441\u043e\u0431\u0430 \u0437 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u043c \u0440\u043e\u0442\u043e\u043c \u0456 \u0445\u043e\u043b\u043e\u0434\u043d\u0438\u0439 \u043f\u0456\u0442",
    "Face screaming in fear": "\u041e\u0441\u043e\u0431\u0430 \u043a\u0440\u0438\u0447\u0430\u0442\u0438 \u0432 \u0441\u0442\u0440\u0430\u0445\u0443",
    "Astonished face": "\u0437\u0434\u0438\u0432\u043e\u0432\u0430\u043d\u0438\u0439 \u043e\u0441\u043e\u0431\u0430",
    "Flushed face": "\u043f\u0440\u0438\u043f\u043b\u0438\u0432 \u043a\u0440\u043e\u0432\u0456 \u0434\u043e \u043e\u0431\u043b\u0438\u0447\u0447\u044f",
    "Sleeping face": "\u0421\u043f\u043b\u044f\u0447\u0430 \u043e\u0441\u043e\u0431\u0430",
    "Dizzy face": "\u0414\u0456\u0437\u0437\u0456 \u043e\u0441\u043e\u0431\u0430",
    "Face without mouth": "\u041e\u0441\u043e\u0431\u0430 \u0431\u0435\u0437 \u0440\u043e\u0442\u0430",
    "Face with medical mask": "\u041e\u0441\u043e\u0431\u0430 \u0437 \u043c\u0435\u0434\u0438\u0447\u043d\u043e\u044e \u043c\u0430\u0441\u043a\u043e\u044e",

    // Line breaker
    "Break": "\u0437\u043b\u043e\u043c\u0438\u0442\u0438",

    // Math
    "Subscript": "\u043f\u0456\u0434\u0440\u044f\u0434\u043a\u043e\u0432\u0438\u0439",
    "Superscript": "\u043d\u0430\u0434\u0440\u044f\u0434\u043a\u043e\u0432\u0438\u0439 \u0441\u0438\u043c\u0432\u043e\u043b",

    // Full screen
    "Fullscreen": "\u043f\u043e\u0432\u043d\u043e\u0435\u043a\u0440\u0430\u043d\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c",

    // Horizontal line
    "Insert Horizontal Line": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0443 \u043b\u0456\u043d\u0456\u044e",

    // Clear formatting
    "Clear Formatting": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0443\u0432\u0430\u043d\u043d\u044f",

    // Undo, redo
    "Undo": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    "Redo": "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438",

    // Select all
    "Select All": "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",

    // Code view
    "Code View": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u043a\u043e\u0434\u0443",

    // Quote
    "Quote": "\u0426\u0438\u0442\u0430\u0442\u0430",
    "Increase": "\u0417\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438",
    "Decrease": "\u0437\u043d\u0438\u0436\u0435\u043d\u043d\u044f",

    // Quick Insert
    "Quick Insert": "\u0428\u0432\u0438\u0434\u043a\u0438\u0439 \u0432\u0441\u0442\u0430\u0432\u043a\u0430"
  },
  direction: "ltr"
};

}));
