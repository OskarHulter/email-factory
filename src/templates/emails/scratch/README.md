```html 
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title></title>
	<!--[if mso]> 
<noscript> 
<xml> 
<o:OfficeDocumentSettings> 
<o:PixelsPerInch>96</o:PixelsPerInch> 
</o:OfficeDocumentSettings> 
</xml> 
</noscript> 
<![endif]-->
	<style>
		table, td, div, h1, p {font-family: Arial, sans-serif;}
		table, td {border:2px solid #000000 !important;}
	</style>
</head>
</html>
```

There are quite a few things in the code above, but it’s the bare minimum you need to ensure your final HTML in email renders beautifully everywhere.

Firstly, we have a few meta tags to ensure the right text encoding, viewport scaling across different mobile devices, and one to stop Apple from strangely adjusting the size in their mail apps.

Underneath the <title></title> tag you’ll see some code between <!--[if mso]> and <![endif]-->. Placing code inside those two tags means that only Microsoft Outlook on Windows will apply it (mso = “Microsoft Outlook”). In there, we have a small amount of XML that will ensure that PNG images display at the right size in Outlook on Windows. The xlmns settings that we put in the html tag ensures this code gets interpreted properly.

Underneath that, we have a style tag with just a couple of CSS rules. The first sets the font for all our main elements in the simple email template, and this is for the benefit of Gmail webmail, which will override our font settings unless we include this. If you end up changing your fonts later, be sure to make the change here too.

Finally, we are including table, td {border:2px solid #000000 !important;} which will draw a border on everything. This is purely so that we can see what we are doing as we build, and we’ll remove it at the end.

With that sorted, we can commence building the rest of the structure of our basic HTML email template.
