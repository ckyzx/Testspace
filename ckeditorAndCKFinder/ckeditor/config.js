/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.height=480;
	
	config.toolbar = 'MyToolbar';
    config.toolbar_MyToolbar =
    [
        ['Source','-','Save','NewPage','Preview','-','Templates'],
        ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
        ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
        '/',
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Link','Unlink','Anchor'],
        ['Image','Flash','flvPlayer','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
        '/',
        ['Styles','Format','Font','FontSize'],
        ['TextColor','BGColor'],
        ['Maximize', 'ShowBlocks','-','About']
        
    ];
    config.extraPlugins = 'flvPlayer';
	
	config.filebrowserBrowseUrl = 'ckfinder/ckfinder.html'; 
	config.filebrowserImageBrowseUrl = 'ckfinder/ckfinder.html?type=Images';
	config.filebrowserFlashBrowseUrl = 'ckfinder/ckfinder.html?type=Flash';
	config.filebrowserUploadUrl = 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
	config.filebrowserImageUploadUrl = 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
	config.filebrowserFlashUploadUrl = 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
};
