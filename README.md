# An introduction to email layout

This is your last chance. 
After this, there is no turning back. 

You close this tab - the story ends, you wake up in your bed and believe whatever you want to believe. 
You continue on - you stay in Wonderland and I show you how deep the rabbit hole goes.

Welcome to the mystical realm of legacy email clients. 

## Quick guide

Write CSS in the css files, then inline the styles using inline-css when you're ready.

Get started with these tips:
- `<table>` instead of `<div>`,
- when using tables, don’t forget `border="0" cellpadding="0" cellspacing="0"`.
- `#FFFFFF` instead of `#FFF`,
- `padding` instead of `margin`,
- CSS2 instead of CSS3,
- HTML4 instead of HTML5,
- `background-color` instead of `background`,
- HTML attributes instead of CSS,
- inline CSS instead of style sheets or `<style>` blocks.
- fontsize max to avoid zoom

## Preserving images

Images should include the following attributes:
- `src`
- `alt`
- `width`
- `height`
- `border`

## Table layouts

- A <table> element as parent
- A <tr> element (table row) as horizontal divider
- A <td> element (table data cell) as child

```html 
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%" style="font-family:Arial, sans-serif; font-size:16px; line-height:1.5em; color:#333333; padding:2em; background-color:#e4e4e4;">

            <p style="margin:0;">Paragraph of text.</p>

        </td>
    </tr>
</table>
```

Inserted inside the opening <table> tag are the table attributes: role, cellpadding, cellspacing, and border. The attributes are defined as follows:

- role="presentation": defines the <table> as being presentational, preventing it from creating issues for subscribers using assistive technologies such as screen readers.
- cellpadding="0": removes the default cell padding, preventing gaps appearing around the content of each table cell.
- cellspacing="0": removes the default cell spacing, preventing gaps appearing between each table cell.
- border="0": removes the default borders, preventing borders from appearing in the table.

Inserted inside the opening <td> tag is the inline CSS that styles the table cell (the <td>) and its content. The text styling will be inherited by all the paragraphs within the <td>, unless the paragraphs themselves have inline CSS overriding those styles inside their respective opening <p> tags. The style margin:0; is applied inside each opening <p> tag to remove the default spacing applied to paragraphs.

### tools

email subject heading emulator: https://codepen.io/awoodall/full/XbpMbo/

### references

https://webdesign.tutsplus.com/build-an-html-email-template-from-scratch--webdesign-12770a

https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/

https://litmus.com/builder/ac11b59

Still doubting your email skills? "You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind."

Oskar Hulter
