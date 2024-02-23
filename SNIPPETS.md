# HTML snippets for email

A collection of useful snippets that cover edge-cases caused by older email clients. 

## head

```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title>head-template</title>
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

we have a few meta tags to ensure the right text encoding, viewport scaling across different mobile devices, and one to stop Apple from strangely adjusting the size in their mail apps.

Underneath the <title></title> tag you’ll see some code between <!--[if mso]> and <![endif]-->. Placing code inside those two tags means that only Microsoft Outlook on Windows will apply it (mso = “Microsoft Outlook”). In there, we have a small amount of XML that will ensure that PNG images display at the right size in Outlook on Windows. The xlmns settings that we put in the html tag ensures this code gets interpreted properly.

Underneath that, we have a style tag with just a couple of CSS rules. The first sets the font for all our main elements in the simple email template, and this is for the benefit of Gmail webmail, which will override our font settings unless we include this. If you end up changing your fonts later, be sure to make the change here too.

## body

```html 
<body style="margin:0;padding:0;">
    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr>
			<td align="center" style="padding:0;">
				Hello!
			</td>
		</tr>
	</table>
</body>
```

Always reset body.

We’ve added a table with a width of 100%. This acts as a true body tag for our email, because the body tag is sometimes removed by email clients. Apply any “body” background colour that you want to this table tag.

All our tables will be set to role="presentation". This makes them more accessible, as it tells screen readers to treat it as a visual table, not a data table.

We have set border-collapse to collapse, and both border and border-spacing to zero to avoid any unexpected space in the table.

You’ll notice we are using <td align="center">, and if you’re already familiar with HTML you might be wondering why, since align is actually a deprecated HTML property. We use this in HTML email templates because email clients vary so widely in their level of CSS support, and often we still need to use deprecated HTML to ensure everything displays properly everywhere. In this instance, it is because Outlook for Windows does not obey margin:0 auto; in CSS to center things.

Finally, make sure you always set the padding on your table cells to zero in the inline styles, e.g. <td style="padding:0;">, otherwise, email clients will all add their own amount of padding. When we do add padding ourselves, we can adjust this value, but if there is no padding to be applied to any of the sides, you must explicitly set it to zero. 

## Reliable responsiveness

The easiest solution is to stick to a single column and make your emails fluid. This means that as the viewport shrinks, your content area shrinks.

```css
.container {
  max-width: 600px;
  width: 100%;
}
```

## Responsive images
Consider Retina images at 1.5× to 3×, and set image dimensions inline.

```html
<img src="https://www.smashingmagazine.com/wp-content/uploads/2016/11/logo.png" height="100" width="600" alt="Company Logo" style="max-width: 100%;">
```

We can’t rely on max-width: 100%; because some clients ignore it. You will also want to embed the following CSS:

```css
@media only screen and (max-width: 620px) {
  img {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
```

## Image with background color

Always specify the width of your images using the HTML width attribute rather than CSS, e.g. width="300", not style="width:300px;".
We have also set the image height to auto to avoid any squishing, and display to block, which prevents gaps from appearing underneath it in some email clients.

```html
<td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
	<img src="images/h1.png" alt="" width="300" style="height:auto;display:block;" />
</td>
```

## Spacer element

Simple way to add vertical space:

```html
<tr><td style="line-height:10px;height:10px;mso-line-height-rule:exactly;">&nbsp;</td></tr>
```
