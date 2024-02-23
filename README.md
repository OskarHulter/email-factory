# email-factory

## tools
https://litmus.com/builder/ac11b59

## references
https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/

## Framework candidates
mjml

https://maizzle.com/


HTML emails were traditionally developed using <table> elements, and only <table> elements. But now there are better ways. The fact is, only Microsoft Outlook requires you to use tables for HTML structure; all other email and webmail clients support the use of <div>s for this purpose.

Divs have several advantages over tables. They’re more flexible to work with, supporting CSS properties that tables don’t (such as float), and unlike tables, they don’t create issues for subscribers using assistive technologies such as screen readers.

A <table> element (table)
A <tr> element (table row)
A <td> element (table data cell, or as it’s more commonly referred to, a table cell)

```html
<table>
    <tr>
        <td>

            // Email content //

        </td>
    </tr>
</table>
```

Inserted inside the opening <table> tag are the table attributes: role, cellpadding, cellspacing, and border. The attributes are defined as follows:

- role="presentation": defines the <table> as being presentational, rather than using data, preventing it from creating issues for subscribers using assistive technologies such as screen readers.
- cellpadding="0": removes the default cell padding, preventing gaps appearing around the content of each table cell.
- cellspacing="0": removes the default cell spacing, preventing gaps appearing between each table cell.
- border="0": removes the default borders, preventing borders from appearing in the table.

Additional attributes, such as width and align, may also be inserted inside the opening <table> and <td> tags.

```html 
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%">

            // Email content //

        </td>
    </tr>
</table>
```

### Styles
Inserted inside the opening <td> tag is the inline CSS that styles the table cell (the <td>) and its content. The text styling will be inherited by all the paragraphs within the <td>, unless the paragraphs themselves have inline CSS overriding those styles inside their respective opening <p> tags. The style margin:0; is applied inside each opening <p> tag to remove the default spacing applied to paragraphs.

```html 
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%" style="font-family:Arial, sans-serif; font-size:16px; line-height:1.5em; color:#333333; padding:2em; background-color:#e4e4e4;">

            <p style="margin:0;">Paragraph of text.</p>

        </td>
    </tr>
</table>
```

## Images in email

When inserting images remember to include the following attributes or risk them breaking in different clients:

- `src`
- `alt`
- `width`
- `height`
- `border`

tip: fontsize medium or fontsize max.

When using tables, don’t forget `border="0" cellpadding="0" cellspacing="0"`.

- `<table>` instead of `<div>`,
- `#FFFFFF` instead of `#FFF`,
- `padding` instead of `margin`,
- CSS2 instead of CSS3,
- HTML4 instead of HTML5,
- `background-color` instead of `background`,
- HTML attributes instead of CSS,
- inline CSS instead of style sheets or `<style>` blocks.
